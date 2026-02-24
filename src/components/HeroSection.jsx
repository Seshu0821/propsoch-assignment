import React, { Component } from "react";
import Hero from "./Hero";
import Stats from "./Stats";

class HeroSection extends Component {
  render() {
    return (
      <>
        <Hero />
        <Stats />
      </>
    );
  }
}

export default HeroSection;
