import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  MaterialTableComponent,
  MaterialTableComponent2_CustomizeTable,
  MaterialTableComponent3_HighLightedCells,
} from "./components/material-table-component";

function App() {
  var disPlayLogo = false;
  return (
    <div className="App">
      {/* <MaterialTableComponent /> */}
      {/* <MaterialTableComponent2_CustomizeTable /> */}
      <MaterialTableComponent3_HighLightedCells />
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
