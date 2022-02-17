// A simple test used to post to the sanic server and get a resposne back
// There might be some other things involved
import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function echoPost(data) {
  fetch("/api/forms/echo", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((resp) => console.log(resp));
}

function echoPostProtected(data) {
  fetch("/api/forms/echo_protected", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((resp) => console.log(resp));
}

export default function PostTest() {
  const post1 = { name: "post1", value: 1 };
  const post2 = { name: "post2", value: 2 };
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => echoPost(post1)}>
            Post1
          </Button>
          <Button variant="secondary" onClick={() => echoPost(post2)}>
            Post2
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => echoPostProtected(post1)}>
            Protected Post1
          </Button>
          <Button variant="secondary" onClick={() => echoPostProtected(post2)}>
            Protected Post2
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
