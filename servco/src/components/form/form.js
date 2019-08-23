import React from "react";
import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      imageUrl: "",
      letterCount: 0
    };
  }
  submitForm = e => {
    e.preventDefault();
    console.log("jah");
  };
  render() {
    return (
      <div id="formCont">
        <h1 className="selectHeader">Select Your Manufacturer</h1>
        <form id="form" onSubmit={this.submitForm}>
          <select id="selecter">
            <option value="Chevrolet">Chevrolet</option>
            <option value="Lexus">Lexus</option>
            <option value="Subaru">Subaru</option>
            <option value="Toyota">Toyota</option>
          </select>

          <input id="textInput" placeholder="Enter Model and Color" />
          <button id="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
