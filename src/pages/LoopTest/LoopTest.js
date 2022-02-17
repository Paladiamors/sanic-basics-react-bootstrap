import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ListLoop() {
  const [liData, setLiData] = useState([]);
  const listData = ["first", "second", "third"];

  return (
    <div>
      <Row>
        <h2>Lists</h2>
        <Col>
          <ul>
            {liData.map((data, i) => (
              <li key={i}>{data}</li>
            ))}
          </ul>
        </Col>
        <Row>
          <Col>
            <Button variant="primary" onClick={() => setLiData(listData)}>
              List Show
            </Button>
            <Button variant="warning" onClick={() => setLiData([])}>
              List Hide
            </Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default function LoopTest() {
  return (
    <Container>
      <ListLoop />
    </Container>
  );
}
