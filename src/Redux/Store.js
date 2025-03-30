import { configureStore } from "@reduxjs/toolkit";
import { AppStore } from "./AppStore";

export const store = configureStore({
  reducer: {
    AppStore: AppStore,
  },
});
