import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function removeItem(alert, setAlert, index) {
  setAlert(alert.filter((item, i) => i !== index));
}

export default function Alerts(props) {
  const [alerts, setAlerts] = useState([]);
  const alertButtons = [
    ["primary", "Primary Alert"],
    ["success", "Success Alert"],
    ["warning", "Warning Alert"],
  ];
  return (
    <Container>
      <Row className="mt-4">
        <h2>Alerts</h2>
        <Col>
          {alertButtons.map((alert, index) => {
            const [variant, text] = alert;
            return (
              <Button
                className="me-2"
                key={index}
                variant={variant}
                onClick={() => setAlerts([...alerts, [variant, text]])}
              >
                {variant}
              </Button>
            );
          })}
          {alerts.map((info, index) => {
            const [variant, alert] = info;
            return (
              <Alert
                key={index}
                className="mt-2"
                variant={variant}
                dismissible
                onClick={() => removeItem(alerts, setAlerts, index)}
              >
                {alert}
              </Alert>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
