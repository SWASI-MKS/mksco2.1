import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const ArchitecturalDrawings = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Architectural Drawings</h2>
        <p>We deliver precise architectural drawings that convert ideas into clear and buildable plans.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Floor Layouts" /><h3>Floor Layouts</h3><p>Accurate representation of spaces and room arrangements.</p></div>
          <div className="card"><img src={CP} alt="Elevation Designs" /><h3>Elevation Designs</h3><p>Exterior building views that capture aesthetics and proportions.</p></div>
          <div className="card"><img src={CP} alt="Section Drawings" /><h3>Section Drawings</h3><p>Vertical cut views to explain structural and spatial clarity.</p></div>
          <div className="card"><img src={CP} alt="Detail Drawings" /><h3>Detail Drawings</h3><p>Fine detailing for windows, doors, and material finishes.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Architectural Drawings</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Accuracy</h3><p>Ensures the design is translated into buildable form.</p></div>
          <div className="benefit-card"><h3>Clarity</h3><p>Explains the project visually for clients and engineers.</p></div>
          <div className="benefit-card"><h3>Approval Ease</h3><p>Meets government submission standards for approvals.</p></div>
          <div className="benefit-card"><h3>Efficient Execution</h3><p>Helps contractors follow the design without errors.</p></div>
          <div className="benefit-card"><h3>Enhanced Value</h3><p>High-quality drawings improve project presentation.</p></div>
          <div className="benefit-card"><h3>Time Saving</h3><p>Reduces on-site confusion and redesigns.</p></div>
          <div className="benefit-card"><h3>Client Confidence</h3><p>Clients visualize exactly what will be built.</p></div>
          <div className="benefit-card"><h3>Functional Layouts</h3><p>Integrates practicality into every design element.</p></div>
          <div className="benefit-card"><h3>Legal Compliance</h3><p>Adheres to codes and regulations strictly.</p></div>
          <div className="benefit-card"><h3>Future Ready</h3><p>Provides scope for modification and expansion.</p></div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalDrawings;
