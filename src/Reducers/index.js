import { combineReducers } from "redux";
import { todoreducer } from "./todoreducer";

export const Reduxers = combineReducers({
  todo: todoreducer,
});
