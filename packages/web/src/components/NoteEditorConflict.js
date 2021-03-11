import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import { mergeNotes } from '../actions';
import { MERGING, DIED_MERGING, LG_WIDTH } from '../types/const';
import { getFormattedDT } from '../utils';
import { slideYFMV, popupFMV } from '../types/animConfigs';

import { useSafeAreaFrame } from '.';

const NoteEditorConflict = () => {

  const { width: safeAreaWidth } = useSafeAreaFrame();
  const listName = useSelector(state => state.display.listName);
  const conflictedNote = useSelector(state => state.conflictedNotes[listName][state.display.noteId]);

  const renderLoading = () => {
    if (!(conflictedNote.status && conflictedNote.status === MERGING)) return null;

    return (
      <React.Fragment>
        <div className="absolute inset-0 bg-white opacity-25"></div>
        <div style={{ top: '33.3333%' }} className="absolute left-1/2 flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2">
          <div className="ball-clip-rotate">
            <div></div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderMergeError = () => {
    if (!(conflictedNote.status && conflictedNote.status === DIED_MERGING)) return (
      <AnimatePresence key="AP_NEC_mergeError"></AnimatePresence>
    );

    return (
      <AnimatePresence key="AP_NEC_mergeError">
        <motion.div className="absolute top-0 inset-x-0 flex justify-center items-start" variants={popupFMV} initial="hidden" animate="visible" exit="hidden">
          <div className="m-4 p-4 bg-red-50 rounded-md ">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm text-red-800 font-medium text-left">Oops..., something went wrong!</h3>
                <p className="mt-2.5 text-sm text-red-700">
                  Please wait a moment and try again.<br />If the problem persists, please&nbsp;
                  <a className="underline hover:text-gray-900 focus:outline-none focus:shadow-outline" href="/#support">
                    contact us
                    <svg className="mb-2 inline-block w-4" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5H13.5858L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L15 6.41421V9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9V4C17 3.44772 16.5523 3 16 3H11Z" />
                      <path d="M5 5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V15H5V7H8C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H5Z" />
                    </svg>
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  const style = safeAreaWidth < LG_WIDTH ? {} : { minWidth: 442 };

  return (
    <div className="relative w-full h-full bg-white overflow-auto">
      <div style={style} className="px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="w-full h-16"></div>
        <h3 className="pt-5 text-gray-800 text-lg font-medium">{conflictedNote.notes.length} Versions found</h3>
        <p className="text-gray-500 text-sm font-normal">Please choose the correct version of this note.</p>
        <AnimateSharedLayout>
          {conflictedNote.notes.map((note, i) => <ConflictItem key={note.id} listName={conflictedNote.listNames[i]} note={note} status={conflictedNote.status} />)}
        </AnimateSharedLayout>
      </div>
      {renderLoading()}
      {renderMergeError()}
    </div>
  );
};

const _ConflictItem = (props) => {

  const { listName, note, status } = props;
  const { id, title, body, updatedDT } = note;
  const [isOpen, setIsOpen] = useState(false);
  const didClick = useRef(false);
  const dispatch = useDispatch();

  const onOpenBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const onChooseBtnClick = () => {
    if (didClick.current) return;
    dispatch(mergeNotes(id));
    didClick.current = true;
  };

  useEffect(() => {
    didClick.current = false;
  }, [status]);

  const updatedDTStr = useMemo(() => getFormattedDT(updatedDT), [updatedDT]);

  let arrowSvg;
  if (isOpen) {
    arrowSvg = (
      <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.29303 7.29302C5.48056 7.10555 5.73487 7.00023 6.00003 7.00023C6.26519 7.00023 6.5195 7.10555 6.70703 7.29302L10 10.586L13.293 7.29302C13.3853 7.19751 13.4956 7.12133 13.6176 7.06892C13.7396 7.01651 13.8709 6.98892 14.0036 6.98777C14.1364 6.98662 14.2681 7.01192 14.391 7.0622C14.5139 7.11248 14.6255 7.18673 14.7194 7.28062C14.8133 7.37452 14.8876 7.48617 14.9379 7.60907C14.9881 7.73196 15.0134 7.86364 15.0123 7.99642C15.0111 8.1292 14.9835 8.26042 14.9311 8.38242C14.8787 8.50443 14.8025 8.61477 14.707 8.70702L10.707 12.707C10.5195 12.8945 10.2652 12.9998 10 12.9998C9.73487 12.9998 9.48056 12.8945 9.29303 12.707L5.29303 8.70702C5.10556 8.51949 5.00024 8.26518 5.00024 8.00002C5.00024 7.73486 5.10556 7.48055 5.29303 7.29302V7.29302Z" />
      </svg>
    );
  } else {
    arrowSvg = (
      <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.29303 14.707C7.10556 14.5195 7.00024 14.2651 7.00024 14C7.00024 13.7348 7.10556 13.4805 7.29303 13.293L10.586 9.99998L7.29303 6.70698C7.11087 6.51838 7.01008 6.26578 7.01236 6.00358C7.01463 5.74138 7.1198 5.49057 7.30521 5.30516C7.49062 5.11975 7.74143 5.01458 8.00363 5.01231C8.26583 5.01003 8.51843 5.11082 8.70703 5.29298L12.707 9.29298C12.8945 9.48051 12.9998 9.73482 12.9998 9.99998C12.9998 10.2651 12.8945 10.5195 12.707 10.707L8.70703 14.707C8.5195 14.8945 8.26519 14.9998 8.00003 14.9998C7.73487 14.9998 7.48056 14.8945 7.29303 14.707Z" />
      </svg>
    );
  }

  return (
    <motion.div className="mt-6 border border-gray-200 rounded-lg" layout={true}>
      <motion.div className={`bg-gray-50 rounded-t-lg ${!isOpen ? 'rounded-b-lg' : ''} sm:flex sm:items-start sm:justify-between`} layout={true}>
        <div className="sm:flex-grow sm:flex-shrink">
          <button onClick={onOpenBtnClick} type="button" className="block flex pt-3 pl-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-inset rounded-lg">
            {arrowSvg}
            <div className="ml-1">
              <div className="text-sm font-medium text-gray-800 text-left">Last update on {updatedDTStr}</div>
              <div className="mt-1 text-sm text-gray-600 text-left">In {listName}</div>
            </div>
          </button>
        </div>
        <div className="py-3 pl-2.5 sm:pl-6 sm:pr-4 sm:flex-grow-0 sm:flex-shrink-0">
          <button onClick={onChooseBtnClick} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm rounded-md text-sm text-gray-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-600">
            <svg className="w-5 h-5 text-gray-500 mr-1" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.7069 5.29303C16.8944 5.48056 16.9997 5.73487 16.9997 6.00003C16.9997 6.26519 16.8944 6.5195 16.7069 6.70703L8.70692 14.707C8.51939 14.8945 8.26508 14.9998 7.99992 14.9998C7.73475 14.9998 7.48045 14.8945 7.29292 14.707L3.29292 10.707C3.11076 10.5184 3.00997 10.2658 3.01224 10.0036C3.01452 9.74143 3.11969 9.49062 3.3051 9.30521C3.49051 9.1198 3.74132 9.01464 4.00352 9.01236C4.26571 9.01008 4.51832 9.11087 4.70692 9.29303L7.99992 12.586L15.2929 5.29303C15.4804 5.10556 15.7348 5.00024 15.9999 5.00024C16.2651 5.00024 16.5194 5.10556 16.7069 5.29303Z" />
            </svg>
            Choose
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && <motion.div className="px-4 py-5" variants={slideYFMV} initial="hidden" animate="visible" exit="hidden">
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          <p className="mt-4 text-base font-normal text-gray-600">{body}</p>
        </motion.div>}
      </AnimatePresence>
    </motion.div>
  );
};

const ConflictItem = React.memo(_ConflictItem);

export default React.memo(NoteEditorConflict);
