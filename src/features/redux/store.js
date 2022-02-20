import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import expenseReducer from "../../features/expense/expenseSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer,
  },
});
