import React from "react";
import { Component } from "react";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousState: ""
    };
  }

  render() {
    return (
      <div id="resultCont">
        <h1>YOU ARE A WINNNER</h1>
      </div>
    );
  }
}

export default Result;
