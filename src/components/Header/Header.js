import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { setLogout, selectUserInfo } from "../AuthenticatedJwt/authJwtSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

// Functions to dynamically render the menu

function RenderNavLink(info) {
  return (
    <Nav.Link key={info["name"]} as={Link} to={info["link"]}>
      {info["name"]}
    </Nav.Link>
  );
}

function RenderDropdown(dropdown) {
  return (
    <NavDropdown key={dropdown["dropdown"]} title={dropdown["dropdown"]}>
      {dropdown["items"].map((item) => RenderDropdownItem(item))}
    </NavDropdown>
  );
}

function RenderDropdownItem(item) {
  if (!item["separator"]) {
    return (
      <NavDropdown.Item key={item["name"]} as={Link} to={item["link"]}>
        {item["name"]}
      </NavDropdown.Item>
    );
  } else {
    return <NavDropdown.Divider key={item["name"]} />;
  }
}

function RenderNavContent(props) {
  const { nav } = props;
  return nav.map((info) => {
    if (info["name"]) {
      return RenderNavLink(info);
    } else {
      return RenderDropdown(info);
    }
  });
}

// Login Related

function Login() {
  return (
    <Nav>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
      <Nav.Item>
        <Button as={Link} to="/signup" variant="info">
          Sign Up
        </Button>
      </Nav.Item>
    </Nav>
  );
}

function LoggedIn(props) {
  const username = props.username;
  const dispatch = useDispatch();
  const logout = () => {
    const url = "/api/auth/logout";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(setLogout());
        }
      });
  };
  return (
    <Nav>
      <Nav.Link>{username}</Nav.Link>
      <Nav.Item>
        <Button onClick={logout} color="info">
          Logout
        </Button>
      </Nav.Item>
    </Nav>
  );
}

export default function Header(props) {
  const { brand, nav } = props;
  const userInfo = useSelector(selectUserInfo);
  let LoginComponent = userInfo.username ? LoggedIn : Login;
  console.log("username is", userInfo.username)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {brand ? brand : "React-Bootstrap"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <RenderNavContent nav={nav} />
          </Nav>
          <Nav>
            <LoginComponent username={userInfo.username} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
