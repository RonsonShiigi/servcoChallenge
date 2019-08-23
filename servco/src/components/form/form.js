import React from "react";
import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      imageUrl: "",
      letterCount: 0,
      twoWords: false
    };
  }

  componentDidMount() {
    this.setState({
      letterCount: 9,
      selected: "Chevrolet"
    });
  }
  handleInputChange = e => {
    e.preventDefault();
    //checking for two words
    let input = e.target.value;
    var regexp = /[a-zA-Z]+\s+[a-zA-Z]+/g;
    if (regexp.test(input)) {
      // at least 2 words consisting of letters
      this.setState({ twoWords: true });
    } else {
      this.setState({ twoWords: false });
    }
  };

  handleSelectChange = e => {
    e.preventDefault();
    this.setState({
      letterCount: 0,
      selected: e.target.value
    });

    let value = e.target.value;
    this.setState({ letterCount: value.length });
    console.log(e.target.value);
  };

  submitForm = e => {
    e.preventDefault();
    console.log("submitted state", this.state);
  };

  render() {
    function validate(input) {
      let checkMe = input.value;
      let split = input.split(" ").filter(function(v) {
        return v !== "";
      });
      if (split.legnth > 1) {
        this.setState({ twoWords: true });
      } else {
        this.setState({ twoWords: false });
      }
    }
    function EnterTwoWords(props) {
      return <div className="errorDiv">Input Must Have Atleast Two Words</div>;
    }

    function InputValid(props) {
      const isValid = props.twoWords;
      if (!isValid) {
        return <EnterTwoWords />;
      } else {
        return null;
      }
    }

    return (
      <div id="formCont">
        <h1 className="selectHeader">Select Your Vehicle</h1>
        <form id="form" onSubmit={this.submitForm}>
          <select id="selecter" onChange={this.handleSelectChange}>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Lexus">Lexus</option>
            <option value="Subaru">Subaru</option>
            <option value="Toyota">Toyota</option>
          </select>

          <input
            id="textInput"
            placeholder="Enter Model and Color"
            onChange={this.handleInputChange}
          />
          <EnterTwoWords validate={this.state.twoWords} />

          <button id="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
