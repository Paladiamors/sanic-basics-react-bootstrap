import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectUsername } from "./authSlice";
import PropTypes from "prop-types";

export default function Authenticated(props) {
  const username = useSelector(selectUsername);
  if (username) {
    const Component = props.component;
    return <Component {...props} />;
  } else {
    return (
      <Redirect
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
