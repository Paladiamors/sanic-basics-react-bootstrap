import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import DynamicForm from "../../components/FormGenerator";

export default function UserDetails() {
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const fetch_url = "/api/auth/user_info";
  // const update_url = "/api/auth/user_update";
  const update_url = "/api/forms/form";
  const onSubmit = (data) => console.log(data);
  const fields = [
    {
      type: "FormText",
      name: "username",
      label: "Username",
      defaultValue: userInfo.username,
    },
    {
      type: "FormText",
      name: "email",
      label: "Email",
      defaultValue: userInfo.email,
    },
    { type: "FormPassword", name: "password", label: "Password" },
  ];

  useEffect(() => {
    fetch(fetch_url, {
      method: "POST",
      body: JSON.stringify({ username }),
    })
      .then((response) => response.json())
      .then((data) => setUserInfo(data));
  }, [username]);
  console.log("user_info", userInfo);
  return (
    <Container>
      <h2>User Info</h2>
      <DynamicForm fields={fields} url={update_url} onSubmit={onSubmit} />
    </Container>
  );
}
