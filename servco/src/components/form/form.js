import React from "react";
import { Component } from "react";

import Result from "../result/result";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      input: "",
      noSpacesCount: "",
      wordCounter: 0,
      imageUrl:
        "https://thumbs.gfycat.com/ConventionalCreamyAlpaca-size_restricted.gif",
      letterCount: 0,
      twoWords: false,
      isHidden: true
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
    let input = e.target.value;
    //counting words in string
    function countWords(str) {
      return str.trim().split(/\s+/).length;
    }
    let wordCount = countWords(input);
    this.setState({
      input: input,
      wordCounter: wordCount
    });

    //checking for two words
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
    switch (value) {
      case "Toyota":
        this.setState({
          imageUrl: "https://media.giphy.com/media/FoVBIIrLYR5Je/giphy.gif"
        });
        break;
      case "Chevrolet":
        this.setState({
          imageUrl:
            "https://thumbs.gfycat.com/ConventionalCreamyAlpaca-size_restricted.gif"
        });
        break;
      case "Lexus":
        this.setState({
          imageUrl:
            "https://media2.giphy.com/media/dYPP10IYewLr9CP1q5/source.gif"
        });
        break;
      case "Subaru":
        this.setState({
          imageUrl: "https://i.makeagif.com/media/8-02-2015/w0NIAs.gif"
        });
        break;
    }

    this.setState({ letterCount: value.length + this.state.noSpacesCount });
    console.log(e.target.value);
  };

  submitForm = e => {
    e.preventDefault();
    if (this.state.twoWords === false) {
      alert("Please Enter Model and Color");
    } else {
      console.log("submitted state", this.state);
      this.setState({ isHidden: false });
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
        <img id="logo" src={this.state.imageUrl} />
        <form id="form" onSubmit={this.submitForm}>
          <select id="selecter" onChange={this.handleSelectChange}>
            <option className="select" value="Chevrolet">
              Chevrolet
            </option>
            <option className="select" value="Lexus">
              Lexus
            </option>
            <option className="select" value="Subaru">
              Subaru
            </option>
            <option className="select" value="Toyota">
              Toyota
            </option>
          </select>

          <input
            id="textInput"
            placeholder="Enter Model and Color"
            onChange={this.handleInputChange}
          />
          <InputValid InputValid={this.state.twoWords} />

          <button id="submit">Submit</button>
        </form>

        {!this.state.isHidden && (
          <Result
            selected={this.state.selected}
            wordCount={this.state.wordCounter}
            letterCount={this.state.letterCount}
          />
        )}
      </div>
    );
  }
}

export default Form;
