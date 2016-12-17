/**
 * Created by Chris D on 17/12/2016.
 */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import dive from './reducers';
import App from './App';

const store = createStore(dive);

store.dispatch({
  type: 'ADD_DIMENSIONS',
  text: {
    width: 200,
    height: 200
  }
});

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
