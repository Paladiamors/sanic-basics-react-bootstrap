import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function onEdit(id, tableData, setTableData) {
  tableData.edit[id] = id;
  setTableData(Object.assign({}, tableData));
}

function onSave(id, tableData, setTableData) {
  const url = "/api/forms/echo";
  const row = document.getElementById(id);
  const children = row.children;
  let values = [];

  for (let i = 0; i < children.length - 1; i++) {
    values.push(children[i].children[0].value);
  }

  fetch(url, {
    method: "POST",
    body: JSON.stringify(values),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data));

  tableData.data[id] = values;
  delete tableData.edit[id];
  setTableData(Object.assign({}, tableData));
}

function onDelete() {}

export default function EditableTable() {
  const initialTableData = {
    columns: ["Column1", "Column2", "Column3", "Buttons"],
    data: [
      ["Row1", "Row1", "Row1"],
      ["Row2", "Row2", "Row2"],
    ],
    edit: {},
  };

  const [tableData, setTableData] = useState(initialTableData);

  return (
    <Container>
      <Table id="data-table">
        <thead>
          <tr>
            {tableData.columns.map((col) => (
              <td key={col}>{col}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((row, index) => (
            <tr id={index} key={index} className="align-middle">
              {!(index in tableData.edit) &&
                row.map((val, valIndex) => <td key={valIndex}>{val}</td>)}
              {index in tableData.edit &&
                row.map((val, valIndex) => (
                  <td key={valIndex}>
                    <Form.Control
                      as="input"
                      key={valIndex}
                      defaultValue={val}
                    />
                  </td>
                ))}
              <td>
                <Button
                  variant="primary"
                  disabled={index in tableData.edit}
                  onClick={() => onEdit(index, tableData, setTableData)}
                >
                  Edit
                </Button>
                <Button className="ms-2" variant="danger">
                  Delete
                </Button>
                {index in tableData.edit && (
                  <Button
                    className="ms-2"
                    variant="success"
                    onClick={() => onSave(index, tableData, setTableData)}
                  >
                    Save
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
