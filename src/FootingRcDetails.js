import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const FootingRCDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Footing RC Details</h2>
        <p>We provide detailed RC reinforcement layouts for footings to ensure proper load transfer to the foundation and structural stability.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Footing Layout" />
            <h3>Footing Layout</h3>
            <p>Precise detailing of footing dimensions and reinforcement positions.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Cutting & Bending" />
            <h3>Cutting & Bending</h3>
            <p>Schedules for steel bars cut and bent to match footing design.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Rebar Placement" />
            <h3>Rebar Placement</h3>
            <p>Ensures proper spacing and alignment of steel for foundation strength.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Safety Compliance" />
            <h3>Safety Compliance</h3>
            <p>All footings follow structural codes and foundation safety standards.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Footing RC Details</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Foundation Safety</h3>
            <p>Ensures footings support the structure properly without settlement.</p>
          </div>
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Precise detailing reduces construction errors and rework.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Optimized steel usage reduces wastage and material cost.</p>
          </div>
          <div className="benefit-card">
            <h3>Ease of Execution</h3>
            <p>Clear reinforcement schedules make installation easier for workers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FootingRCDetails;
