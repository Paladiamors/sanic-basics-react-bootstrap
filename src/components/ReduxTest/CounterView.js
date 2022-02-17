import React from "react";

import { useSelector } from "react-redux";
import { selectCounter } from "./reduxSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function CounterView(props) {
  const counter = useSelector(selectCounter);
  return (
    <Container>
      <Row>
        <h2>Counter Value</h2>
        <p>The counter value is: {counter}</p>
      </Row>
    </Container>
  );
}
