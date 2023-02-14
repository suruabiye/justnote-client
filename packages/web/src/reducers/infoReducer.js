import { loop, Cmd } from 'redux-loop';

import { tryUpdateInfo } from '../actions';
import {
  INIT, FETCH_COMMIT, UPDATE_INFO_COMMIT, UPDATE_INFO_ROLLBACK, REQUEST_PURCHASE_COMMIT,
  RESTORE_PURCHASES_COMMIT, REFRESH_PURCHASES_COMMIT, DELETE_ALL_DATA, RESET_STATE,
} from '../types/actionTypes';
import { VALID } from '../types/const';
import { deriveInfoState } from '../utils';
import { initialInfoState as initialState } from '../types/initialStates';
import { didChange } from '../vars';

const infoReducer = (state = initialState, action) => {

  if (action.type === INIT) {
    const { localSettings } = action.payload;
    return {
      ...state,
      purchases: localSettings.purchases,
    };
  }

  if (action.type === FETCH_COMMIT) {
    const { doFetchStgsAndInfo, info } = action.payload;
    if (!doFetchStgsAndInfo) return state;

    const newState = deriveInfoState(info, initialState);
    if (didChange.purchases) {
      // It can happen that FETCH_COMMIT is after just purchased
      //  and not close the settings popup yet
      //  i.e. 1. just open the app and go to purchase
      //       2. back to foreground and fetch again
      //  and replace the newly purchase with old value in settings from server.
      newState.purchases = state.purchases;
      newState.checkPurchasesDT = state.checkPurchasesDT;
    }
    return newState;
  }

  if (action.type === UPDATE_INFO_COMMIT) {
    didChange.purchases = false;
    return state;
  }

  if (action.type === UPDATE_INFO_ROLLBACK) {
    // No CANCEL_DIED_INFO. Just leave the content as is. Can do another time.
    didChange.purchases = false;
    return state;
  }

  if (action.type === REQUEST_PURCHASE_COMMIT) {
    const { status, purchase } = action.payload;
    if (status !== VALID || !purchase) return state;

    const newState = { ...state, checkPurchasesDT: Date.now() };

    if (Array.isArray(newState.purchases)) {
      newState.purchases = [...newState.purchases, { ...purchase }];
    } else newState.purchases = [{ ...purchase }];

    didChange.purchases = true;

    return loop(
      newState, Cmd.run(tryUpdateInfo(), { args: [Cmd.dispatch, Cmd.getState] })
    );
  }

  if (
    action.type === RESTORE_PURCHASES_COMMIT ||
    action.type === REFRESH_PURCHASES_COMMIT
  ) {
    // It can happen that checkPurchases is after just purchased
    //  and replace old purchases with the current newly one.
    if (didChange.purchases) return state;

    const { status, purchases } = action.payload;
    if (status !== VALID || !purchases) return state;

    const newState = { ...state, checkPurchasesDT: Date.now() };

    if (purchases.length === 0) newState.purchases = null;
    else newState.purchases = purchases.map(p => ({ ...p }));

    return loop(
      newState, Cmd.run(tryUpdateInfo(), { args: [Cmd.dispatch, Cmd.getState] })
    );
  }

  if (action.type === DELETE_ALL_DATA || action.type === RESET_STATE) {
    didChange.purchases = false;
    return { ...initialState };
  }

  return state;
};

export default infoReducer;
