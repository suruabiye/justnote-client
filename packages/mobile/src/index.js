//import './wdyr';

import React, { useEffect } from 'react';
import { Text, TextInput, Platform, StatusBar } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { createStore, compose } from 'redux';
import { install as installReduxLoop } from 'redux-loop';
import {
  SafeAreaProvider, initialWindowMetrics, SafeAreaView,
} from 'react-native-safe-area-context';
import KeyboardManager from 'react-native-keyboard-manager';

import reducers from './reducers';
import { BLK_MODE } from './types/const';
import { getThemeMode } from './selectors';
import cache from './utils/cache';

import App from './components/App';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

/** @ts-ignore */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  /** @type {any} */(reducers),
  composeEnhancers(
    installReduxLoop({ ENABLE_THUNK_MIGRATION: true }),
  )
);

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(false);
  KeyboardManager.setEnableDebugging(false);
  KeyboardManager.setEnableAutoToolbar(false);
}

const _Root = () => {
  const themeMode = useSelector(state => getThemeMode(state));
  const backgroundColor = themeMode === BLK_MODE ? 'rgb(17, 24, 39)' : 'white';

  useEffect(() => {
    StatusBar.setBarStyle(themeMode === BLK_MODE ? 'light-content' : 'dark-content');
    if (Platform.OS === 'android') StatusBar.setBackgroundColor(backgroundColor);
  }, [themeMode, backgroundColor]);

  return (
    <SafeAreaView style={cache('SI_safeAreaView', { flex: 1, backgroundColor }, [themeMode])}>
      <App />
    </SafeAreaView>
  );
};

const Root = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <_Root />
      </SafeAreaProvider>
    </Provider>
  );
};

export default Root;
