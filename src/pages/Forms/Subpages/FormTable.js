import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function StaticFormTable() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Calories</th>
            <th>Protein</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
            <td className="align-middle">Beans</td>
            <td className="align-middle">100</td>
            <td className="align-middle">5</td>
          </tr>
          <tr>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
            <td className="align-middle">Lettuice</td>
            <td className="align-middle">10</td>
            <td className="align-middle">0.1</td>
          </tr>
          <tr>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
            <td className="align-middle">Chicken</td>
            <td className="align-middle">200</td>
            <td className="align-middle">20</td>
          </tr>
          <tr>
            <td>
              <Button variant="info">Add</Button>
            </td>
            <td>
              <Form.Control as="input" placeholder="name"></Form.Control>
            </td>
            <td className="align-middle">
              <Form.Control as="input" placeholder="calories"></Form.Control>
            </td>
            <td className="align-middle">
              <Form.Control as="input" placeholder="protein"></Form.Control>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button>Add Row</Button>
    </div>
  );
}

function DynamicFormTable() {
  const columns = ["#", "Food", "Calories", "Protein"];
  const tableData = [
    ["Beans", 100, 5],
    ["Lettuice", 10, 0.1],
    ["Chicken", 200, 20],
  ];

  const [rows, setRows] = useState(tableData);
  const [numInputRows, setNumInputRows] = useState(0);

  const inputRows = [];

  const addNutrient = (id) => {
    const nameValue = document.getElementsByClassName("name-" + id)[0].value;
    const caloriesValue = document.getElementsByClassName("calories-" + id)[0]
      .value;
    const proteinValue = document.getElementsByClassName("protein-" + id)[0]
      .value;

    setRows([
      ...rows,
      [nameValue, parseFloat(caloriesValue), parseFloat(proteinValue)],
    ]);
    setNumInputRows(numInputRows - 1);
  };

  const deleteNutrient = (name) => {
    var newRows = [...rows];
    for (let i = 0; i < rows.length; i++) {
      if (rows[i][0] === name) {
        newRows.splice(i, 1);
        setRows(newRows);
        break;
      }
    }
  };
  for (let i = 0; i < numInputRows; i++) {
    inputRows.push(
      <tr id={i} key={i}>
        <th>
          <Button variant="info" onClick={() => addNutrient(i)}>
            Add
          </Button>
        </th>
        <td>
          <Form.Control
            className={"name-" + i}
            as="input"
            placeholder="name"
          ></Form.Control>
        </td>
        <td className="align-middle">
          <Form.Control
            className={"calories-" + i}
            as="input"
            placeholder="calories"
          ></Form.Control>
        </td>
        <td className="align-middle">
          <Form.Control
            className={"protein-" + i}
            as="input"
            placeholder="protein"
          ></Form.Control>
        </td>
      </tr>
    );
  }
  return (
    <Container>
      <div>
        <Table>
          <thead>
            <tr>
              {columns.map((col) => (
                <td key={col}>{col}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteNutrient(row[0])}
                  >
                    Delete
                  </Button>
                </td>
                {row.map((value) => (
                  <td className="align-middle" key={value}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
            {inputRows}
          </tbody>
        </Table>
        <Button onClick={() => setNumInputRows(numInputRows + 1)}>
          Add Row
        </Button>
      </div>
    </Container>
  );
}

function DynamicFormTable2() {
  const columns = ["#", "Food", "Calories", "Protein"];
  const tableData = [
    ["Beans", 100, 5],
    ["Lettuice", 10, 0.1],
    ["Chicken", 200, 20],
  ];

  const [rows, setRows] = useState(tableData);

  const addNutrient = () => {
    const nameValue = document.getElementsByClassName("name-input")[0].value;
    const caloriesValue =
      document.getElementsByClassName("calories-input")[0].value;
    const proteinValue =
      document.getElementsByClassName("protein-input")[0].value;

    setRows([
      ...rows,
      [nameValue, parseFloat(caloriesValue), parseFloat(proteinValue)],
    ]);
    document.getElementsByClassName("name-input")[0].value = "";
    document.getElementsByClassName("calories-input")[0].value = "";
    document.getElementsByClassName("protein-input")[0].value = "";
  };

  const deleteNutrient = (name) => {
    var newRows = [...rows];
    for (let i = 0; i < rows.length; i++) {
      if (rows[i][0] === name) {
        newRows.splice(i, 1);
        setRows(newRows);
        break;
      }
    }
  };

  return (
    <Container>
      <div>
        <Table>
          <thead>
            <tr>
              {columns.map((col) => (
                <td key={col}>{col}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteNutrient(row[0])}
                  >
                    Delete
                  </Button>
                </td>
                {row.map((value) => (
                  <td className="align-middle" key={value}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <th>
                <Button variant="info" onClick={() => addNutrient()}>
                  Add
                </Button>
              </th>
              <td>
                <Form.Control
                  className={"name-input"}
                  as="input"
                  placeholder="name"
                ></Form.Control>
              </td>
              <td className="align-middle">
                <Form.Control
                  className={"calories-input"}
                  as="input"
                  placeholder="calories"
                ></Form.Control>
              </td>
              <td className="align-middle">
                <Form.Control
                  className={"protein-input"}
                  as="input"
                  placeholder="protein"
                ></Form.Control>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default function FormTable() {
  return (
    <Container>
      <h2>Table Entry Static</h2>
      <StaticFormTable />
      <h2>Table Entry</h2>
      <DynamicFormTable />
      <h2>Table Entry2</h2>
      <DynamicFormTable2 />
    </Container>
  );
}
