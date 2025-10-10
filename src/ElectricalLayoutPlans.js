import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const ElectricalLayout = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Electrical Layout Plans</h2>
        <p>We design precise electrical layout plans to ensure safety, efficiency, and convenience in power distribution.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Lighting Layouts" /><h3>Lighting Layouts</h3><p>Proper placement of indoor and outdoor lighting systems.</p></div>
          <div className="card"><img src={CP} alt="Socket Placement" /><h3>Socket Placement</h3><p>Strategically located outlets for easy usage.</p></div>
          <div className="card"><img src={CP} alt="Power Backup" /><h3>Power Backup</h3><p>Integration of UPS and generator backup systems.</p></div>
          <div className="card"><img src={CP} alt="Wiring Layout" /><h3>Wiring Layout</h3><p>Safe and efficient wiring designs for long-term reliability.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Electrical Layout Plans</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Safety</h3><p>Reduces risks of fire, shocks, and accidents.</p></div>
          <div className="benefit-card"><h3>Convenience</h3><p>Offers accessible power points and easy usability.</p></div>
          <div className="benefit-card"><h3>Efficiency</h3><p>Optimized circuits reduce energy loss.</p></div>
          <div className="benefit-card"><h3>Future Ready</h3><p>Supports integration of smart home technology.</p></div>
          <div className="benefit-card"><h3>Compliance</h3><p>Adheres to electrical safety codes and standards.</p></div>
          <div className="benefit-card"><h3>Value Addition</h3><p>Boosts resale and rental value of properties.</p></div>
          <div className="benefit-card"><h3>Durability</h3><p>Long-lasting and low-maintenance systems.</p></div>
          <div className="benefit-card"><h3>Transparency</h3><p>Clear layouts help during renovations and repairs.</p></div>
          <div className="benefit-card"><h3>Time Saving</h3><p>Reduces delays during installation and construction.</p></div>
          <div className="benefit-card"><h3>Comfort</h3><p>Ensures a seamless living and working experience.</p></div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalLayout;
