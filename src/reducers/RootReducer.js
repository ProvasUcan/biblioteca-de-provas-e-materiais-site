import { combineReducers } from "redux";
import { SearchReducer } from "./search/SearchReducer";

export const rootReducer = combineReducers({
  searchReducer: SearchReducer,
});
