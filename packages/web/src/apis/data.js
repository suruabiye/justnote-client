import userSession from '../userSession';
import { SETTINGS_FNAME, N_NOTES, MAX_TRY, TRASH, N_DAYS } from '../types/const';

const createNoteFPath = (listName, fname, subName) => {
  return `notes/${listName}/${fname}/${subName}`;
};

const createNoteFName = (id, parentIds) => {
  if (parentIds) return `${id}_${parentIds.join('-')}`;
  return id;
};

const extractNoteFPath = (fpath) => {
  let [listName, fname, subName] = fpath.split('/').slice(1);
  return { listName, fname, subName };
};

const extractNoteFName = (fname) => {
  if (!fname.includes('_')) return { id: fname, parentIds: null };

  const [id, _parentIds] = fname.split('_');
  const parentIds = _parentIds.split('-');
  return { id, parentIds };
};

const extractNoteId = (id) => {
  let i;
  for (i = id.length - 1; i <= 0; i--) {
    if (/\d/.test(id[i])) break;
  }

  return { dt: parseInt(id.slice(0, i + 1)) };
};

const listFPaths = async () => {

  const noteFPaths = [];
  let settingsFPath = null;

  await userSession.listFiles((fpath) => {
    if (fpath.startsWith('notes')) {
      noteFPaths.push(fpath);
    } else if (fpath === SETTINGS_FNAME) {
      settingsFPath = fpath;
    } else {
      throw new Error(`Invalid file path: ${fpath}`);
    }

    return true;
  });

  return { noteFPaths, settingsFPath };
};

const listNoteIds = (noteFPaths) => {

  const ids = [];
  const toFPaths = {};
  const toParents = {};
  const toChildren = {};
  for (const fpath of noteFPaths) {
    const { fname } = extractNoteFPath(fpath);
    const { id, parentIds } = extractNoteFName(fname);

    if (!toFPaths[id]) toFPaths[id] = [];
    toFPaths[id].push(fpath);

    if (ids.includes(id)) continue;
    ids.push(id);

    if (parentIds) {
      toParents[id] = parentIds;
      for (const pid of parentIds) {
        if (!toChildren[pid]) toChildren[pid] = [];
        toChildren[pid].push(id);
      }
    } else {
      toParents[id] = null;
    }
  }

  const leafIds = [];
  for (const id of ids) {
    if (!toChildren[id]) {
      if (id.startsWith('deleted')) continue;
      leafIds.push(id);
    }
  }

  const toRootIds = {};
  const toLeafIds = {};
  for (const id of leafIds) {
    let _id = id;
    while (toParents[_id]) _id = toParents[_id][0];

    toRootIds[id] = _id;

    if (!toLeafIds[_id]) toLeafIds[_id] = [];
    toLeafIds[_id].push(id);
  }

  const noteIds = [];
  const conflictedIds = [];
  for (const id of leafIds) {
    const parentIds = toParents[id];

    const rootId = toRootIds[id];
    const { dt: addedDT } = extractNoteId(rootId);
    const { dt: updatedDT } = extractNoteId(id);

    const leafIds = toLeafIds[rootId];
    const isConflicted = leafIds.length > 1;
    const conflictWith = isConflicted ? leafIds : null;

    const fpaths = toFPaths[id];
    const { listName } = extractNoteFPath(fpaths[0]);

    const noteId = {
      parentIds, id, addedDT, updatedDT, isConflicted, conflictWith, fpaths, listName,
    };

    if (isConflicted) conflictedIds.push(noteId);
    else noteIds.push(noteId);
  }

  const conflictWiths = Object.values(toLeafIds).filter(ids => ids.length > 1);

  return { noteIds, conflictedIds, conflictWiths };
};

const batchGetFileWithRetry = async (fpaths, callCount) => {

  const responses = await Promise.all(
    fpaths.map(fpath =>
      userSession.getFile(fpath)
        .then(content => ({ content, fpath, success: true }))
        .catch(error => ({ error, fpath, success: false }))
    )
  );

  const failedResponses = responses.filter(({ success }) => !success);
  const failedFPaths = failedResponses.map(({ fpath }) => fpath);

  if (failedResponses.length) {
    if (callCount + 1 >= MAX_TRY) throw failedResponses[0].error;

    return [
      ...responses.filter(({ success }) => success),
      ...(await batchGetFileWithRetry(failedFPaths, callCount + 1))
    ];
  }

  return responses;
};

