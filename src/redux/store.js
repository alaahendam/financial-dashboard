import { configureStore } from "@reduxjs/toolkit";
import darkMoodReducer from "./features/darkMood";
export const store = configureStore({
  reducer: {
    mood: darkMoodReducer,
  },
});
