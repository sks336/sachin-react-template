import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  MaterialTableComponent,
  MaterialTableComponent2_customizeTable,
  MaterialTableComponent3_cellComponent,
  MaterialTableComponent4_rowComponent,
  MaterialTableComponent5_contentComponent,
  MaterialTableComponent6_controlledComponent,
  MaterialTableComponent7_partiallyControlledComponent,
  MaterialTableComponent8_editColumnStateComponent,
} from "./components/material-table-component";

function App() {
  var disPlayLogo = false;
  return (
    <div className="App">
      {/* <MaterialTableComponent /> */}
      {/* <MaterialTableComponent2_customizeTable /> */}
      {/* <MaterialTableComponent3_cellComponent /> */}
      {/* <MaterialTableComponent4_rowComponent /> */}
      {/* <MaterialTableComponent5_contentComponent />*/}
      {/* <MaterialTableComponent6_controlledComponent /> */}
      {/* <MaterialTableComponent7_partiallyControlledComponent /> */}
      <MaterialTableComponent8_editColumnStateComponent />
      {disPlayLogo && <DisplayLogoFn />}
    </div>
  );
}

const DisplayLogoFn = () => {
  return (
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
    </header>
  );
};

export default App;
