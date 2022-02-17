import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserInfo, setAuthRedirect, setLogout } from "./authJwtSlice";
import PropTypes from "prop-types";

export default function Authenticated(props) {
  const userInfo = useSelector(selectUserInfo);
  console.log("userInfo is", userInfo);
  if (userInfo?.username) {
    const Component = props.component;
    return <Component {...props} />;
  } else {
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { msg: props.msg, redirect: props.redirect },
        }}
      />
    );
  }
}

Authenticated.propTypes = {
  msg: PropTypes.string,
  redirect: PropTypes.string,
  component: PropTypes.func,
};

export function logout(dispatch) {
  const url = "/api/auth/logout";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        dispatch(setLogout());
      }
    });
}

export function authedApiCall(
  data,
  dispatch,
  history,
  redirect,
  onSuccess,
  msg = "Please login to continue",
  login = "login"
) {
  if (data.exception) {
    dispatch(
      setAuthRedirect({
        authRedirect: {
          msg,
          redirect,
        },
      })
    );
    history.push(login);
  } else {
    onSuccess()
  }
}
