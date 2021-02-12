import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todoReducers from "./todoReducers";

export default combineReducers({ todoReducers, visibilityFilter });
