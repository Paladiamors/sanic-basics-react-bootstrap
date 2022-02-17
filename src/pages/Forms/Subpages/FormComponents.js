import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {
  FormRadio,
  FormCheck,
  FormSelect,
} from "../../../components/FormElements";

export default function FormComponents() {
  const radioOptions = [
    { name: "radio1 ", label: "radio-1", value: 1 },
    { name: "radio3 ", label: "radio-2", value: 2 },
    { name: "radio3 ", label: "radio-3", value: 3 },
  ];
  const checkOptions = [
    { name: "check1 ", label: "check-1", value: 1 },
    { name: "check3 ", label: "check-2", value: 2 },
    { name: "check3 ", label: "check-3", value: 3 },
  ];

  const selectOptions = [
    { name: "select1 ", label: "select-1", value: 1 },
    { name: "select3 ", label: "select-2", value: 2 },
    { name: "select3 ", label: "select-3", value: 3 },
  ];
  return (
    <Container>
      <Form.Group>
        <Form.Label>Test Label</Form.Label>
        <Form.Control as="input" type="text" name="text" placeholder="text" />
        <Form.Control
          as="input"
          type="email"
          name="email"
          placeholder="email"
        />
        <Form.Control
          as="input"
          type="password"
          name="password"
          placeholder="password"
        />
        <Form.Control as="input" type="hidden" name="hidden" />
        <Form.Control as="textarea" name="textarea" placeholder="textarea" />
      </Form.Group>
      <FormCheck name="check-group" label="Checks" options={checkOptions} />
      <FormRadio name="radio-group" label="Radios" options={radioOptions} />
      <FormSelect name="select-group" label="Selects" options={selectOptions} />
      <FormSelect name="select-group" label="Selects-multiple" multiple options={selectOptions} />
    </Container>
  );
}
