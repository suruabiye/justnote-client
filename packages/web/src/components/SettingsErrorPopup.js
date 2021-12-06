import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { retryDiedSettings, cancelDiedSettings } from '../actions';
import { DIED_UPDATING } from '../types/const';

const SettingsErrorPopup = () => {

  const settingsStatus = useSelector(state => state.display.settingsStatus);
  const dispatch = useDispatch();

  const onRetryBtnClick = () => {
    dispatch(retryDiedSettings());
  };

  const onCancelBtnClick = () => {
    dispatch(cancelDiedSettings());
  };

  if (settingsStatus !== DIED_UPDATING) return null;

  return (
    <div className="fixed top-14 inset-x-0 flex justify-center items-start md:top-0">
      <div className="m-4 p-4 bg-red-50 rounded-md shadow-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3 lg:mt-0.5">
            <h3 className="text-base text-red-800 font-medium text-left lg:text-sm">Updating Settings Error!</h3>
            <p className="mt-2.5 text-sm text-red-700">Please wait a moment and try again. <br className="hidden sm:inline" />If the problem persists, please <a className="underline rounded hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-700" href="/support">contact us
              <svg className="mb-2 inline-block w-4" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5H13.5858L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L15 6.41421V9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9V4C17 3.44772 16.5523 3 16 3H11Z" />
                <path d="M5 5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V15H5V7H8C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H5Z" />
              </svg></a>.
            </p>
            <div className="mt-4">
              <div className="-mx-2 -my-1.5 flex">
                <button onClick={onRetryBtnClick} className="bg-red-50 text-sm font-medium text-red-800 px-2 py-1.5 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-100 transition ease-in-out duration-150">Retry</button>
                <button onClick={onCancelBtnClick} className="ml-3 bg-red-50 text-sm font-medium text-red-800 px-2 py-1.5 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-100 transition ease-in-out duration-150">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SettingsErrorPopup);
