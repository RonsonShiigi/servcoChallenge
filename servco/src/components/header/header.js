import React from "react";
import { Component } from "react";

// import { withStyles } from "@material-ui/core/styles";

class Header extends Component {
  render() {
    return (
      <div id="headerCont">
        <a className="servco" href="#home">
          Servco
        </a>
        <a className="topLink" href="#news">
          News
        </a>
        <a className="topLink" href="#contact">
          Contact
        </a>
        <a className="topLink" href="#about">
          About
        </a>
      </div>
    );
  }
}

export default Header;

// const styles = theme => ({
//   headerCont: {
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap"
//   }
// });
