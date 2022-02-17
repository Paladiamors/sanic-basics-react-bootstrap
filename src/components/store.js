import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authenticated/authSlice";
import authJwtReducer from "./AuthenticatedJwt/authJwtSlice";
import reduxReducer from "./ReduxTest/reduxSlice";
import fitnessReducer from "./Fitness/fitnessSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    authJwt: authJwtReducer,
    redux: reduxReducer,
    fitness: fitnessReducer,
  },
});
