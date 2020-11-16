import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import TodoListComponent from "./components/todo-list-component/TodoListComponent";
import TextBoxComponent from "./components/textBox-component";
import TextBoxWithReduxComponent from "./components/textBoxWithRedux-component";

function App() {
  return (
    <div className="App">

      <Router>
        <div>

          <ul>
            <li className="appHeader">
              <Link to="/todolist">To Do List</Link>
            </li>
            <li>
              <Link to="/textbox">Text Box</Link>
            </li>
            <li>
              <Link to="/textboxWithRedux">Text Box (Redux)</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/todolist">
              <TodoListComponent />
            </Route>
            <Route path="/textbox">
              <TextBoxComponent />
            </Route>
            <Route path="/textboxWithRedux">
              <TextBoxWithReduxComponent />
            </Route>
          </Switch>
        </div>
      </Router>

      <br></br>
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
    </div>
  );
}

export default App;
