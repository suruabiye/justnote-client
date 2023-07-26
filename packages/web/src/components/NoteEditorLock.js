import React, { useEffect, useRef } from 'react';

import { updateNoteIdUrlHash } from '../actions';
import { LG_WIDTH, LOCKED } from '../types/const';

import { useSafeAreaFrame, useTailwind } from '.';

const NoteEditorLock = (props) => {

  const { note, lockNoteStatus, lockListStatus } = props;
  const { width: safeAreaWidth } = useSafeAreaFrame();
  const didClick = useRef(false);
  const tailwind = useTailwind();

  const onRightPanelCloseBtnClick = () => {
    if (didClick.current) return;
    updateNoteIdUrlHash(null);
    didClick.current = true;
  };

  useEffect(() => {
    didClick.current = false;
  }, [note, lockNoteStatus, lockListStatus]);

  let title, body, bottomText;
  if (safeAreaWidth < LG_WIDTH) {
    if (lockListStatus === LOCKED) {
      title = 'This list is locked';
      body = 'Please press back and unlock the list first.';
    } else if (lockNoteStatus === LOCKED) {
      title = 'This note is locked';
      body = 'Please press back and unlock the note first.';
    }
  } else {
    if (lockListStatus === LOCKED) {
      bottomText = 'Click the "Unlock" button to view notes in this list';
    } else if (lockNoteStatus === LOCKED) {
      bottomText = 'Select this note in the note list to unlock';
    }
  }

  return (
    <div className={tailwind('relative h-full w-full bg-white blk:bg-gray-900')}>
      <div className={tailwind('relative px-4 pb-4 sm:px-6 sm:pb-6 lg:hidden')}>
        <div className={tailwind('h-16 w-full')} />
        <h3 className={tailwind('pt-5 text-lg font-medium text-gray-800 blk:text-gray-200')}>{title}</h3>
        <p className={tailwind('pt-2.5 text-sm font-normal text-gray-500 blk:text-gray-400')}>{body}</p>
        <div className={tailwind('absolute top-0 left-0')}>
          <button onClick={onRightPanelCloseBtnClick} type="button" className={tailwind('rounded-md bg-white px-4 py-4 text-sm text-gray-500 hover:text-gray-700 focus:bg-gray-200 focus:text-gray-700 focus:outline-none blk:bg-gray-900 blk:text-gray-400 blk:hover:text-gray-200 blk:focus:bg-gray-700 blk:focus:text-gray-200')}>
            <svg className={tailwind('h-5 w-5')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.70703 14.707C7.5195 14.8945 7.26519 14.9998 7.00003 14.9998C6.73487 14.9998 6.48056 14.8945 6.29303 14.707L2.29303 10.707C2.10556 10.5195 2.00024 10.2652 2.00024 10C2.00024 9.73488 2.10556 9.48057 2.29303 9.29304L6.29303 5.29304C6.48163 5.11088 6.73423 5.01009 6.99643 5.01237C7.25863 5.01465 7.50944 5.11981 7.69485 5.30522C7.88026 5.49063 7.98543 5.74144 7.9877 6.00364C7.98998 6.26584 7.88919 6.51844 7.70703 6.70704L5.41403 9.00004H17C17.2652 9.00004 17.5196 9.1054 17.7071 9.29293C17.8947 9.48047 18 9.73482 18 10C18 10.2653 17.8947 10.5196 17.7071 10.7071C17.5196 10.8947 17.2652 11 17 11H5.41403L7.70703 13.293C7.8945 13.4806 7.99982 13.7349 7.99982 14C7.99982 14.2652 7.8945 14.5195 7.70703 14.707Z" />
            </svg>
          </button>
        </div>
      </div>
      <div style={{ top: '172px' }} className={tailwind('absolute inset-x-0 hidden lg:block')}>
        <div className={tailwind('mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 blk:bg-gray-700')}>
          <svg className={tailwind('h-16 w-16 text-gray-500 blk:text-gray-400')} viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.758 10.758C41.3115 10.1849 41.9736 9.72784 42.7056 9.41339C43.4376 9.09894 44.2249 8.93342 45.0216 8.9265C45.8183 8.91957 46.6083 9.07138 47.3457 9.37307C48.0831 9.67475 48.753 10.1203 49.3164 10.6836C49.8797 11.247 50.3252 11.9169 50.6269 12.6543C50.9286 13.3917 51.0804 14.1817 51.0735 14.9784C51.0666 15.7751 50.9011 16.5624 50.5866 17.2944C50.2722 18.0265 49.8151 18.6885 49.242 19.242L46.863 21.621L38.379 13.137L40.758 10.758V10.758ZM34.137 17.379L9 42.516V51H17.484L42.624 25.863L34.134 17.379H34.137Z" />
          </svg>
        </div>
      </div>
      <div className={tailwind('absolute inset-x-0 bottom-8 hidden lg:block')}>
        <p className={tailwind('text-center text-sm text-gray-500 blk:text-gray-400')}>{bottomText}</p>
      </div>
    </div>
  );
};

export default React.memo(NoteEditorLock);
