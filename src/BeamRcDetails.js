import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const BeamRCDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Beam Reinforcement Details</h2>
        <p>We provide detailed Reinforced Concrete (RC) beam reinforcement schedules for accurate steel placement and structural safety.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Beam Layout" />
            <h3>Beam Layout</h3>
            <p>Accurate detailing of beam dimensions and placement of rebars according to design.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Cutting & Bending" />
            <h3>Cutting & Bending</h3>
            <p>Precise cutting and bending schedules for steel bars to minimize wastage.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Rebar Placement" />
            <h3>Rebar Placement</h3>
            <p>Ensures proper positioning and spacing of steel reinforcement for maximum strength.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Safety Compliance" />
            <h3>Safety Compliance</h3>
            <p>All beam reinforcement details follow structural codes and safety standards.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Beam RC Details</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Structural Strength</h3>
            <p>Ensures beams are strong and durable under load.</p>
          </div>
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Precise reinforcement schedules reduce construction errors.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Minimizes steel wastage and overall material cost.</p>
          </div>
          <div className="benefit-card">
            <h3>Ease of Execution</h3>
            <p>Clear schedules help contractors and workers follow designs efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeamRCDetails;
