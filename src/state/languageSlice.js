import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "portfolio-language";

const getInitialLanguage = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "ja") return saved;
  return "en";
};

const initialState = {
  current: getInitialLanguage(),
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.current = action.payload;
      localStorage.setItem(STORAGE_KEY, action.payload);
      document.documentElement.lang = action.payload;
    },
    toggleLanguage: (state) => {
      state.current = state.current === "en" ? "ja" : "en";
      localStorage.setItem(STORAGE_KEY, state.current);
      document.documentElement.lang = state.current;
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const { setLanguage, toggleLanguage } = languageSlice.actions;
