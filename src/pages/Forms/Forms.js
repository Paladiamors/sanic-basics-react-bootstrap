import React from "react";
import FormComponents from "./Sections/FormComponents";
import FormSubmit from "./Sections/FormSubmit";

export default function Forms() {
  return (
    <div>
      <h2>Form Submit</h2>
      <FormSubmit />
      <h2>Form Components</h2>
      <FormComponents />
    </div>
  );
}
