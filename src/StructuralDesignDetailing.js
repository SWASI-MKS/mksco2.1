import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const StructuralDesignDetailing = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Structural Design and Detailing</h2>
        <p>We provide strong and reliable structural designs that ensure safety and durability.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Load Calculations" /><h3>Load Calculations</h3><p>Accurate analysis of dead loads, live loads, and wind loads.</p></div>
          <div className="card"><img src={CP} alt="Beam & Column Design" /><h3>Beam & Column Design</h3><p>Optimized structural layouts for stability.</p></div>
          <div className="card"><img src={CP} alt="Reinforcement Details" /><h3>Reinforcement Details</h3><p>Clear steel reinforcement drawings for execution.</p></div>
          <div className="card"><img src={CP} alt="Foundation Design" /><h3>Foundation Design</h3><p>Safe and efficient foundation plans for all soil types.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Structural Design & Detailing</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Safety</h3><p>Ensures buildings can withstand external loads.</p></div>
          <div className="benefit-card"><h3>Durability</h3><p>Provides long-lasting structural stability.</p></div>
          <div className="benefit-card"><h3>Cost Efficiency</h3><p>Reduces material usage without compromising safety.</p></div>
          <div className="benefit-card"><h3>Accuracy</h3><p>Detailed drawings minimize construction errors.</p></div>
          <div className="benefit-card"><h3>Compliance</h3><p>Follows IS codes and international standards.</p></div>
          <div className="benefit-card"><h3>Time Saving</h3><p>Speeds up construction with clear details.</p></div>
          <div className="benefit-card"><h3>Client Confidence</h3><p>Assures strength and safety of the structure.</p></div>
          <div className="benefit-card"><h3>Risk Reduction</h3><p>Minimizes chances of structural failures.</p></div>
          <div className="benefit-card"><h3>Flexibility</h3><p>Allows safe modifications and expansions.</p></div>
          <div className="benefit-card"><h3>Enhanced Value</h3><p>Strong structures increase long-term property worth.</p></div>
        </div>
      </div>
    </section>
  );
};

export default StructuralDesignDetailing;
