import { configureStore } from "@reduxjs/toolkit";
import darkMoodReducer from "./features/darkMood";
import ChartsDataReducer from "./features/chartsData";
export const store = configureStore({
  reducer: {
    mood: darkMoodReducer,
    chartsData: ChartsDataReducer,
  },
});
