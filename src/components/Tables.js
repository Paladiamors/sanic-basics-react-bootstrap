import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export function SimpleTable(props) {
  // https://reactstrap.github.io/components/tables/
  // information on how to use these here
  const { data, styles } = props;

  if (data.length === 0) {
    return <div />;
  }
  const columns = Object.keys(data[0]);
  var counter = 0;

  return (
    <Table {...styles}>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={counter++}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={counter++}>
              {columns.map((column) => (
                <td key={counter++}>{row[column]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export function ButtonTable(props) {
  const { styles } = props;
  return (
    <Table {...styles}>
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ width: "25%" }}>
            <Button color="info">Submit</Button>
          </td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
        </tr>
        <tr>
          <td>
            <Button color="info">Submit</Button>
          </td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
        </tr>
      </tbody>
    </Table>
  );
}
