import { createSlice } from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
  name: "redux",
  initialState: {
    counter: 0,
  },
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
    decrementCounter: (state) => {
      state.counter -= 1;
    },
    setCounter: (state, action) => {
      state.counter = action.payload.counter;
    },
  },
});

export const { incrementCounter, decrementCounter, setCounter } =
  reduxSlice.actions;

export default reduxSlice.reducer;
export const selectCounter = (state) => state.redux.counter;
