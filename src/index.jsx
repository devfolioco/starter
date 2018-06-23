import 'normalize.css/normalize.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';
import ErrorBoundary from './components/ErrorBoundary';

render(
  <Provider store={store}>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('app')
);
