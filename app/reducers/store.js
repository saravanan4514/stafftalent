import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';

const reducer = combineReducers({
  settings: reducers.settings,
  searchJob: reducers.searchJob
});

const routingMiddleware = routerMiddleware(browserHistory);

const store = createStore(reducer, {}, compose(
  applyMiddleware(thunk, routingMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
