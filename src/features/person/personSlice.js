import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "person",
  initialState: {
    age: 0,
    name: "",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.age += 1;
    },
    decrement: (state) => {
      state.age -= 1;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.age += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  setAge,
  setName,
  incrementByAmount,
} = personSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPersonAge = (state) => state.person.age;
export const selectPersonName = (state) => state.person.name;

export default personSlice.reducer;
