import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const SectionalDetail = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Sectional Detail Drawings</h2>
        <p>We prepare sectional detail drawings to provide a clear view of structural, architectural, and service elements within a building.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Wall Sections" /><h3>Wall Sections</h3><p>Detailed vertical sections showing wall thickness and layers.</p></div>
          <div className="card"><img src={CP} alt="Staircase Sections" /><h3>Staircase Sections</h3><p>Accurate detailing of risers, treads, and handrails.</p></div>
          <div className="card"><img src={CP} alt="Foundation Sections" /><h3>Foundation Sections</h3><p>Clear views of footing and base structures.</p></div>
          <div className="card"><img src={CP} alt="Roof Sections" /><h3>Roof Sections</h3><p>Precise detailing of roof slabs and support systems.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Sectional Detail Drawings</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Clarity</h3><p>Provides in-depth understanding of construction details.</p></div>
          <div className="benefit-card"><h3>Accuracy</h3><p>Minimizes construction errors with precise details.</p></div>
          <div className="benefit-card"><h3>Coordination</h3><p>Improves collaboration between engineers, architects, and contractors.</p></div>
          <div className="benefit-card"><h3>Compliance</h3><p>Meets building codes and structural standards.</p></div>
          <div className="benefit-card"><h3>Cost Control</h3><p>Reduces rework and material wastage.</p></div>
          <div className="benefit-card"><h3>Time Saving</h3><p>Simplifies execution by giving clear on-site guidance.</p></div>
          <div className="benefit-card"><h3>Durability</h3><p>Ensures proper construction methods for long-lasting results.</p></div>
          <div className="benefit-card"><h3>Future Expansion</h3><p>Helps during modifications or renovations.</p></div>
          <div className="benefit-card"><h3>Transparency</h3><p>Easy for clients to visualize construction details.</p></div>
          <div className="benefit-card"><h3>Strong Foundation</h3><p>Forms the backbone of precise execution and safety.</p></div>
        </div>
      </div>
    </section>
  );
};

export default SectionalDetail;
