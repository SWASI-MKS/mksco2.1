import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const BeamLayout = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Beam Layout</h2>
        <p>We provide detailed RC beam layouts for accurate reinforcement placement, structural stability, and load distribution.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Beam Dimensions" />
            <h3>Beam Dimensions</h3>
            <p>Accurate detailing of beam dimensions as per design specifications.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Rebar Placement" />
            <h3>Rebar Placement</h3>
            <p>Precise positioning and spacing of steel reinforcement for beams.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Cutting & Bending" />
            <h3>Cutting & Bending</h3>
            <p>Steel bars cut and bent according to design to avoid wastage.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Safety Compliance" />
            <h3>Safety Compliance</h3>
            <p>All beams are reinforced following structural codes and safety standards.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Beam Layout</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Structural Strength</h3>
            <p>Ensures beams are strong, durable, and able to support loads effectively.</p>
          </div>
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Reduces errors during beam reinforcement installation.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Optimized steel usage minimizes material wastage.</p>
          </div>
          <div className="benefit-card">
            <h3>Ease of Execution</h3>
            <p>Clear layouts help contractors follow the design efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeamLayout;
