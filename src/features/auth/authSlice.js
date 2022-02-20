import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import jwt from "jwt-decode";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: Cookies.get("access_token") || "",
    access_token_signature: Cookies.get("access_token_signature") || "",
  },
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload.access_token;
      state.access_token_signature = action.payload.access_token_signature;
    },
    clearToken: (state) => {
      state.access_token = "";
      state.access_token_signature = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
export const selectUsername = (state) =>
  state.auth.access_token ? jwt(state.auth.access_token).username : null;
