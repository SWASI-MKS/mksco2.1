import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const StaircaseRCDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Staircase RC Details</h2>
        <p>We provide accurate RC reinforcement detailing for staircases, ensuring safety, proper headroom, and strength for vertical load transfer.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Treads & Risers" />
            <h3>Treads & Risers</h3>
            <p>Precise detailing for treads and risers for uniformity and strength.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Landing Slabs" />
            <h3>Landing Slabs</h3>
            <p>Reinforcement schedules for landings to support concentrated loads.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Cutting & Bending" />
            <h3>Cutting & Bending</h3>
            <p>Steel bars cut and bent as per staircase design to avoid errors.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Safety Compliance" />
            <h3>Safety Compliance</h3>
            <p>All stair reinforcement follows codes for safety and structural integrity.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Staircase RC Details</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Safety</h3>
            <p>Proper reinforcement ensures safe vertical load support.</p>
          </div>
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Detailed schedules reduce construction errors.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Minimizes material wastage while maintaining safety.</p>
          </div>
          <div className="benefit-card">
            <h3>Ease of Execution</h3>
            <p>Clear layouts make placement of steel bars easier for contractors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaircaseRCDetails;
