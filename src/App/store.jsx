import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/functions";

export const store = configureStore({
  reducer: counterReducer,
});
