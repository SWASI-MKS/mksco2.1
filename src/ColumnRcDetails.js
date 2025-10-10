import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const ColumnRCDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Column RC Details</h2>
        <p>We provide detailed RC reinforcement schedules for columns, ensuring proper load transfer, strength, and durability.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Column Layout" />
            <h3>Column Layout</h3>
            <p>Accurate detailing of column dimensions and placement of rebars.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Cutting & Bending" />
            <h3>Cutting & Bending</h3>
            <p>Schedules for steel cutting and bending according to design specifications.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Rebar Placement" />
            <h3>Rebar Placement</h3>
            <p>Ensures proper spacing and alignment of steel bars for column strength.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Safety Compliance" />
            <h3>Safety Compliance</h3>
            <p>All column reinforcements adhere to structural codes and safety standards.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Column RC Details</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Structural Safety</h3>
            <p>Ensures columns can bear vertical loads effectively.</p>
          </div>
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Precise detailing reduces construction errors.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Minimizes steel wastage and overall material cost.</p>
          </div>
          <div className="benefit-card">
            <h3>Ease of Execution</h3>
            <p>Clear layouts help contractors place rebars efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnRCDetails;
