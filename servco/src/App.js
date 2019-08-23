import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//react router imports
import { Route, Switch } from "react-router-dom";

//components
import Header from "./components/header/header";
import Form from "./components/form/form";
import Result from "./components/result/result";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/form" component={Form} />
            <Route path="/result" component={Result} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

{
  /* <header className="App-header">
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
</header> */
}