const toNotes = (noteIds, fpaths, contents) => {

  const notes = [];
  for (const noteId of noteIds) {
    let title, body, media = [];
    for (const fpath of noteId.fpaths) {
      const content = contents[fpaths.indexOf(fpath)];

      const { subName } = extractNoteFPath(fpath);
      if (subName === 'index.json') {
        title = content.title;
        body = content.body;
      } else {
        media.push({ name: subName, content: content })
      }
    }
    notes.push({
      parentIds: noteId.parentIds,
      id: noteId.id,
      title, body, media,
      addedDT: noteId.addedDT,
      updatedDT: noteId.updatedDT,
    });
  }

  return notes;
};

const toConflictedNotes = (noteIds, conflictWiths, fpaths, contents) => {

  const notes = toNotes(noteIds, fpaths, contents);

  const conflictedNotes = [];
  for (const conflictWith of conflictWiths) {
    const selectedNotes = notes.filter(note => conflictWith.includes(note.id));
    const sortedNotes = selectedNotes.sort((a, b) => a.addedDT - b.addedDT);
    const sortedListNames = sortedNotes.map(note => {
      return noteIds.find(noteId => noteId.id === note.id).listName;
    });

    conflictedNotes.push({
      id: 'conflict-' + sortedNotes.map(note => note.id).join('-'),
      listNames: sortedListNames,
      notes: sortedNotes,
      addedDT: Math.min(...sortedNotes.map(note => note.addedDT)),
      updatedDT: Math.max(...sortedNotes.map(note => note.updatedDT)),
    });
  }

  return conflictedNotes;
};

const fetch = async (params) => {

  const { listName, sortOn, doDescendingOrder, doFetchSettings } = params;

  const { noteFPaths, settingsFPath } = await listFPaths();
  const { noteIds, conflictedIds, conflictWiths } = listNoteIds(noteFPaths);

  const namedNoteIds = noteIds.filter(id => id.listName === listName);
  let selectedNoteIds = namedNoteIds.sort((a, b) => a[sortOn] - b[sortOn]);
  if (doDescendingOrder) selectedNoteIds.reverse();
  selectedNoteIds = selectedNoteIds.slice(0, N_NOTES);

  const namedConflictWiths = conflictWiths.filter(conflictWith => {
    for (const id of conflictWith) {
      const conflictedId = conflictedIds.find(noteId => noteId.id === id);
      if (conflictedId.listName === listName) return true;
    }
    return false;
  });
  const selectedConflictWiths = namedConflictWiths.slice(0, N_NOTES);
  const selectedConflictedIds = conflictedIds.filter(noteId => {
    return selectedConflictWiths.some(conflictWith => conflictWith.includes(noteId.id));
  });

  const fpaths = [];
  for (const id of selectedNoteIds) fpaths.push(...id.fpaths);
  for (const id of selectedConflictedIds) fpaths.push(...id.fpaths);

  const responses = await batchGetFileWithRetry(fpaths, 0);
  const contents = [];
  for (let i = 0; i < fpaths.length; i++) {
    let content = responses[i].content;
    if (fpaths[i].endsWith('index.json')) content = JSON.parse(content);
    contents.push(content);
  }

  const notes = toNotes(selectedNoteIds, fpaths, contents);
  const hasMore = namedNoteIds.length > N_NOTES;
  const conflictedNotes = toConflictedNotes(
    selectedConflictedIds, selectedConflictWiths, fpaths, contents
  );

  // List names should be retrieve from settings
  //   but also retrive from file paths in case the settings is gone.
  let listNames = [];
  listNames.push(...noteIds.map(id => id.listName));
  listNames.push(...conflictedIds.map(id => id.listName));
  listNames = [...new Set(listNames)];

  // If there is settings, fetch settings
  let settings;
  if (settingsFPath && doFetchSettings) {
    settings = JSON.parse(/** @type {string} */(await userSession.getFile(settingsFPath)));
  }

  return { notes, hasMore, conflictedNotes, listNames, settings };
};

