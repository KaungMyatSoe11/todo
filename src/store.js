import { applyMiddleware, compose, createStore } from "redux";
import { Reduxers } from "./Reducers";
import thunk from "redux-thunk";
import gettodos from "./utils/api/gettodos";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  Reduxers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
