import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const RoofSlabBeamLayout = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Roof Slab & Beam Layout</h2>
        <p>We provide detailed RC layouts for roof slabs and beams, ensuring proper load distribution, reinforcement placement, and structural safety.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Roof Slab Layout" />
            <h3>Roof Slab Layout</h3>
            <p>Precise detailing of roof slab dimensions and reinforcement positions for maximum strength.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Beam Layout" />
            <h3>Beam Layout</h3>
            <p>Accurate RC detailing of beams for proper support and load transfer to columns.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Cutting & Bending" />
            <h3>Cutting & Bending</h3>
            <p>Schedules for steel cutting and bending to match design specifications for slabs and beams.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Safety Compliance" />
            <h3>Safety Compliance</h3>
            <p>Ensures roof slabs and beams adhere to structural codes and safety standards.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Roof Slab & Beam Layout</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Structural Integrity</h3>
            <p>Ensures roof slabs and beams are strong and durable under load.</p>
          </div>
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Detailed layouts reduce construction errors and misplacement of rebars.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Optimized steel usage minimizes material wastage and reduces costs.</p>
          </div>
          <div className="benefit-card">
            <h3>Ease of Execution</h3>
            <p>Clear schedules make it easier for contractors and workers to follow.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofSlabBeamLayout;
