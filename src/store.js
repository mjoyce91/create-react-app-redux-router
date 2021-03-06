import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  routerReducer,
  routerMiddleware,
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import * as reducers from './reducers';

// export `history` to use in index.js, we using `createBrowserHistory`
/* export const history = createHistory({
  basename: process.env.PUBLIC_URL,
}); */
export const history = createHistory({});

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
const reducer = combineReducers(
  Object.assign({ router: routerReducer }, reducers)
);

export default function configureStore() {
  return createStore(
    reducer,
    applyMiddleware(thunk),
    applyMiddleware(middleware),
  );
}
