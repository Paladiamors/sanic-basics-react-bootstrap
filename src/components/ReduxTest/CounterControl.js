import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Cookies from "js-cookie";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  selectCounter,
  setCounter,
} from "./reduxSlice";

export default function CounterControl(props) {
  const counter = useSelector(selectCounter);
  const [changeValue, setChangeValue] = useState(5);
  Cookies.set("counter", counter, { sameSite: "strict" });
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <h2>Counter Control</h2>
        <p>Counter is {counter}</p>
        <Col>
          <Button
            className="me-2"
            variant="primary"
            onClick={() => dispatch(incrementCounter())}
          >
            Increment
          </Button>
          <Button
            className="me-2"
            variant="danger"
            onClick={() => dispatch(decrementCounter())}
          >
            Decrement
          </Button>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <p>Set Value</p>
          <input
            defaultValue={changeValue}
            onChange={(e) => setChangeValue(parseInt(e.target.value))}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="success"
            onClick={() => dispatch(setCounter({ counter: changeValue }))}
          >
            Set Value
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
