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
import AppRouters from "./routers";

function App() {
  var disPlayLogo = false;
  return (
    <div className="App">
      {/* <HeaderComponent /> */}
      <AppRouters />
      {/* <MaterialTableComponent /> */}
      {/* <MaterialTableComponent2_customizeTable /> */}
      {/* <MaterialTableComponent3_cellComponent /> */}
      {/* <MaterialTableComponent4_rowComponent /> */}
      {/* <MaterialTableComponent5_contentComponent />*/}
      {/* <MaterialTableComponent6_controlledComponent /> */}
      {/* <MaterialTableComponent7_partiallyControlledComponent /> */}
      {/* <MaterialTableComponent8_editColumnStateComponent /> */}
      {/* {disPlayLogo && <DisplayLogoFn />} */}
    </div>
  );
}

// const HeaderComponent = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/t1">t1</Link>
//           </li>
//           <li>
//             <Link to="/t2">t2</Link>
//           </li>
//           <li>
//             <Link to="/t3">t3</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

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
