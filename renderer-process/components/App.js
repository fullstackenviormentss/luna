/**
 * App Component
 *
 */

'use strict';

import {remote, ipcRenderer} from 'electron';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../store';

import AppHeader from '../common/AppHeader';

//configuration and store globals
const config = remote.getGlobal('config');
const electronStore = remote.getGlobal('store');
const store = configureStore();
const rootEl = document.getElementById('app-content');

//dev mode on
require('../development/imports.js');

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <AppHeader title="Luna"/>
      </div>
    </Provider>
  );
}

export default App;
