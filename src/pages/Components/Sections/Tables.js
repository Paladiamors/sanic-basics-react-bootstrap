import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { SimpleTable } from "../../../components/Tables";

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createRow() {
  const names = ["Bob", "Jones", "Timmy", "Alice"];
  return {
    name: randomChoice(names),
    age: Math.floor(Math.random() * 100),
    iq: Math.floor(Math.random() * 150),
  };
}

function tableData(rows) {
  let data = [];
  for (let i = 0; i < rows; i++) {
    data.push(createRow());
  }
  return data;
}

export default function TableSection(props) {
  const rows = 10;
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(tableData(rows));
  }, []);
  return (
    <div>
      <Row>
        <SimpleTable data={data} />
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => setData(tableData(rows))}>
            Update
          </Button>
          <Button
            variant="success"
            onClick={() => setData([...data, createRow()])}
          >
            Add Row
          </Button>
        </Col>
      </Row>
    </div>
  );
}
