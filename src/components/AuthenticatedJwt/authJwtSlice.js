import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import jwt from "jwt-decode";

export const authJwtSlice = createSlice({
  name: "authJwt",
  initialState: {
    userInfo: Cookies.get("access_token")
      ? jwt(Cookies.get("access_token"))
      : {},
    authRedirect: {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = jwt(action.payload.userInfo);
    },
    setAuthRedirect: (state, action) => {
      state.authRedirect = action.payload.authRedirect;
    },
    resetAuthRedirect: (state) => {
      state.authRedirect = {};
    },
    setLogout: (state) => {
      state.userInfo = {};
      Cookies.remove("access_token");
      Cookies.remove("access_token_signature");
    },
  },
});

export const { setUserInfo, setAuthRedirect, resetAuthRedirect, setLogout } =
  authJwtSlice.actions;

export default authJwtSlice.reducer;
export const selectUserInfo = (state) => state.authJwt.userInfo;
export const selectAuthRedirect = (state) => state.authJwt.authRedirect;
