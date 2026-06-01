import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./menuSlice";
import { languageReducer } from "./languageSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    language: languageReducer,
  },
});
