import React, { Component } from "react";
import "../styles/hero.css";

class Hero extends Component {
  constructor() {
    super();
    this.state = { city: "Mumbai" };
  }

  changeCity(city) {
    this.setState({ city });
  }

  render() {
    return (
      <section className="hero container">
        <div className="hero-grid">
          <div class="card-hero">
            <p className="tag">Stop wasting weekends on site visits</p>

            <h1>Visit curated homes, negotiate smarter & buy intelligently.</h1>

            <p>Get end-to-end guidance from property experts.</p>

            <div className="city-toggle">
              <button
                className={this.state.city === "Bangalore" ? "active ww" : "ww"}
                onClick={() => this.changeCity("Bangalore")}
              >
                Bangalore
              </button>

              <button
                className={this.state.city === "Mumbai" ? "active ww" : "ww"}
                onClick={() => this.changeCity("Mumbai")}
              >
                Mumbai
              </button>
            </div>

            <button className="cta">Book Appointment</button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            alt="home"
          />
        </div>
      </section>
    );
  }
}

export default Hero;
