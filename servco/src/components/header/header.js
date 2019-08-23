import React from "react";
import { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  headerCont: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

class Header extends Component {
  render() {
    return (
      <div id="headerCont">
        <a className="active" href="#home">
          Servco
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
