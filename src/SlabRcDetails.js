import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const SlabRCDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Slab Reinforcement Details</h2>
        <p>We provide detailed RC slab reinforcement schedules for accurate steel placement, load distribution, and structural stability.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Slab Layout" />
            <h3>Slab Layout</h3>
            <p>Precise detailing of slab dimensions and reinforcement positioning.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Cutting & Bending" />
            <h3>Cutting & Bending</h3>
            <p>Schedules for steel cutting and bending to ensure correct slab reinforcement.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Rebar Placement" />
            <h3>Rebar Placement</h3>
            <p>Ensures proper spacing and alignment of steel bars for slab strength.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Safety Compliance" />
            <h3>Safety Compliance</h3>
            <p>All slab reinforcement follows structural codes and safety standards.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Slab RC Details</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Structural Stability</h3>
            <p>Ensures slabs can bear loads safely without cracks or deflection.</p>
          </div>
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Precise reinforcement layouts reduce construction errors.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Minimizes steel wastage and overall material cost.</p>
          </div>
          <div className="benefit-card">
            <h3>Ease of Execution</h3>
            <p>Clear schedules help contractors place rebars efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlabRCDetails;
