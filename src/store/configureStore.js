import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  {},
  composeEnhancers(
    autoRehydrate(),
    applyMiddleware(thunk),
  ),
);
