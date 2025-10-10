import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const ConceptPlanning = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Concept Planning</h2>
        <p>We provide well-structured concept plans that lay the foundation for efficient, practical, and visually appealing projects.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Feasibility Studies" /><h3>Feasibility Studies</h3><p>Analysis of site conditions, budget, and requirements to design viable concepts.</p></div>
          <div className="card"><img src={CP} alt="Preliminary Layout" /><h3>Preliminary Layout</h3><p>Basic spatial organization to meet client expectations and project goals.</p></div>
          <div className="card"><img src={CP} alt="Zoning Concepts" /><h3>Zoning Concepts</h3><p>Division of space into functional areas for efficient design.</p></div>
          <div className="card"><img src={CP} alt="Design Ideation" /><h3>Design Ideation</h3><p>Creative sketches and plans to visualize the project direction.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Concept Planning</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Clear Direction</h3><p>Provides a roadmap for all subsequent design and execution stages.</p></div>
          <div className="benefit-card"><h3>Cost Efficiency</h3><p>Reduces expenses by identifying potential issues early.</p></div>
          <div className="benefit-card"><h3>Client Satisfaction</h3><p>Ensures the design aligns with the client’s vision from the start.</p></div>
          <div className="benefit-card"><h3>Time Saving</h3><p>Simplifies decision-making during execution.</p></div>
          <div className="benefit-card"><h3>Flexibility</h3><p>Allows easy modifications before finalization.</p></div>
          <div className="benefit-card"><h3>Strong Foundation</h3><p>Acts as the base for detailed drawings and approvals.</p></div>
          <div className="benefit-card"><h3>Practical Designs</h3><p>Ensures functionality is integrated into creativity.</p></div>
          <div className="benefit-card"><h3>Future Ready</h3><p>Concepts are scalable for future expansion.</p></div>
          <div className="benefit-card"><h3>Feasible Solutions</h3><p>Balances design ambition with practical constraints.</p></div>
          <div className="benefit-card"><h3>Confidence</h3><p>Provides stakeholders with a strong project vision.</p></div>
        </div>
      </div>
    </section>
  );
};

export default ConceptPlanning;
