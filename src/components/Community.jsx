import React, { Component } from "react";
import "../styles/community.css";
import { FaWhatsapp } from "react-icons/fa6";

class Community extends Component {
  render() {
    return (
      <section className="community-section">
        <div className="community-box container">
          <span className="community-tag">Community</span>

          <h2>Hometrust Collective</h2>

          <p className="community-desc">
            An exclusive community of buyers, owners & experts who help each
            other stay updated about the market
          </p>

          <div className="community-buttons">
            <button className="btn-dark whatsapp-btn nn">
              <FaWhatsapp />
              Join Bangalore
            </button>

            <button className="btn-outline whatsapp-btn-outline nn">
              <FaWhatsapp />
              Join Mumbai
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Community;
