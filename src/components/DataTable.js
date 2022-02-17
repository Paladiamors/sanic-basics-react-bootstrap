import React from "react";
import { sprintf } from "sprintf-js";
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import PropTypes from "prop-types";

/**
 *
 * @param {props.list} data of data
 * @param {props.object} styles of styles
 * @param {props.func} onDelete handler to handle delete actions, for this handler you'll get back the ID of the object
 * @param {props.object} columnHandlers custom handler to render specific columns
 * @param {props.list} skipColumns list of column names to skip when rendering a table
 */
export default function DataTable(props) {
  // https://reactstrap.github.io/components/tables/
  // information on how to use these here
  const {
    data,
    styles,
    onDelete,
    columnHandlers = {},
    skipColumns = [],
  } = props;

  // Filter out columns not in the list of keys
  const columns = Object.keys(data[0]).filter(
    (column) => skipColumns.indexOf(column) === -1
  );
  var counter = 0;

  const buttonHandler = (column, row, counter) => (
    <td key={counter}>
      <Button color="danger" onClick={() => onDelete(row[column])}>
        Delete
      </Button>
    </td>
  );
  const defaultColumnHandler = (column, row, counter) => (
    <td key={counter}>{row[column]}</td>
  );
  const handlers = {
    ...columnHandlers,
    id: buttonHandler,
    default_: defaultColumnHandler,
  };

  const columnMap = (column, row) => {
    counter++;
    if (column in handlers) {
      return handlers[column](column, row, counter);
    } else {
      return handlers["default_"](column, row, counter);
    }
  };

  return (
    <Table {...styles}>
      <thead>
        <tr>
          {columns.map((column) => {
            return (
              <th key={counter++}>{column !== "id" ? column : "action"}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={counter++}>
              {columns.map((column) => columnMap(column, row, counter))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  styles: PropTypes.object,
  onDelete: PropTypes.func,
  columnHandlers: PropTypes.object,
  skipColumns: PropTypes.array,
};

/**
 *
 * @param {list} dataList the of data representing the data in the table
 * @param {func} storeUpdate a function that updates the store with the data
 * @param {string} url url to post the data to
 */
export function deleteHelper(dataList, storeUpdate, url) {
  function onDelete(id) {
    var i;
    var data = [...dataList];
    for (i = 0; i < dataList.length; i++) {
      if (id === data[i]["id"]) {
        data.splice(i, 1);
        const formData = new FormData();
        formData.append("id", id);
        fetch(url, {
          method: "POST",
          body: formData,
        });
      }
      storeUpdate(data);
    }
  }

  return onDelete;
}

/**
 *
 * @param {string} urlTemplate a template to generate a link when clicking on the link
 */
export function renderLinkHelper(urlTemplate) {
  return (column, row, counter) => (
    <a key={counter} href={sprintf(urlTemplate, row[column])}>
      {row[column]}
    </a>
  );
}
