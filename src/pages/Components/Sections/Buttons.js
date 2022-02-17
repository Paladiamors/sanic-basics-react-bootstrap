import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Buttons() {
  return (
    <Row className="pb-2">
      <Col>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>{" "}
        <Button variant="link">Link</Button>
      </Col>
    </Row>
  );
}

function OutlineButtons() {
  return (
    <Row className="pb-2">
      <Col>
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
        <Button variant="outline-success">Success</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
        <Button variant="outline-danger">Danger</Button>{" "}
        <Button variant="outline-info">Info</Button>{" "}
        <Button variant="outline-light">Light</Button>{" "}
        <Button variant="outline-dark">Dark</Button>{" "}
        <Button variant="link">Link</Button>
      </Col>
    </Row>
  );
}

function ButtonGroups() {
  return (
    <Row className="pb-2">
      <Col>
        <ButtonGroup className="me-2" aria-label="group-1">
          <Button variant="outline-primary">Primary</Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-warning">Warning</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2" aria-label="danger">
          <Button variant="outline-danger">Danger</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-light">Light</Button>
          <Button variant="outline-dark">Dark</Button>
          <Button variant="link">Link</Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
}

export default function ButtonSection() {
  return (
    <div>
      <Buttons />
      <OutlineButtons />
      <ButtonGroups />
    </div>
  );
}
