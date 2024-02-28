import React, { Component } from "react";
import Hero from "./Hero";
//import FullScreenVideo from "./FullScreenVideo";

class Header extends Component {

  render() {
    return (
      <header id="home">
        <Hero />
      </header>
    );
  }
}

export default Header;
