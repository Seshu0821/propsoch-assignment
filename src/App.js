import React, { Component } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ResourcesSection from "./components/ResourcesSection";
import Difference from "./components/Difference";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <HeroSection />
        <ResourcesSection />
        <Difference />
      </>
    );
  }
}

export default App;
