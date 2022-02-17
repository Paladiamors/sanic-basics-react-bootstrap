import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenseList: [],
  },
  reducers: {
    setExpenseList: (state, action) => {
      state.expenseList = action.payload;
    },
    addExpense: (state, action) => {
      state.expenseList.push(action.payload);
    },
  },
});

export const { setExpenseList, addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
export const selectExpenseList = (state) => state.expense.expenseList