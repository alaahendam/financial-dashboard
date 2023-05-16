import { createSlice } from "@reduxjs/toolkit";
// Define the initial mood value

const initialState = {
  mood: "light",
};

export const darkMoodSlice = createSlice({
  name: "mood",
  initialState,
  reducers: {
    changeMood: (state, action) => {
      state.mood = action.payload;
      typeof window !== "undefined"
        ? localStorage.setItem("dashboardMood", action.payload)
        : null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMood } = darkMoodSlice.actions;

export default darkMoodSlice.reducer;
