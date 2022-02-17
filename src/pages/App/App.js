import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            Back to <Link to="/">home</Link>
          </p>
        </header>
      </div>
    </Container>
  );
}

export default App;
