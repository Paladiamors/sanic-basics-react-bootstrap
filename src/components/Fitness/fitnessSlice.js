import { createSlice } from "@reduxjs/toolkit";

export const fitnessSlice = createSlice({
  name: "fitness",
  initialState: {
    defaultFoods: [],
  },
  reducers: {
    setDefaultFoods: (state, action) => {
      state.defaultFoods = action.payload.defaultFoods
    },
  },
});

export const { setDefaultFoods } = fitnessSlice.actions;

export default fitnessSlice.reducer;
export const selectDefaultFoods = (state) => state.fitness.defaultFoods;
