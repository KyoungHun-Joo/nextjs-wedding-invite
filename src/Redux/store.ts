import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer, { RootState } from "./Reducers";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = (context) =>
  configureStore({
    reducer: rootReducer,
    // Additional middleware can be passed here
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // Optional: Add preloadedState if needed
  });
