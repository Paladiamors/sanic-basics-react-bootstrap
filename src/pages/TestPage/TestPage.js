import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Alerts from "./Alerts";
import TestForm from "./Forms";



export default function TestPage() {
  const navigate = useNavigate();
  return (
    <>
    <Container>
      <Row className="mt-4">
        <h2>Click to change page</h2>
        <Col>
          <Button className="me-2" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button className="me-2" onClick={() => navigate("/about-us")}>
            About Us
          </Button>
        </Col>
      </Row>
    </Container>
    <Alerts />
    <TestForm/>
    </>
  );
}
