import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  restorePurchases, refreshPurchases, updateIapPublicKey, updateIapRestoreStatus,
  updateIapRefreshStatus,
} from '../actions';
import {
  RESTORE_PURCHASES, REFRESH_PURCHASES, REFRESH_PURCHASES_COMMIT,
  REFRESH_PURCHASES_ROLLBACK,
} from '../types/actionTypes';
import {
  HASH_LANDING_MOBILE, HASH_SUPPORT, VALID, ACTIVE, NO_RENEW, GRACE, ON_HOLD, PAUSED,
  APPSTORE, PLAYSTORE, SM_WIDTH,
} from '../types/const';
import { getValidPurchase } from '../selectors';
import { getFormattedDate } from '../utils';

import { useSafeAreaFrame, useTailwind } from '.';

const _SettingsPopupIap = (props) => {

  const { onSidebarOpenBtnClick, onToRestoreIapViewBtnClick } = props;
  const purchase = useSelector(state => getValidPurchase(state));
  const tailwind = useTailwind();

  return (
    <div className={tailwind('p-4 md:p-6')}>
      <div className={tailwind('border-b border-gray-200 blk:border-gray-700 md:hidden')}>
        <button onClick={onSidebarOpenBtnClick} className={tailwind('group pb-1 focus:outline-none')}>
          <span className={tailwind('rounded-sm text-sm text-gray-500 group-focus:ring-2 group-focus:ring-gray-400 blk:text-gray-400 blk:group-focus:ring-gray-500')}>{'<'} <span className={tailwind('group-hover:underline')}>Settings</span></span>
        </button>
        <h3 className={tailwind('pb-2 text-xl font-medium leading-none text-gray-800 blk:text-gray-100')}>Subscription</h3>
      </div>
      {purchase ? <IapPurchased purchase={purchase} /> : <IapHome onToRestoreIapViewBtnClick={onToRestoreIapViewBtnClick} />}
    </div>
  );
};

