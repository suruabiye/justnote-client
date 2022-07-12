import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ckeditor from '@ckeditor/ckeditor5-build-decoupled-document';

import fileApi from '../apis/file';
import {
  updateEditorFocused, updateEditorBusy, saveNote, discardNote, onUpdateNoteIdUrlHash,
  onUpdateNoteId, onChangeListName, onUpdateBulkEditUrlHash, addSavingFPaths,
  updateEditorIsUploading, updateEditingNote, updateEditorUnmount,
} from '../actions';
import { NEW_NOTE, ADDED, IMAGES, CD_ROOT } from '../types/const';
import {
  isString, isNoteBodyEqual, isMobile as _isMobile, replaceObjectUrls, getFileExt,
  debounce,
} from '../utils';
import { isUint8Array, isBlob } from '../utils/index-web';

import '../stylesheets/ckeditor.css';

import { useSafeAreaFrame } from '.';

const GET_DATA_SAVE_NOTE = 'GET_DATA_SAVE_NOTE';
const GET_DATA_DISCARD_NOTE = 'GET_DATA_DISCARD_NOTE';
const GET_DATA_UPDATE_NOTE_ID_URL_HASH = 'GET_DATA_UPDATE_NOTE_ID_URL_HASH';
const GET_DATA_UPDATE_NOTE_ID = 'GET_DATA_UPDATE_NOTE_ID';
const GET_DATA_CHANGE_LIST_NAME = 'GET_DATA_CHANGE_LIST_NAME';
const GET_DATA_UPDATE_BULK_EDIT_URL_HASH = 'GET_DATA_UPDATE_BULK_EDIT_URL_HASH';

const dataUrlToBlob = async (content) => {
  const res = await fetch(content);
  const blob = await res.blob();
  return blob;
};

