import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: Cookies.get("username"),
    admin: Cookies.get("admin"),
  },
  reducers: {
    setLogin: (state, action) => {
      state.username = action.payload.username;
      state.admin = action.payload.admin;

    },
    setLogout: (state) => {
      state.username = "";
      state.admin = false;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
// export const { setUsername, clearUsername } = authSlice.actions;

export default authSlice.reducer;
export const selectUsername = (state) => state.auth.username;
export const selectAdmin = (state) => state.auth.admin;
