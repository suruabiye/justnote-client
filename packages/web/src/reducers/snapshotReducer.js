import {
  INIT, FETCH_COMMIT, UPDATE_SETTINGS_COMMIT, MERGE_SETTINGS_COMMIT, UPDATE_INFO_COMMIT,
  DELETE_ALL_DATA, RESET_STATE,
} from '../types/actionTypes';
import { deriveSettingsState, deriveInfoState } from '../utils';
import { initialSettingsState, initialInfoState } from '../types/initialStates';

const initialState = {
  settings: { ...initialSettingsState },
  info: { ...initialInfoState },
};

const snapshotReducer = (state = initialState, action) => {

  if (action.type === INIT) {
    const { localSettings } = action.payload;

    const newState = { ...state };
    newState.settings = {
      ...newState.settings,
      themeMode: localSettings.defaultThemeMode,
      themeCustomOptions: localSettings.defaultThemeCustomOptions,
    };
    newState.info = {
      ...newState.info,
      purchases: localSettings.purchases,
    };

    return newState;
  }

  if (action.type === FETCH_COMMIT) {
    const { listNames, doFetchStgsAndInfo, settings, info } = action.payload;
    if (!doFetchStgsAndInfo) return state;

    const derivedSettings = deriveSettingsState(
      listNames, settings, initialSettingsState
    );
    const derivedInfo = deriveInfoState(info, initialInfoState);
    const newState = {
      ...state, settings: { ...derivedSettings }, info: { ...derivedInfo },
    };

    return newState;
  }

  if (action.type === UPDATE_SETTINGS_COMMIT || action.type === MERGE_SETTINGS_COMMIT) {
    return { ...state, settings: { ...action.payload.settings } };
  }

  if (action.type === UPDATE_INFO_COMMIT) {
    return { ...state, info: { ...action.payload.info } };
  }

  if (action.type === DELETE_ALL_DATA || action.type === RESET_STATE) {
    return { ...initialState };
  }

  return state;
};

export default snapshotReducer;
