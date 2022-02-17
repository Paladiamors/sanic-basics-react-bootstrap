import React from "react";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";

function Alerts() {
  const alerts = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ));

  return (
    <Row>
      <h2>Alerts</h2>
      {alerts}
    </Row>
  );
}

function AlertLinks() {
  const alerts = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert with{" "}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>
  ));

  return (
    <Row>
      <h2>Alert Links</h2>
      {alerts}
    </Row>
  );
}


export default function AlertSection(){
    return (
        <div>
          <Alerts />
          <AlertLinks />
        </div>
      );
}