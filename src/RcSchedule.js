import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const RCSchedule = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>RC Schedule</h2>
        <p>We provide complete RC schedules for all structural elements, including beams, columns, slabs, footings, and staircases for efficient planning and execution.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Beam Schedule" />
            <h3>Beam Schedule</h3>
            <p>Complete reinforcement details for beams including cutting, bending, and placement.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Column Schedule" />
            <h3>Column Schedule</h3>
            <p>Detailed schedule for all columns ensuring proper vertical load transfer.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Slab Schedule" />
            <h3>Slab Schedule</h3>
            <p>Reinforcement schedule for slabs to maintain strength and minimize wastage.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Footing Schedule" />
            <h3>Footing Schedule</h3>
            <p>Complete detailing of foundation reinforcement for stability and safety.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of RC Schedule</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Efficiency</h3>
            <p>Helps in accurate material estimation and construction planning.</p>
          </div>
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Reduces errors during execution of structural elements.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Saving</h3>
            <p>Minimizes steel wastage and construction expenses.</p>
          </div>
          <div className="benefit-card">
            <h3>Ease of Execution</h3>
            <p>Clear schedules simplify work for contractors and site workers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RCSchedule;
