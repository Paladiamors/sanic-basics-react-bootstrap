import React from "react";
import Container from "react-bootstrap/Container";
import DynamicForm from "../../components/FormGenerator";

function SignUp() {
  const url = "api/auth/add_user";
  const fields = [
    { type: "FormEmail", name: "email", label: "Email", required: true },
    { type: "FormText", name: "username", label: "Username", required: true },
    {
      type: "FormPassword",
      name: "password",
      label: "Password",
      required: true,
    },
  ];

  const onSubmit = function (data) {
    console.log(data);
  };

  return (
    <Container>
      <h2>Sign Up to the site</h2>
      <DynamicForm fields={fields} onSubmit={onSubmit} url={url} />
    </Container>
  );
}

export default SignUp;
