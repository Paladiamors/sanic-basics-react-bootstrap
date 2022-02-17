import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="col-4">
          <h5>Company</h5>
          <ul>
            <li>Home</li>
            <li>Company</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </Col>
        <Col className="col-4">
          <h5>Help and Support</h5>
          <ul>
            <li>Contact Us</li>
            <li>How it works</li>
            <li>Terms & Conditions</li>
            <li>Company Policy</li>
            <li>Money Back</li>
          </ul>
        </Col>
        <Col className="col-4">
          <h5>Services</h5>
          <ul>
            <li>Design</li>
            <li>Engineering</li>
            <li>Consulting</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
