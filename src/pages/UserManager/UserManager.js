import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import DataTable from "../../components/DataTable";
import { Link } from "react-router-dom";

export default function UserManager() {
  const [users, setUsers] = useState([]);
  const getData = () => {
    if (users.length === 0) {
      fetch("/api/auth/list_users")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }
  };
  useEffect(() => {
    getData();
  });

  function onDelete(id) {
    var i;
    var data = [...users];
    for (i = 0; i < data.length; i++) {
      if (id === data[i]["id"]) {
        data.splice(i, 1);
        const formData = new FormData();
        formData.append("id", id);
        fetch("/api/auth/delete_user", {
          method: "POST",
          body: formData,
        });
      }
    }
    setUsers(data);
  }

  function usernameHandler(column, row, counter) {
    return (
      <td key={counter}>
        <Link to={"/user-details/" + row.username}>{row.username}</Link>
      </td>
    );
  }

  const columnHandlers = { username: usernameHandler };
  return (
    <Container>
      <h2>Users</h2>
      {users.length > 0 && (
        <DataTable
          data={users}
          onDelete={onDelete}
          columnHandlers={columnHandlers}
        />
      )}
    </Container>
  );
}
