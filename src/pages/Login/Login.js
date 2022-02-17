import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import DynamicForm from "../../components/FormGenerator";
import { useLocation } from "react-router-dom";
import {
  setUserInfo,
  resetAuthRedirect,
  selectAuthRedirect,
} from "../../components/AuthenticatedJwt/authJwtSlice";

function Login(props) {
  const authRedirect = useSelector(selectAuthRedirect);
  const state = useLocation().state || {};
  const dispatch = useDispatch();
  var msg = undefined,
    redirect = undefined;

  if (authRedirect.msg && authRedirect.redirect) {
    console.log("authRedirect is", authRedirect);
    msg = authRedirect.msg;
    redirect = authRedirect.redirect;
  }
  if (state.msg && state.redirect) {
    console.log("state is", state);
    msg = state.msg;
    redirect = state.redirect;
  }
  console.log("msg is", msg);
  const onSubmit = (data) => {
    if (data.access_token) {
      dispatch(
        setUserInfo({
          userInfo: data.access_token,
        })
      );
      dispatch(resetAuthRedirect());
      props.history.push(redirect || "/");
    }
  };
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  const url = "api/auth/login";
  const fields = [
    { type: "FormEmail", name: "email", label: "Email" },
    { type: "FormPassword", name: "password", label: "Password" },
  ];
  return (
    <Container>
      {msg && (
        <Alert
          variant="warning"
          show={visible}
          onClick={() => onDismiss()}
          dismissible
        >
          {msg}
        </Alert>
      )}
      <h2>Login</h2>
      <DynamicForm fields={fields} url={url} onSubmit={onSubmit} />
    </Container>
  );
}

export default Login;
