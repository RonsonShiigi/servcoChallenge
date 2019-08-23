import React from "react";
import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      input: "",
      noSpacesCount: "",
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

    let noSpaces = input.replace(/\s/g, "");
    this.setState({
      noSpacesCount: noSpaces.length,
      letterCount: this.state.selected.length + noSpaces.length
    });
  };

  handleSelectChange = e => {
    e.preventDefault();
    this.setState({
      letterCount: 0,
      selected: e.target.value
    });

    let value = e.target.value;
    this.setState({ letterCount: value.length + this.state.noSpacesCount });
    console.log(e.target.value);
  };

  submitForm = e => {
    e.preventDefault();
    if (this.state.twoWords === false) {
      alert("please put in model and color");
    } else {
      console.log("submitted state", this.state);
    }
  };

  render() {
    function EnterTwoWords(props) {
      return <div className="errorDiv">Input Must Have Atleast Two Words</div>;
    }

    function InputValid(props) {
      //receiving props and checking from state to see if there are two words...direct call to state doesnt work?
      const isValid = props.InputValid;
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
          <InputValid InputValid={this.state.twoWords} />

          <button id="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

// function validate(input) {
//     let checkMe = input.value;
//     let split = input.split(" ").filter(function (v) {
//         return v !== "";
//     });
//     if (split.legnth > 1) {
//         this.setState({ twoWords: true });
//     } else {
//         this.setState({ twoWords: false });
//     }
// }
