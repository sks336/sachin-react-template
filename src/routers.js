import React from "react";
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

export default function AppRouters() {
  return (
    <Router>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/t1">t1</Link>
          </li>
          <li>
            <Link to="/t2">t2</Link>
          </li>
          <li>
            <Link to="/t3">t3</Link>
          </li>
          <li>
            <Link to="/t4">t4</Link>
          </li>
          <li>
            <Link to="/t5">t5</Link>
          </li>
          <li>
            <Link to="/t6">t6</Link>
          </li>
          <li>
            <Link to="/t7">t7</Link>
          </li>
          <li>
            <Link to="/t8">t8</Link>
          </li>
        </ul>
      </nav>
    </div>
      <Route path="/t1" component={MaterialTableComponent} />
      <Route path="/t2" component={MaterialTableComponent2_customizeTable} />
      <Route path="/t3" component={MaterialTableComponent3_cellComponent} />
      <Route path="/t4" component={MaterialTableComponent4_rowComponent} />
      <Route path="/t5" component={MaterialTableComponent5_contentComponent} />
      <Route path="/t6" component={MaterialTableComponent6_controlledComponent} />
      <Route path="/t7" component={MaterialTableComponent7_partiallyControlledComponent} />
      <Route path="/t8" component={MaterialTableComponent8_editColumnStateComponent} />
    </Router>
  );
}

function Tbl8() {
  return MaterialTableComponent8_editColumnStateComponent;
}

function Tbl2() {
  return MaterialTableComponent2_customizeTable;
}

function Users() {
  return <h2>Users</h2>;
}