const NoteEditorEditor = (props) => {

  const { note } = props;
  const { width: safeAreaWidth } = useSafeAreaFrame();
  const isFocused = useSelector(state => state.display.isEditorFocused);
  const isEditorBusy = useSelector(state => state.display.isEditorBusy);
  const saveNoteCount = useSelector(state => state.editor.saveNoteCount);
  const discardNoteCount = useSelector(state => state.editor.discardNoteCount);
  const updateNoteIdUrlHashCount = useSelector(
    state => state.editor.updateNoteIdUrlHashCount
  );
  const updateNoteIdCount = useSelector(state => state.editor.updateNoteIdCount);
  const changeListNameCount = useSelector(state => state.editor.changeListNameCount);
  const focusTitleCount = useSelector(state => state.editor.focusTitleCount);
  const setInitDataCount = useSelector(state => state.editor.setInitDataCount);
  const updateEditorWidthCount = useSelector(
    state => state.editor.updateEditorWidthCount
  );
  const updateBulkEditUrlHashCount = useSelector(
    state => state.editor.updateBulkEditUrlHashCount
  );
  const [isEditorReady, setEditorReady] = useState(false);
  const scrollView = useRef(null);
  const titleInput = useRef(null);
  const bodyEditor = useRef(null);
  const bodyTopToolbar = useRef(null);
  const bodyBottomToolbar = useRef(null);
  const prevSaveNoteCount = useRef(saveNoteCount);
  const prevDiscardNoteCount = useRef(discardNoteCount);
  const prevUpdateNoteIdUrlHashCount = useRef(updateNoteIdUrlHashCount);
  const prevUpdateNoteIdCount = useRef(updateNoteIdCount);
  const prevChangeListNameCount = useRef(changeListNameCount);
  const prevFocusTitleCount = useRef(focusTitleCount);
  const prevSetInitDataCount = useRef(setInitDataCount);
  const prevUpdateEditorWidthCount = useRef(updateEditorWidthCount);
  const prevUpdateBulkEditUrlHashCount = useRef(updateBulkEditUrlHashCount);
  const objectUrlContents = useRef({});
  const objectUrlFiles = useRef({});
  const objectUrlNames = useRef({});
  const imagesDir = useRef(IMAGES);
  const getDataAction = useRef(null);
  const dispatch = useDispatch();

  const editingNoteId = useSelector(state => state.editor.editingNoteId);
  const editingNoteTitle = useSelector(state => state.editor.editingNoteTitle);
  const editingNoteBody = useSelector(state => state.editor.editingNoteBody);
  const editingNoteMedia = useSelector(state => state.editor.editingNoteMedia);
  const didEditorUnmount = useSelector(state => state.editor.didEditorUnmount);
  const didDiscardEditing = useSelector(state => state.editor.didDiscardEditing);
  const refToIsFocused = useRef(isFocused);
  const refToIsEditorBusy = useRef(isEditorBusy);
  const refToIsEditorReady = useRef(isEditorReady);
  const didUpdateEditingNote = useRef(false);

  const isMobile = useMemo(() => _isMobile(), []);

  const focusTitleInput = () => {
    if (titleInput.current) titleInput.current.blur();
    setTimeout(() => {
      if (titleInput.current) titleInput.current.focus();
    }, 1);
  };

  const clearNoteMedia = () => {
    for (const objectUrl in objectUrlContents.current) {
      URL.revokeObjectURL(objectUrl);
    }
    objectUrlContents.current = {};

    for (const objectUrl in objectUrlFiles.current) {
      URL.revokeObjectURL(objectUrl);
    }
    objectUrlFiles.current = {};

    objectUrlNames.current = {};
  };

  const replaceWithContents = useCallback(async (body, media) => {
    media = media.filter(({ content }) => {
      return isString(content) && content.startsWith('data:');
    });
    media = await Promise.all(media.map(async ({ name, content }) => {
      const blob = await dataUrlToBlob(content);
      return { name, content, blob };
    }));

    for (const { name, content, blob } of media) {
      const objectUrl = URL.createObjectURL(blob);

      objectUrlContents.current[objectUrl] = { fname: name, content };
      objectUrlNames.current[objectUrl] = name;

      body = body.replaceAll(name, objectUrl);
    }

    return body;
  }, []);

  const replaceWithFiles = useCallback(async (body, media) => {
    media = media.filter(({ name }) => {
      return isString(name) && name.startsWith(CD_ROOT + '/');
    });

    for (const { name, content } of media) {
      let file = await fileApi.getFile(name);
      if (isUint8Array(file)) file = new Blob([file]);
      if (!isBlob(file)) continue;

      const objectUrl = URL.createObjectURL(file);

      objectUrlFiles.current[objectUrl] = { fname: name, content };
      objectUrlNames.current[objectUrl] = name;

      body = body.replaceAll(name, objectUrl);
    }

    return body;
  }, []);

  const _setInitData = useCallback(async (id, title, body, media) => {
    scrollView.current.scrollTo(0, 0);
    titleInput.current.value = title;

    clearNoteMedia();

    body = await replaceWithContents(body, media);
    body = await replaceWithFiles(body, media);
    try {
      bodyEditor.current.setData(body);
    } catch (e) {
      // Got Uncaught TypeError: Cannot read properties of null (reading 'model')
      //   after dispatching UPDATE_NOTE_ROLLBACK
      //   guess because CKEditor.setData still working on updated version
      //   then suddenly got upmounted.
      // Also, in handleScreenRotation, calling updateNoteIdUrlHash(null)
      //   guess it's the same reason.
      console.log('NoteEditorEditor.setInitData: ckeditor.setData error ', e);
    }

    if (id === NEW_NOTE) focusTitleInput();
  }, [replaceWithContents, replaceWithFiles]);

  const setInitData = useCallback(async () => {
    await _setInitData(note.id, note.title, note.body, note.media)
  }, [note.id, note.title, note.body, note.media, _setInitData]);

  const onFocus = useCallback(() => {
    dispatch(updateEditorFocused(true));
  }, [dispatch]);

  const onUpdateIsUploading = useCallback((isUploading) => {
    dispatch(updateEditorIsUploading(isUploading));
  }, [dispatch]);

  const onAddObjectUrlFiles = useCallback(async (objectUrl, fname, content) => {
    if (imagesDir.current) {
      let fpart = imagesDir.current + '/' + objectUrl.split('/').pop();
      const ext = getFileExt(fname);
      if (ext) fpart += `.${ext}`;

      try {
        await fileApi.putFile(fpart, content);

        const cfpart = CD_ROOT + '/' + fpart;
        dispatch(addSavingFPaths([cfpart]));
        objectUrlFiles.current[objectUrl] = { fname: cfpart, content: '' };
      } catch (e) {
        console.log(`NoteEditorEditor: onAddObjectUrlFiles with fpart: ${fpart} error: `, e);
        objectUrlFiles.current[objectUrl] = { fname, content };
      }
    } else {
      objectUrlFiles.current[objectUrl] = { fname, content };
    }
    onUpdateIsUploading(false);
  }, [onUpdateIsUploading, dispatch]);

  const onGetData = useCallback(() => {

    const title = titleInput.current.value;
    const { body, media } = replaceObjectUrls(
      bodyEditor.current.getData(),
      objectUrlContents.current,
      objectUrlFiles.current,
      objectUrlNames.current
    );

    const action = getDataAction.current;
    if (action === GET_DATA_SAVE_NOTE) {
      dispatch(saveNote(title, body, media));
    } else if (action === GET_DATA_DISCARD_NOTE) {
      dispatch(discardNote(true, title, body));
    } else if (action === GET_DATA_UPDATE_NOTE_ID_URL_HASH) {
      dispatch(onUpdateNoteIdUrlHash(title, body));
    } else if (action === GET_DATA_UPDATE_NOTE_ID) {
      dispatch(onUpdateNoteId(title, body));
    } else if (action === GET_DATA_CHANGE_LIST_NAME) {
      dispatch(onChangeListName(title, body));
    } else if (action === GET_DATA_UPDATE_BULK_EDIT_URL_HASH) {
      dispatch(onUpdateBulkEditUrlHash(title, body));
    } else throw new Error(`Invalid getDataAction: ${getDataAction.current}`);
  }, [dispatch]);

  const onReady = useCallback((editor) => {
    if (isMobile) {
      bodyBottomToolbar.current.appendChild(editor.ui.view.toolbar.element);
    } else {
      bodyTopToolbar.current.appendChild(editor.ui.view.toolbar.element);
    }

    const groupedItemsDropdown = editor.ui.view.toolbar._behavior.groupedItemsDropdown;
    const toolbarItems = editor.ui.view.toolbar.items;

    if (isMobile) {
      if (groupedItemsDropdown) groupedItemsDropdown.panelPosition = 'nw';

      toolbarItems.get(2).panelPosition = 'nme';
      toolbarItems.get(3).panelPosition = 'nme';
      toolbarItems.get(4).panelPosition = 'nmw';
      toolbarItems.get(5).panelPosition = 'nmw';
    } else {
      document.documentElement.style.setProperty('--ck-font-size-base', '13px');
    }

    toolbarItems.get(10).on('done', () => {
      if (groupedItemsDropdown) groupedItemsDropdown.set('isOpen', false);
      onFocus();
    });

    window.JustnoteReactWebApp = {
      updateIsUploading: onUpdateIsUploading, addObjectUrlFiles: onAddObjectUrlFiles,
    };

    bodyEditor.current = editor;
    setEditorReady(true);
  }, [isMobile, onUpdateIsUploading, onAddObjectUrlFiles, setEditorReady, onFocus]);

  const onDataChange = useMemo(() => debounce(() => {
    // At the time, might already unmounted
    if (!titleInput.current || !bodyEditor.current) return;

    const title = titleInput.current.value;
    const { body, media } = replaceObjectUrls(
      bodyEditor.current.getData(),
      objectUrlContents.current,
      objectUrlFiles.current,
      objectUrlNames.current
    );

    dispatch(updateEditingNote(title, body, media));
    didUpdateEditingNote.current = true;
  }, 1000), [dispatch]);

  useEffect(() => {
    if (!isEditorReady) return;
    setInitData();
  }, [isEditorReady, setInitData]);

  useEffect(() => {
    if (!isEditorReady) return;
    if (saveNoteCount !== prevSaveNoteCount.current) {
      getDataAction.current = GET_DATA_SAVE_NOTE;
      onGetData();
      prevSaveNoteCount.current = saveNoteCount;
    }
  }, [isEditorReady, saveNoteCount, onGetData]);

  useEffect(() => {
    if (!isEditorReady) return;
    if (discardNoteCount !== prevDiscardNoteCount.current) {
      getDataAction.current = GET_DATA_DISCARD_NOTE;
      onGetData();
      prevDiscardNoteCount.current = discardNoteCount;
    }
  }, [isEditorReady, discardNoteCount, onGetData]);

  useEffect(() => {
    if (!isEditorReady) return;
    if (updateNoteIdUrlHashCount !== prevUpdateNoteIdUrlHashCount.current) {
      getDataAction.current = GET_DATA_UPDATE_NOTE_ID_URL_HASH;
      onGetData();
      prevUpdateNoteIdUrlHashCount.current = updateNoteIdUrlHashCount;
    }
  }, [isEditorReady, updateNoteIdUrlHashCount, onGetData]);

  useEffect(() => {
    if (!isEditorReady) return;
    if (updateNoteIdCount !== prevUpdateNoteIdCount.current) {
      getDataAction.current = GET_DATA_UPDATE_NOTE_ID;
      onGetData();
      prevUpdateNoteIdCount.current = updateNoteIdCount;
    }
  }, [isEditorReady, updateNoteIdCount, onGetData]);

  useEffect(() => {
    if (!isEditorReady) return;
    if (changeListNameCount !== prevChangeListNameCount.current) {
      getDataAction.current = GET_DATA_CHANGE_LIST_NAME;
      onGetData();
      prevChangeListNameCount.current = changeListNameCount;
    }
  }, [isEditorReady, changeListNameCount, onGetData]);

  useEffect(() => {
    /*
      Why needs focusTitleCount and just can't use isFocused!

      Focus flow:
        1.1 User clicks on titleInput or bodyEditor
        1.2 Or programatically call focusTitleInput
        2. When titleInput or bodyEditor get focused, event listener onFocus is called
        3. onFocus dispatches updateEditorFocused(true)
      Blur flow:
        1.1 User clicks save, cancel, or back buttons
        1.2 An action dispatches updateEditorFocused(false)
        1.3 Blur is called automatically when the element loses its focus
     */
    if (!isEditorReady) return;
    if (focusTitleCount !== prevFocusTitleCount.current) {
      // Different from mobile: need to not disabled titleInput first before focus.
      dispatch(updateEditorBusy(false));
      focusTitleInput();
      prevFocusTitleCount.current = focusTitleCount;
    }
  }, [isEditorReady, focusTitleCount, dispatch]);

  useEffect(() => {
    if (!isEditorReady) return;
    if (setInitDataCount !== prevSetInitDataCount.current) {
      setInitData();
      prevSetInitDataCount.current = setInitDataCount;
    }
  }, [isEditorReady, setInitDataCount, setInitData]);

  useEffect(() => {
    if (!isEditorReady) return;
    if (updateEditorWidthCount !== prevUpdateEditorWidthCount.current) {
      bodyEditor.current.ui.view.toolbar.maxWidth = '9999px';
      bodyEditor.current.ui.view.toolbar.maxWidth = 'auto';
      prevUpdateEditorWidthCount.current = updateEditorWidthCount;
    }
  }, [isEditorReady, updateEditorWidthCount]);

  useEffect(() => {
    if (!isEditorReady) return;
    if (updateBulkEditUrlHashCount !== prevUpdateBulkEditUrlHashCount.current) {
      getDataAction.current = GET_DATA_UPDATE_BULK_EDIT_URL_HASH;
      onGetData();
      prevUpdateBulkEditUrlHashCount.current = updateBulkEditUrlHashCount;
    }
  }, [isEditorReady, updateBulkEditUrlHashCount, onGetData]);

  useEffect(() => {
    onUpdateIsUploading(false);
  }, [note.id, onUpdateIsUploading]);

  useEffect(() => {
    if (!isEditorReady) return;

    const editor = bodyEditor.current;
    const groupedItemsDropdown = editor.ui.view.toolbar._behavior.groupedItemsDropdown;
    if (!groupedItemsDropdown) return;

    if (isMobile) {
      if (safeAreaWidth < 389) {
        groupedItemsDropdown.toolbarView.maxWidth = '256px';
      } else if (safeAreaWidth < 428) {
        groupedItemsDropdown.toolbarView.maxWidth = '218px';
      } else {
        groupedItemsDropdown.toolbarView.maxWidth = '';
      }
    } else {
      if (safeAreaWidth < 372) {
        groupedItemsDropdown.toolbarView.maxWidth = '188px';
      } else {
        groupedItemsDropdown.toolbarView.maxWidth = '';
      }
    }
  }, [isEditorReady, isMobile, safeAreaWidth]);

  useEffect(() => {
    const beforeUnloadListener = (e) => {
      if (!isEditorReady) return;

      const title = titleInput.current.value;
      const { body } = replaceObjectUrls(
        bodyEditor.current.getData(),
        objectUrlContents.current,
        objectUrlFiles.current,
        objectUrlNames.current
      );
      if (note.title !== title || !isNoteBodyEqual(note.body, body)) {
        e.preventDefault();
        return e.returnValue = 'It looks like your note hasn\'t been saved. Do you want to leave this site and discard your changes?';
      }
    };

    window.addEventListener('beforeunload', beforeUnloadListener, { capture: true });
    return () => {
      window.removeEventListener('beforeunload', beforeUnloadListener, { capture: true });
    };
  }, [isEditorReady, note.title, note.body]);

  useEffect(() => {
    // Need to place <link> of tailwind.css + ckeditor.css below <style> of CKEditor
    //   so that custom styles override default styles.
    const head = document.head || document.getElementsByTagName('head')[0];
    const last = head.lastElementChild;
    if (
      last.tagName.toLowerCase() === 'link' &&
      /* @ts-ignore */
      last.href && last.href.includes('/static/css/') && last.href.endsWith('.css')
    ) {
      return;
    }

    const hrefs = [];
    for (const link of head.getElementsByTagName('link')) {
      if (
        link.href && link.href.includes('/static/css/') && link.href.endsWith('.css')
      ) {
        hrefs.push(link.href);
      }
    }

    for (const href of hrefs) {
      const link = document.createElement('link');
      link.href = href;
      link.rel = 'stylesheet';
      head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    refToIsFocused.current = isFocused;
    refToIsEditorBusy.current = isEditorBusy;
    refToIsEditorReady.current = isEditorReady;
  }, [isFocused, isEditorBusy, isEditorReady]);

  useEffect(() => {
    didUpdateEditingNote.current = false;
  }, [note.id]);

  useEffect(() => {
    return () => {
      if (
        refToIsEditorReady.current && !refToIsEditorBusy.current &&
        refToIsFocused.current && didUpdateEditingNote.current
      ) dispatch(updateEditorUnmount(true));
    };
  }, [dispatch]);

  useEffect(() => {
    if (!isEditorReady) return;

    if (didEditorUnmount) {
      if (
        isFocused && !isEditorBusy && !didDiscardEditing && note.id === editingNoteId
      ) {
        _setInitData(
          editingNoteId, editingNoteTitle, editingNoteBody, editingNoteMedia
        );
      }
      dispatch(updateEditorUnmount(false));
    }
  }, [
    isFocused, isEditorBusy, isEditorReady, didDiscardEditing, didEditorUnmount,
    note.id, editingNoteId, editingNoteTitle, editingNoteBody, editingNoteMedia,
    _setInitData, dispatch,
  ]);

  const editorConfig = useMemo(() => {
    return {
      placeholder: 'Start writing...',
      removePlugins: ['Autoformat'],
      fontColor: {
        colors: [
          { color: 'rgb(31, 41, 55)', label: 'Black' },
          { color: 'rgb(107, 114, 128)', label: 'Gray' },
          { color: 'rgb(185, 28, 28)', label: 'Red' },
          { color: 'rgb(252, 211, 77)', label: 'Yellow' },
          { color: 'rgb(217, 119, 6)', label: 'Orange' },
          { color: 'rgb(120, 53, 15)', label: 'Brown' },
          { color: 'rgb(21, 128, 61)', label: 'Green' },
          { color: 'rgb(29, 78, 216)', label: 'Blue' },
          { color: 'rgb(91, 33, 182)', label: 'Purple' },
          { color: 'rgb(219, 39, 119)', label: 'Pink' },
          { color: 'rgb(229, 231, 235)', label: 'Light gray' },
          { color: 'rgb(255, 255, 255)', label: 'White', hasBorder: true },
        ],
        columns: 6,
        documentColors: 0,
      },
      fontBackgroundColor: {
        colors: [
          { color: 'rgb(31, 41, 55)', label: 'Black' },
          { color: 'rgb(107, 114, 128)', label: 'Gray' },
          { color: 'rgb(239, 68, 68)', label: 'Red' },
          { color: 'rgb(252, 211, 77)', label: 'Yellow' },
          { color: 'rgb(245, 158, 11)', label: 'Orange' },
          { color: 'rgb(180, 83, 9)', label: 'Brown' },
          { color: 'rgb(74, 222, 128)', label: 'Green' },
          { color: 'rgb(147, 197, 253)', label: 'Blue' },
          { color: 'rgb(196, 181, 253)', label: 'Purple' },
          { color: 'rgb(251, 207, 232)', label: 'Pink' },
          { color: 'rgb(229, 231, 235)', label: 'Light gray' },
          { color: 'rgb(255, 255, 255)', label: 'White', hasBorder: true },
        ],
        columns: 6,
        documentColors: 0,
      },
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div ref={scrollView} className="flex-grow flex-shrink overflow-x-hidden overflow-y-auto z-0">
        <div className={`px-1.5 py-1.5 ${isMobile ? 'border-b border-gray-200' : ''}`}>
          <input ref={titleInput} onFocus={onFocus} onChange={onDataChange} type="text" name="titleInput" id="titleInput" className="block w-full text-xl font-normal text-gray-800 px-1.5 py-1.5 placeholder-gray-500 border-0 focus:outline-none focus:ring-0 lg:text-lg" placeholder="Note Title" disabled={(note.id !== NEW_NOTE && note.status !== ADDED) || isEditorBusy} />
        </div>
        <div ref={bodyTopToolbar} className="sticky -top-px z-10"></div>
        <CKEditor editor={ckeditor} config={editorConfig} disabled={(note.id !== NEW_NOTE && note.status !== ADDED) || isEditorBusy} onReady={onReady} onFocus={onFocus} onChange={onDataChange} />
        <div className="h-28"></div>
      </div>
      <div ref={bodyBottomToolbar} className="flex-grow-0 flex-shrink-0"></div>
    </div>
  );
};

export default React.memo(NoteEditorEditor);
