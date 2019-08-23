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
        <h1>Results</h1>
        <div id="make">You Selected a {this.props.selected}</div>
        <div className="count">
          Number of Words Inputed: {this.props.wordCount}
        </div>
        <div className="count">
          Number of Non-Whitespace Letters: {this.props.letterCount}
        </div>
        <div id="model" />
      </div>
    );
  }
}

export default Result;
