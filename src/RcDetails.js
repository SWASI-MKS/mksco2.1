import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const RCDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Reinforced Concrete (RC) Details</h2>
        <p>We provide comprehensive RC detailing for columns, slabs, beams, and staircases to ensure structural safety, strength, and durability.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Columns" />
            <h3>Columns</h3>
            <p>Accurate RC detailing for columns to support structural loads effectively.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Slabs" />
            <h3>Slabs</h3>
            <p>Optimized reinforcement layout for slabs to minimize deflection and cracking.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Beams" />
            <h3>Beams</h3>
            <p>Precise reinforcement schedules for beams to maintain structural integrity.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Staircases" />
            <h3>Staircases</h3>
            <p>RC detailing for stairs to ensure proper headroom and safe load transfer.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of RC Details</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Precise steel placement reduces errors and ensures durability.</p>
          </div>
          <div className="benefit-card">
            <h3>Safety</h3>
            <p>Follows structural codes to ensure strong and safe construction.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Minimizes steel wastage and reduces construction costs.</p>
          </div>
          <div className="benefit-card">
            <h3>Time Saving</h3>
            <p>Clear schedules and layouts make execution faster and easier.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RCDetails;
