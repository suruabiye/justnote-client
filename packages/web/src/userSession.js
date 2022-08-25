import { UserSession, AppConfig } from '@stacks/auth/dist/esm'
import { Storage } from '@stacks/storage/dist/esm';
import { signECDSA as _signECDSA } from '@stacks/encryption/dist/esm';

import { DOMAIN_NAME, APP_SCOPES, DOT_JSON } from './types/const';

const _appConfig = new AppConfig(APP_SCOPES, DOMAIN_NAME);
const _userSession = new UserSession({ appConfig: _appConfig });

const isUserSignedIn = () => {
  return _userSession.isUserSignedIn();
};

const isSignInPending = () => {
  return _userSession.isSignInPending();
};

const handlePendingSignIn = () => {
  return _userSession.handlePendingSignIn();
};

const signUserOut = () => {
  _userSession.signUserOut();
};

const updateUserData = (userData) => {
  const sessionData = _userSession.store.getSessionData();
  sessionData.userData = userData;
  _userSession.store.setSessionData(sessionData);
};

const loadUserData = () => {
  return _userSession.loadUserData();
};

const putFileOptions = { dangerouslyIgnoreEtag: true };
const putFile = (path, content, options = putFileOptions) => {
  if (path.endsWith(DOT_JSON)) content = JSON.stringify(content);

  const storage = new Storage({ userSession: _userSession });
  return storage.putFile(path, content, options);
};

const getFile = async (path, options = {}) => {
  const storage = new Storage({ userSession: _userSession });
  let content = /** @type {any} */(await storage.getFile(path, options));
  if (path.endsWith(DOT_JSON)) content = JSON.parse(content);
  return content;
};

const deleteFile = (path, options = {}) => {
  const storage = new Storage({ userSession: _userSession });
  return storage.deleteFile(path, options);
};

const listFiles = (callback) => {
  const storage = new Storage({ userSession: _userSession });
  return storage.listFiles(callback);
};

const signECDSA = (content) => {
  const userData = userSession.loadUserData();
  const sigObj = _signECDSA(userData.appPrivateKey, content);
  return sigObj;
};

const userSession = {
  _userSession, isUserSignedIn, isSignInPending, handlePendingSignIn, signUserOut,
  updateUserData, loadUserData, putFile, getFile, deleteFile, listFiles, signECDSA,
};

export default userSession;
