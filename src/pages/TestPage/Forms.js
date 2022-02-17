import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function onSubmit(e) {
  e.preventDefault();
  console.log(e.target);
}

export default function TestForm() {
  return (
    <Container className="mt-4">
      <h2>Test Form</h2>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                Shhhh. This is a secret.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
