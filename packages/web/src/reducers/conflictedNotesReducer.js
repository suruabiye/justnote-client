import {
  FETCH_COMMIT, MERGE_NOTES, MERGE_NOTES_COMMIT, MERGE_NOTES_ROLLBACK,
  DELETE_ALL_DATA, RESET_STATE,
} from '../types/actionTypes';
import { ID, MERGING, DIED_MERGING } from '../types/const';
import { _ } from '../utils/obj';

const initialState = {};

const conflictedNotesReducer = (state = initialState, action) => {

  if (action.type === FETCH_COMMIT) {
    const { listName, conflictedNotes } = action.payload;

    // FETCH_COMMIT needs to add conflicted notes and remove not anymore conflicted notes
    const newState = {};
    if (Array.isArray(conflictedNotes) && conflictedNotes.length > 0) {
      newState[listName] = _.mapKeys(conflictedNotes, ID);
    }

    for (const k in state) {
      if (k === listName) continue;

      // In other list name,
      //   if it contains a conflicted note and it's not conflicted anymore,
      //   remove from this list name too.
      for (const id in state[k]) {
        if (
          state[k][id].listNames.includes(listName) &&
          !conflictedNotes.some(note => note.id === id)
        ) {
          // Not found, not conflicted anymore
          // Do nothing, as to remove from this list name as well
          continue;
        }

        if (!newState[k]) newState[k] = {};
        newState[k][id] = state[k][id];
      }
    }

    return newState;
  }

  if (action.type === MERGE_NOTES) {
    const { conflictedNote } = action.payload;

    const newState = {};
    for (const k in state) {
      for (const id in state[k]) {
        if (!newState[k]) newState[k] = {};
        if (id === conflictedNote.id) {
          newState[k][id] = { ...state[k][id], status: MERGING };
        } else {
          newState[k][id] = state[k][id];
        }
      }
    }

    return newState;
  }

  if (action.type === MERGE_NOTES_COMMIT) {
    const { conflictedNote } = action.payload;

    const newState = {};
    for (const k in state) {
      for (const id in state[k]) {
        if (id === conflictedNote.id) continue;

        if (!newState[k]) newState[k] = {};
        newState[k][id] = state[k][id];
      }
    }

    return newState;
  }

  if (action.type === MERGE_NOTES_ROLLBACK) {
    const { conflictedNote } = action.payload;

    const newState = {};
    for (const k in state) {
      for (const id in state[k]) {
        if (!newState[k]) newState[k] = {};
        if (id === conflictedNote.id) {
          newState[k][id] = { ...state[k][id], status: DIED_MERGING };
        } else {
          newState[k][id] = state[k][id];
        }
      }
    }

    return newState;
  }

  if (action.type === DELETE_ALL_DATA || action.type === RESET_STATE) {
    return { ...initialState };
  }

  return state;
};

export default conflictedNotesReducer;
