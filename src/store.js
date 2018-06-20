import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getItemFromStorage, storeItem } from './helpers/localStorage';

// Get initial state from localStorage
const persistedState = { todos: getItemFromStorage('todos') };

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

// Persist state to localStorage
store.subscribe(() => {
  storeItem('todos', store.getState().todos);
});

export default store;
