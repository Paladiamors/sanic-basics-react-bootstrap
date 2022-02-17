import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function MockLogin() {
  const login = () => {
    fetch("/api/auth/mock_login", { method: "POST", body: JSON.stringify({}) });
  };
  const logout = () => {
    fetch("/api/auth/mock_logout");
  };
  return (
    <Container>
      <Row>
        <Col>
          <h2>Test mock logins</h2>
          <Button className="me-2" variant="info" onClick={login}>
            Login
          </Button>
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
