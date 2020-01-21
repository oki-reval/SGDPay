/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native'
import AppContainer from '_navigations';
import { Provider } from 'react-redux';
import store from '_states/store';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </>
  );
};

export default App;
