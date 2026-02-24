import React, { Component } from "react";
import "../styles/stats.css";

class Stats extends Component {
  render() {
    return (
      <>
        <p className="sp">Trusted by 1000+ intelligent homebuyers</p>
        <section className="stats container">
          <div className="stat">
            2750+<span>Hours of Advice</span>
          </div>
          <div className="stat">
            520M+<span>Sq. Feet Analyzed</span>
          </div>
          <div className="stat">
            210+<span>Partner Builders</span>
          </div>
          <div className="stat">
            500+<span>Projects Across Bangalore</span>
          </div>
        </section>
      </>
    );
  }
}

export default Stats;
