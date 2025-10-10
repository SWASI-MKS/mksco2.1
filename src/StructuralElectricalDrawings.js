import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const StructuralElectrical = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Structural and Electrical Drawings</h2>
        <p>We provide integrated structural and electrical drawings to ensure functionality, safety, and efficient execution of projects.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Column & Beam Layouts" /><h3>Column & Beam Layouts</h3><p>Detailed positioning of load-bearing elements.</p></div>
          <div className="card"><img src={CP} alt="Electrical Circuit Plans" /><h3>Electrical Circuit Plans</h3><p>Systematic wiring layouts for safe electricity flow.</p></div>
          <div className="card"><img src={CP} alt="Power Distribution Plans" /><h3>Power Distribution Plans</h3><p>Efficient placement of distribution boards and mains.</p></div>
          <div className="card"><img src={CP} alt="Structural-Electrical Coordination" /><h3>Structural-Electrical Coordination</h3><p>Eliminates clashes between structural and electrical works.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Structural & Electrical Drawings</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Accuracy</h3><p>Ensures flawless integration of structural and electrical systems.</p></div>
          <div className="benefit-card"><h3>Safety</h3><p>Prevents hazards like short circuits or weak structures.</p></div>
          <div className="benefit-card"><h3>Efficiency</h3><p>Optimized layouts save time and resources.</p></div>
          <div className="benefit-card"><h3>Compliance</h3><p>Meets IS standards and local electrical codes.</p></div>
          <div className="benefit-card"><h3>Future Proof</h3><p>Allows easy upgrades or expansions later.</p></div>
          <div className="benefit-card"><h3>Cost Saving</h3><p>Reduces rework and unnecessary material expenses.</p></div>
          <div className="benefit-card"><h3>Clarity</h3><p>Provides clear guidance for engineers and contractors.</p></div>
          <div className="benefit-card"><h3>Durability</h3><p>Improves structural lifespan and electrical reliability.</p></div>
          <div className="benefit-card"><h3>Transparency</h3><p>Facilitates better client and stakeholder understanding.</p></div>
          <div className="benefit-card"><h3>Productivity</h3><p>Speeds up construction and reduces delays.</p></div>
        </div>
      </div>
    </section>
  );
};

export default StructuralElectrical;