const IapHome = (props) => {
  const { onToRestoreIapViewBtnClick } = props;
  const tailwind = useTailwind();

  return (
    <div className={tailwind('mt-6 mb-4 md:mt-0')}>
      <h4 className={tailwind('text-base font-medium leading-none text-gray-800 blk:text-gray-100')}>Purchase subscription</h4>
      <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Justnote is free and we offer a paid subscription for use of extra features. It's our intention to never show advertisments and we don't rent, sell or share your information with other companies. Our optional paid subscription is the only way we make money.</p>
      <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Support us and unlock extra features: pin to the top and dark appearance. It's around $4.99 per year (may vary between countries depending on taxes and exchange rates). You can purchase a subscription in our <a className={tailwind('rounded underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 blk:hover:text-gray-200 blk:focus:ring-gray-500')} href={'/' + HASH_LANDING_MOBILE} target="_blank" rel="noreferrer">Mobile apps</a>.</p>
      <p className={tailwind('mt-5 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>If you've already purchased the subscription, try <button onClick={onToRestoreIapViewBtnClick} className={tailwind('rounded underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 blk:hover:text-gray-200 blk:focus:ring-gray-500')}>Restore purchases</button>.</p>
    </div>
  );
};

const IapPurchased = (props) => {

  const { purchase } = props;
  const publicKey = useSelector(state => state.iap.publicKey);
  const refreshStatus = useSelector(state => state.iap.refreshStatus);
  const didClick = useRef(false);
  const dispatch = useDispatch();
  const tailwind = useTailwind();

  // To make sure useEffect is componentWillUnmount
  const refreshStatusRef = useRef(refreshStatus);
  const dispatchRef = useRef(dispatch);

  const onRefreshBtnClick = () => {
    if (didClick.current) return;
    dispatch(refreshPurchases());
    didClick.current = true;
  };

  useEffect(() => {
    if (!publicKey) dispatch(updateIapPublicKey());
  }, [publicKey, dispatch]);

  useEffect(() => {
    didClick.current = false;
  }, [refreshStatus]);

  useEffect(() => {
    refreshStatusRef.current = refreshStatus;
    dispatchRef.current = dispatch;
  }, [refreshStatus, dispatch]);

  useEffect(() => {
    return () => {
      if (![null, REFRESH_PURCHASES].includes(refreshStatusRef.current)) {
        dispatchRef.current(updateIapRefreshStatus(null));
      }
    };
  }, []);

  let appStoreLink = (
    <span className={tailwind('underline')}>N/A</span>
  );
  if (purchase.source === APPSTORE) {
    appStoreLink = (
      <a className={tailwind('rounded underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 blk:hover:text-gray-200 blk:focus:ring-gray-500')} href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noreferrer">App Store</a>
    );
  } else if (purchase.source === PLAYSTORE) {
    appStoreLink = (
      <a className={tailwind('rounded underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 blk:hover:text-gray-200 blk:focus:ring-gray-500')} href="https://play.google.com/store/account/subscriptions?sku=com.justnotecc.supporter&package=com.justnotecc" target="_blank" rel="noreferrer">Google Play</a>
    );
  }

  let publicKeyText = (
    <div className={tailwind('flex-shrink flex-grow pt-1 sm:pl-3')}>
      <div className={tailwind('ball-clip-rotate blk:ball-clip-rotate-blk')}>
        <div />
      </div>
    </div>
  );
  if (publicKey) publicKeyText = (
    <p className={tailwind('flex-shrink flex-grow break-all pt-1 text-base text-gray-500 blk:text-gray-400 sm:pt-0 sm:pl-3')}>{publicKey}</p>
  );

  let infoText, isUnknown = false;
  if (purchase.status === ACTIVE) {
    infoText = (
      <React.Fragment>
        <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>
          <svg className={tailwind('mb-1 mr-1 inline-block w-5 text-green-500 blk:text-green-400')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" />
          </svg>
          <span className={tailwind('text-green-600 blk:text-green-500')}>Thank you very much for supporting us.</span> You've unlocked extra features: pin to the top and dark appearance.
        </p>
        <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Your subscription will be expired on {getFormattedDate(new Date(purchase.expiryDate))} and it'll be automatically renewed. You can manage your subscription at {appStoreLink}.</p>
      </React.Fragment>
    );
  } else if (purchase.status === NO_RENEW) {
    infoText = (
      <React.Fragment>
        <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Thank you very much for supporting us. You've unlocked extra features: pin to the top and dark appearance.</p>
        <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Your subscription will be expired on {getFormattedDate(new Date(purchase.expiryDate))} and it won't be automatically renewed. If you want to enable automatically renewal, please go to {appStoreLink} to manage your subscription.</p>
      </React.Fragment>
    );
  } else if (purchase.status === GRACE) {
    infoText = (
      <React.Fragment>
        <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Thank you very much for supporting us. You've unlocked extra features: pin to the top and dark appearance.</p>
        <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>
          <svg className={tailwind('mb-1 mr-1 inline-block w-5 text-red-500 blk:text-red-500')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z" />
          </svg>
          <span className={tailwind('text-red-600 blk:text-red-500')}>Your subscription has been expired</span> and you won't be able to use extra features soon. Please go to {appStoreLink} now to renew your subscription to continue supporting us and using extra features.
        </p>
      </React.Fragment>
    );
  } else if (purchase.status === ON_HOLD) {
    infoText = (
      <React.Fragment>
        <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Thank you very much for supporting us.</p>
        <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>
          <svg className={tailwind('mb-1 mr-1 inline-block w-5 text-red-500 blk:text-red-500')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z" />
          </svg>
          <span className={tailwind('text-red-600 blk:text-red-500')}>Your subscription has been expired.</span> Please go to {appStoreLink} now to renew your subscription to continue supporting us and using extra features.
        </p>
      </React.Fragment>
    );
  } else if (purchase.status === PAUSED) {
    infoText = (
      <React.Fragment>
        <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Thank you very much for supporting us.</p>
        <p className={tailwind('mt-4 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Your subscription is paused. If you want to resume, please go to {appStoreLink} to manage your subscription.</p>
      </React.Fragment>
    );
  } else {
    infoText = (
      <React.Fragment>
        <div className={tailwind('mt-6 flex items-center')}>
          <svg className={tailwind('w-5 flex-shrink-0 flex-grow-0 text-red-500 blk:text-red-500')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z" />
          </svg>
          <p className={tailwind('ml-1 flex-shrink flex-grow text-base leading-relaxed text-red-600 blk:text-red-500')}>We cannot determine your subscription's status.</p>
        </div>
      </React.Fragment>
    );
    isUnknown = true;
  }

  let refreshPanel = (
    <p className={tailwind('mt-6 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>{isUnknown ? 'Please wait a moment and try' : 'If your subscription is not up to date, try'} <button onClick={onRefreshBtnClick} className={tailwind('rounded underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 blk:hover:text-gray-200 blk:focus:ring-gray-500')}>Refresh purchases</button>.</p>
  );
  if (refreshStatus === REFRESH_PURCHASES) {
    refreshPanel = (
      <div className={tailwind('mt-6')}>
        <div className={tailwind('flex items-center')}>
          <div className={tailwind('ball-clip-rotate blk:ball-clip-rotate-blk')}>
            <div />
          </div>
          <p className={tailwind('ml-1 text-base text-gray-500 blk:text-gray-400')}>Refresh...</p>
        </div>
      </div>
    );
  } else if (refreshStatus === REFRESH_PURCHASES_COMMIT) {
    refreshPanel = (
      <div className={tailwind('mt-6')}>
        <div className={tailwind('flex items-center')}>
          <svg className={tailwind('w-5 flex-shrink-0 flex-grow-0 text-green-500 blk:text-green-400')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" />
          </svg>
          <p className={tailwind('ml-1 flex-shrink flex-grow text-base text-gray-500 blk:text-gray-400')}>Your subscription is up to date.</p>
        </div>
      </div>
    );
  } else if (refreshStatus === REFRESH_PURCHASES_ROLLBACK) {
    refreshPanel = (
      <div className={tailwind('mt-6')}>
        <div className={tailwind('flex items-center')}>
          <svg className={tailwind('w-5 flex-shrink-0 flex-grow-0 text-red-500 blk:text-red-500')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z" />
          </svg>
          <p className={tailwind('ml-1 flex-shrink flex-grow text-base text-red-600 blk:text-red-500')}>Oops..., something went wrong!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={tailwind('mt-6 mb-4 md:mt-0')}>
      <h4 className={tailwind('text-base font-medium leading-none text-gray-800 blk:text-gray-100')}>Your subscription</h4>
      {infoText}
      {refreshPanel}
      <p className={tailwind('mt-6 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>{isUnknown ? 'If the problem persists' : 'If you have any question'}, please <a className={tailwind('rounded underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 blk:hover:text-gray-200 blk:focus:ring-gray-500')} href={'/' + HASH_SUPPORT} target="_blank" rel="noreferrer">contact us</a> with your app public key below and order ID in your order confirmation email.</p>
      <div className={tailwind('mt-6 flex flex-col sm:flex-row')}>
        <p className={tailwind('flex-shrink-0 flex-grow-0 text-base text-gray-500 blk:text-gray-400')}>App public key:</p>
        {publicKeyText}
      </div>
    </div>
  );
};

const _SettingsPopupIapRestore = (props) => {

  const { onBackToIapViewBtnClick } = props;
  const { width: safeAreaWidth } = useSafeAreaFrame();
  const purchase = useSelector(state => getValidPurchase(state));
  const publicKey = useSelector(state => state.iap.publicKey);
  const restoreStatus = useSelector(state => state.iap.restoreStatus);
  const didClick = useRef(false);
  const dispatch = useDispatch();
  const tailwind = useTailwind();

  // To make sure useEffect is componentWillUnmount
  const restoreStatusRef = useRef(restoreStatus);
  const dispatchRef = useRef(dispatch);

  const onRestoreBtnClick = () => {
    if (didClick.current) return;
    dispatch(restorePurchases());
    didClick.current = true;
  };

  useEffect(() => {
    if (!publicKey) dispatch(updateIapPublicKey());
  }, [publicKey, dispatch]);

  useEffect(() => {
    if (purchase) onBackToIapViewBtnClick();
  }, [purchase, onBackToIapViewBtnClick]);

  useEffect(() => {
    didClick.current = false;
  }, [restoreStatus]);

  useEffect(() => {
    restoreStatusRef.current = restoreStatus;
    dispatchRef.current = dispatch;
  }, [restoreStatus, dispatch]);

  useEffect(() => {
    return () => {
      if (![null, RESTORE_PURCHASES].includes(restoreStatusRef.current)) {
        dispatchRef.current(updateIapRestoreStatus(null));
      }
    };
  }, []);

  let actionPanel;
  if (restoreStatus === null) {
    actionPanel = (
      <button onClick={onRestoreBtnClick} type="button" className={tailwind('mt-7 mb-4 block rounded-md border border-gray-300 bg-white px-2 py-2 text-sm text-gray-500 shadow-sm hover:border-gray-400 hover:text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 blk:border-gray-400 blk:bg-gray-900 blk:text-gray-300 blk:hover:border-gray-300 blk:hover:text-gray-200 blk:focus:border-gray-300 blk:focus:ring-gray-500 blk:focus:ring-offset-gray-900')}>
        Restore my purchases
      </button>
    );
  } else if (restoreStatus === RESTORE_PURCHASES || purchase) {
    actionPanel = (
      <div className={tailwind('mt-7 mb-4')}>
        <div className={tailwind('flex items-center')}>
          <div className={tailwind('ball-clip-rotate blk:ball-clip-rotate-blk')}>
            <div />
          </div>
          <p className={tailwind('ml-1 text-base text-gray-500 blk:text-gray-400')}>Restoring...</p>
        </div>
      </div>
    );
  } else if (restoreStatus === VALID) {
    let publicKeyText = (
      <div className={tailwind('flex-shrink flex-grow pt-1 sm:pl-3')}>
        <div className={tailwind('ball-clip-rotate blk:ball-clip-rotate-blk')}>
          <div />
        </div>
      </div>
    );
    if (publicKey) publicKeyText = (
      <p className={tailwind('flex-shrink flex-grow break-all pt-1 text-base text-gray-500 blk:text-gray-400 sm:pt-0 sm:pl-3')}>{publicKey}</p>
    );

    actionPanel = (
      <div className={tailwind('mt-6 mb-4')}>
        <div className={tailwind('flex items-center')}>
          <svg className={tailwind('w-5 flex-shrink-0 flex-grow-0 text-gray-400 blk:text-gray-400')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11V14C9 14.5523 9.44772 15 10 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13V10C11 9.44772 10.5523 9 10 9H9Z" />
          </svg>
          <p className={tailwind('ml-1 flex-shrink flex-grow text-base text-gray-500 blk:text-gray-400')}>No purchase found.</p>
        </div>
        <p className={tailwind('mt-6 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Please try to restore purchases in our <a className={tailwind('rounded underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 blk:hover:text-gray-200 blk:focus:ring-gray-500')} href={'/' + HASH_LANDING_MOBILE} target="_blank" rel="noreferrer">Mobile apps</a> where you've made the purchase.</p>
        <p className={tailwind('mt-6 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>If there's still no purchase found, please <a className={tailwind('rounded underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 blk:hover:text-gray-200 blk:focus:ring-gray-500')} href={'/' + HASH_SUPPORT} target="_blank" rel="noreferrer">contact us</a> with your app public key below and order ID in your order confirmation email.</p>
        <div className={tailwind('mt-6 flex flex-col sm:flex-row')}>
          <p className={tailwind('flex-shrink-0 flex-grow-0 text-base text-gray-500 blk:text-gray-400')}>App public key:</p>
          {publicKeyText}
        </div>
      </div>
    );
  } else {
    actionPanel = (
      <div className={tailwind('mt-6 mb-4')}>
        <div className={tailwind('flex items-center')}>
          <svg className={tailwind('w-5 flex-shrink-0 flex-grow-0 text-red-500 blk:text-red-500')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14ZM10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z" />
          </svg>
          <p className={tailwind('ml-1 flex-shrink flex-grow text-base text-red-600 blk:text-red-500')}>Oops..., something went wrong!</p>
        </div>
        <p className={tailwind('mt-6 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>Please wait a moment and try again. If the problem persists, please <a className={tailwind('rounded underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 blk:hover:text-gray-200 blk:focus:ring-gray-500')} href={'/' + HASH_SUPPORT} target="_blank" rel="noreferrer">contact us</a>.</p>
      </div>
    );
  }

  return (
    <div className={tailwind('p-4 md:p-6 md:pt-4')}>
      <div className={tailwind('border-b border-gray-200 blk:border-gray-700 md:border-b-0')}>
        <button onClick={onBackToIapViewBtnClick} className={tailwind('group pb-1 focus:outline-none md:pb-0')}>
          <span className={tailwind('rounded text-sm text-gray-500 group-focus:ring-2 group-focus:ring-gray-400 blk:text-gray-400 blk:group-focus:ring-gray-500')}>{'<'} <span className={tailwind('group-hover:underline')}>{safeAreaWidth < SM_WIDTH ? 'Settings / ' : ''}Subscription</span></span>
        </button>
        <h3 className={tailwind('pb-2 text-xl font-medium leading-none text-gray-800 blk:text-gray-100 md:pb-0')}>Restore Purchases</h3>
      </div>
      <p className={tailwind('mt-6 text-base leading-relaxed text-gray-500 blk:text-gray-400')}>It may take several minutes to restore your purchases.</p>
      {actionPanel}
    </div>
  );
};

export const SettingsPopupIap = React.memo(_SettingsPopupIap);
export const SettingsPopupIapRestore = React.memo(_SettingsPopupIapRestore);
