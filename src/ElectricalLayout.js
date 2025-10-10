import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const ElectricalLayout = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Electrical Layout</h2>
        <p>We provide comprehensive electrical layouts for residential and commercial projects, ensuring efficiency, safety, and compliance with standards.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Wiring" />
            <h3>Wiring</h3>
            <p>Well-planned wiring layout for safe and efficient power distribution.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Switches & Sockets" />
            <h3>Switches & Sockets</h3>
            <p>Strategic placement to maximize convenience and accessibility.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Lighting" />
            <h3>Lighting</h3>
            <p>Optimized lighting layout for comfort, energy efficiency, and aesthetics.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Safety Systems" />
            <h3>Safety Systems</h3>
            <p>Includes protective devices and compliance with electrical safety standards.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Electrical Layout</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Safety</h3>
            <p>Reduces risk of electrical hazards and accidents.</p>
          </div>
          <div className="benefit-card">
            <h3>Efficiency</h3>
            <p>Optimizes electrical load distribution and energy usage.</p>
          </div>
          <div className="benefit-card">
            <h3>Convenience</h3>
            <p>Well-planned placement of switches, sockets, and lighting.</p>
          </div>
          <div className="benefit-card">
            <h3>Compliance</h3>
            <p>Adheres to electrical codes and safety regulations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalLayout;
