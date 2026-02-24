import React, { Component } from "react";
import "../styles/resources.css";

class Resources extends Component {
  renderCard(img, title, desc) {
    return (
      <div className="resource-card">
        <img src={img} alt="" />
        <span className="blog">Blog</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  }

  render() {
    return (
      <section className="resources-section">
        <div className="container">
          
          <p className="small-tag">
            Join an exclusive club of empowered homebuyers
          </p>

          <h2 className="resources-title">
            Empower yourself with our guides,
            <br />
            hacks & resources
          </h2>

        
          <div className="resources-grid">
            {this.renderCard(
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              "2025 Bangalore Real Estate",
              "Explore micro-markets, price trends & upcoming hotspots."
            )}

            {this.renderCard(
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
              "Home Buying Checklist",
              "Navigate the home buying journey with confidence."
            )}

            {this.renderCard(
              "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
              "Home Buying Guide 101",
              "Track documents, inspections & key milestones."
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Resources;

