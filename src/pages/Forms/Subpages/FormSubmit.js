import React from "react";
import Container from "react-bootstrap/Container";
import DynamicForm from "../../../components/FormGenerator";

export default function FormSubmit() {
  const url = "api/forms/form";
  const onSubmit = (json) => console.log(json);

  const options = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
  ];
  const fields = [
    { type: "FormText", name: "comment", label: "Comment" },
    { type: "FormEmail", name: "email", label: "Email" },
    { type: "FormDate", name: "birthday", label: "Birthday" },
    { type: "FormSelect", name: "options", label: "Options", options },
    // Need to self host to skip the annoying register message
    // { type: "FormTinyMce", name: "essay", label: "Essay" },
  ];
  return (
    <Container>
      <h2>Comment Box</h2>
      <DynamicForm fields={fields} url={url} onSubmit={onSubmit} />
    </Container>
  );
}
