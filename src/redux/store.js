import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/langSlice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
  },
});
