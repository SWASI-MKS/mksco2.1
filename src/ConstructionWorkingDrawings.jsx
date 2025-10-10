import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const ConstructionWorkingDrawings = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Construction Working Drawings</h2>
        <p>We provide detailed working drawings to ensure smooth on-site execution without errors.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Foundation Drawings" /><h3>Foundation Drawings</h3><p>Detailed layout for foundations, footings, and reinforcements.</p></div>
          <div className="card"><img src={CP} alt="Slab Layouts" /><h3>Slab Layouts</h3><p>Accurate slab plans for structural execution.</p></div>
          <div className="card"><img src={CP} alt="Door & Window Schedules" /><h3>Door & Window Schedules</h3><p>Detailed measurements for joinery placement.</p></div>
          <div className="card"><img src={CP} alt="Material Specifications" /><h3>Material Specifications</h3><p>Clear instructions on construction materials and finishes.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Working Drawings</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Error-Free Execution</h3><p>Contractors get accurate step-by-step guidance.</p></div>
          <div className="benefit-card"><h3>Time Saving</h3><p>Reduces delays caused by design confusion.</p></div>
          <div className="benefit-card"><h3>Precise Detailing</h3><p>All technical details are covered for smooth workflow.</p></div>
          <div className="benefit-card"><h3>Material Efficiency</h3><p>Helps avoid material wastage.</p></div>
          <div className="benefit-card"><h3>Quality Control</h3><p>Ensures the construction matches the design intent.</p></div>
          <div className="benefit-card"><h3>Cost Management</h3><p>Avoids rework and unnecessary expenses.</p></div>
          <div className="benefit-card"><h3>Standardization</h3><p>All elements follow uniform design standards.</p></div>
          <div className="benefit-card"><h3>Client Confidence</h3><p>Clients see clear execution plans.</p></div>
          <div className="benefit-card"><h3>Legal Support</h3><p>Helps in dispute resolution by showing design intent.</p></div>
          <div className="benefit-card"><h3>Future Reference</h3><p>Acts as a permanent technical record for the project.</p></div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionWorkingDrawings;
