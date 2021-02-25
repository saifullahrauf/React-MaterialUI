import { combineReducers } from "redux";
import shiftReducer from "./shiftReducer.js";
import employeeReducer from "./employeeReducer.js";

const rootReducer = combineReducers({
  shiftReducer,
  employeeReducer,
});

export default rootReducer;
