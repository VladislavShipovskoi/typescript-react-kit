import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const middlewareOptions = {
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
};

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareOptions),
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