const fetchMore = async (params) => {

  const { listName, ids, sortOn, doDescendingOrder } = params;

  const { noteFPaths } = await listFPaths();
  const { noteIds } = listNoteIds(noteFPaths);

  const namedNoteIds = noteIds.filter(id => id.listName === listName)
  let sortedNoteIds = namedNoteIds.sort((a, b) => a[sortOn] - b[sortOn]);
  if (doDescendingOrder) sortedNoteIds.reverse();

  const indexes = ids.map(id => sortedNoteIds.indexOf(id));
  const maxIndex = Math.max(...indexes);

  const filteredNoteIds = sortedNoteIds.slice(maxIndex + 1);
  const selectedNoteIds = filteredNoteIds.slice(0, N_NOTES);

  const fpaths = [];
  for (const id of selectedNoteIds) fpaths.push(...id.fpaths);

  const responses = await batchGetFileWithRetry(fpaths, 0);
  const contents = [];
  for (let i = 0; i < fpaths.length; i++) {
    let content = responses[i].content;
    if (fpaths[i].endsWith('index.json')) content = JSON.parse(content);
    contents.push(content);
  }

  const notes = toNotes(selectedNoteIds, fpaths, contents);
  const hasMore = namedNoteIds.length > N_NOTES;

  return { notes, hasMore };
};

const batchPutFileWithRetry = async (fpaths, contents, callCount) => {

  const responses = await Promise.all(
    fpaths.map((fpath, i) =>
      userSession.putFile(fpath, contents[i])
        .then(publicUrl => ({ publicUrl, fpath, success: true }))
        .catch(error => ({ error, fpath, content: contents[i], success: false }))
    )
  );

  const failedResponses = responses.filter(({ success }) => !success);
  const failedFPaths = failedResponses.map(({ fpath }) => fpath);
  const failedContents = failedResponses.map(({ content }) => content);

  if (failedResponses.length) {
    if (callCount + 1 >= MAX_TRY) throw failedResponses[0].error;

    return [
      ...responses.filter(({ success }) => success),
      ...(await batchPutFileWithRetry(failedFPaths, failedContents, callCount + 1))
    ];
  }

  return responses;
};

const putNotes = async (params) => {

  const { listName, notes } = params;

  const fpaths = [], contents = [];
  for (const note of notes) {
    const fname = createNoteFName(note.id, note.parentIds);
    fpaths.push(createNoteFPath(listName, fname, 'index.json'));
    contents.push(JSON.stringify({ title: note.title, body: note.body }));
    if (note.media) {
      for (const { name, content } of note.media) {
        fpaths.push(createNoteFPath(listName, fname, name));
        contents.push(content);
      }
    }
  }

  const responses = await batchPutFileWithRetry(fpaths, contents, 0);
  const publicUrls = responses.map(response => response.publicUrl);

  return { fpaths, publicUrls };
};

const fetchOldNotesInTrash = async () => {

  const { noteFPaths } = await listFPaths();
  const { noteIds } = listNoteIds(noteFPaths);

  const trashNoteIds = noteIds.filter(id => id.listName === TRASH);
  const oldNoteIds = trashNoteIds.filter(noteId => {
    const interval = Date.now() - noteId.updatedDT;
    const days = interval / 1000 / 60 / 60 / 24;

    return days > N_DAYS;
  });
  const selectedNoteIds = oldNoteIds.slice(N_NOTES);

  const fpaths = [];
  for (const id of selectedNoteIds) fpaths.push(...id.fpaths);

  // Dummy contents are enough and good for performance
  const contents = [];
  for (let i = 0; i < fpaths.length; i++) {
    if (fpaths[i].endsWith('index.json')) contents.push({ title: '', body: '' })
    else contents.push('');
  }

  const notes = toNotes(selectedNoteIds, fpaths, contents);
  return { notes };
};

const updateSettings = async (settings) => {

  const fPaths = [SETTINGS_FNAME];
  const contents = [JSON.stringify(settings)];

  const responses = await batchPutFileWithRetry(fPaths, contents, 0);
  const publicUrls = responses.map(response => response.publicUrl);

  return { publicUrls };
};

const canDeleteListNames = async (listNames) => {

  const { noteFPaths } = await listFPaths();

  let inUseListNames = noteFPaths.map(fpath => extractNoteFPath(fpath).listName);
  inUseListNames = [...new Set(inUseListNames)];

  const canDeletes = [];
  for (const listName of listNames) {
    canDeletes.push(!inUseListNames.includes(listName));
  }

  return canDeletes;
};

const data = {
  listFPaths, listNoteIds, batchGetFileWithRetry, toNotes,
  fetch, fetchMore, putNotes, fetchOldNotesInTrash, updateSettings, canDeleteListNames,
};

export default data;
