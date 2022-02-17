import React from "react";
import Form from "react-bootstrap/Form";
import TinyMce from "./Tinymce";

export function FormInput(props) {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        as="input"
        key={props.defaultValue}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder ? props.placeholder : props.name}
        required={props.required}
        value={props.value}
        defaultValue={props.defaultValue}
      />
    </Form.Group>
  );
}

export function FormEmail(props) {
  return <FormInput {...props} type="email" />;
}

export function FormHidden(props) {
  return (
    <Form.Input
      type="hidden"
      name={props.name}
      id={props.name}
      placeholder={props.placeholder ? props.placeholder : props.name}
      required={props.required}
      value={props.value}
      defaultValue={props.defaultValue}
    />
  );
}

export function FormPassword(props) {
  return <FormInput {...props} type="password" />;
}

export function FormText(props) {
  return <FormInput {...props} type="text" />;
}

export function FormTextArea(props) {
  return <FormInput {...props} type="textarea" />;
}

export function FormDate(props) {
  return (
    <FormInput
      {...props}
      type="date"
      defaultValue={new Date().toISOString().slice(0, 10)}
    />
  );
}

export function FormSelectBase(props) {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Select aria-label={props.name} name={props.name} multiple={props.multiple}>
        {props.options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export function FormSelect(props) {
  return <FormSelectBase {...props} type="select" />;
}

export function FormSelectMulti(props) {
  return <FormSelectBase {...props} type="select" multiple />;
}

export function FormCheckBase(props) {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      {props.options.map((opt) => (
        <Form.Check
          type={props.type}
          key={["value", props.name, opt.value].join("_")}
          id={opt.value}
          name={props.name}
          label={opt.label}
        />
      ))}
    </Form.Group>
  );
}

export function FormRadio(props) {
  return <FormCheckBase {...props} type="radio" />;
}

export function FormCheck(props) {
  return <FormCheckBase {...props} type="checkbox" />;
}

export function FormTinyMce(props) {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <TinyMce
        id={props.name}
        textareaName={props.name}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
    </Form.Group>
  );
}

export function onSubmit(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  console.log(formData);
  console.log(e.target);
  console.log(e.target.name.value);
  console.log(e.target.mceComment.value);
  console.log(e.target.mceComment2.value);

  // for (var key in formData.keys()) {
  //   console.log(key);
  // }
  // for (var value in formData.values()) {
  //   console.log(value);
  // }
}
