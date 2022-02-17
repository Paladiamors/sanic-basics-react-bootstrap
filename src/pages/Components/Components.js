import React from "react";
import Container from "react-bootstrap/Container";
import AlertSection from "./Sections/Alerts";
import ButtonSection from "./Sections/Buttons";
import TableSection from "./Sections/Tables";

export default function Components() {
  return (
    <div>
      <Container>
        <AlertSection />
        <ButtonSection />
        <TableSection />
      </Container>
    </div>
  );
}
