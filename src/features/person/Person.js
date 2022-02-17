import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPersonAge,
  selectPersonName,
  setAge,
  setName,
} from "./personSlice";
import { Row, Col, Button } from "reactstrap";

export default function Person() {
  const name = useSelector(selectPersonName);
  const age = useSelector(selectPersonAge);
  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("0");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>This is the person app</h2>
      <p>Name: {name ? name : "please specify a name"}</p>
      <p>Age: {age ? age : "please specify an age"}</p>
      <p>Message: {message ? message : "No message yet"}</p>
      <hr />
      <Row className="mb-2">
        <Col>
          <input
            onChange={(e) => setNewName(e.target.value)}
            placeholder="name"
          />
        </Col>
        <Col>
          <Button color="info" onClick={() => dispatch(setName(newName))}>
            Set Name
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            onChange={(e) => setNewAge(e.target.value)}
            placeholder="age"
          />
        </Col>
        <Col>
          <Button color="info" onClick={() => dispatch(setAge(Number(newAge)))}>
            Set Age
          </Button>
        </Col>
      </Row>
      <Row>
        <Button
          color="primary"
          onClick={() => {
            setMessage("hello");
          }}
        >
          Greeting
        </Button>
        <Col>
          <Button
            color="primary"
            onClick={() => {
              setMessage("bye bye");
            }}
          >
            Farewell
          </Button>
        </Col>
      </Row>
    </div>
  );
}
