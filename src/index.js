import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import Routes from './routes';

import 'normalize.css/normalize.css';

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
