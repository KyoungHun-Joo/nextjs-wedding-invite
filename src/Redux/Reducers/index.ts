// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
// #endregion Local Imports

const rootReducer = combineReducers({
  home: HomeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
