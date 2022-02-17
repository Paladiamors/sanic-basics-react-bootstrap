import React from "react";
import Header from "../../components/Header/HeaderExample";
import Container from "react-bootstrap/Container";

export default function NestedHeader() {
  return (
    <Container>
      <h2>Testing nested header</h2>
      <p>Need to have some code to make the second level pop to the right.</p>
      <p>Otherwise the list just gets really long and hard to understand</p>
      <Header />
    </Container>
  );
}
