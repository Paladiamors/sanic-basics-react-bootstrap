import React from "react";
import PropTypes from "prop-types";
import {
  FormEmail,
  FormText,
  FormHidden,
  FormPassword,
  FormTextArea,
  FormDate,
  FormSelect,
  FormSelectMulti,
  FormRadio,
  FormCheck,
  FormTinyMce,
} from "./FormElements";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const formElements = {
  FormEmail,
  FormText,
  FormHidden,
  FormPassword,
  FormTextArea,
  FormDate,
  FormSelect,
  FormSelectMulti,
  FormRadio,
  FormCheck,
  FormTinyMce,
};

export default function DynamicForm(props) {
  const handler = props.onSubmit ? props.onSubmit : (data) => {};
  const updateFormHook = props.updateFormHook
    ? props.updateFormHook
    : (form) => {};
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    updateFormHook(formData);

    fetch(props.url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => handler(data));
  };
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      {props.fields.map((field, index) => {
        const Tag = formElements[field.type];
        const key = parseInt(index) + `_${field.name}`;
        return <Tag {...field} key={key} />;
      })}
      <Button className="mt-2" type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
}

DynamicForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
};
