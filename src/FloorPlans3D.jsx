import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const FloorPlans3DViews = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Floor Plans & 3D Views</h2>
        <p>We design floor plans and 3D views that help clients visualize their dream spaces with precision.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="2D Floor Plans" /><h3>2D Floor Plans</h3><p>Clear room arrangements with accurate dimensions.</p></div>
          <div className="card"><img src={CP} alt="3D Interior Views" /><h3>3D Interior Views</h3><p>Realistic visualization of interiors for better understanding.</p></div>
          <div className="card"><img src={CP} alt="3D Exterior Views" /><h3>3D Exterior Views</h3><p>Detailed representation of building exteriors.</p></div>
          <div className="card"><img src={CP} alt="Walkthroughs" /><h3>Walkthroughs</h3><p>Virtual tours that bring designs to life.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Floor Plans & 3D Views</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Visualization</h3><p>Clients can see their project before construction begins.</p></div>
          <div className="benefit-card"><h3>Clarity</h3><p>Clear representation of layout and design.</p></div>
          <div className="benefit-card"><h3>Decision Making</h3><p>Helps finalize designs quickly with client approval.</p></div>
          <div className="benefit-card"><h3>Time Saving</h3><p>Avoids confusion during execution.</p></div>
          <div className="benefit-card"><h3>Enhanced Presentation</h3><p>Improves the professional outlook of projects.</p></div>
          <div className="benefit-card"><h3>Error Reduction</h3><p>Minimizes design errors by visualizing every element.</p></div>
          <div className="benefit-card"><h3>Client Satisfaction</h3><p>Ensures expectations are met before construction.</p></div>
          <div className="benefit-card"><h3>Marketing Value</h3><p>3D renders enhance real estate sales and presentations.</p></div>
          <div className="benefit-card"><h3>Flexibility</h3><p>Easy to modify designs based on client input.</p></div>
          <div className="benefit-card"><h3>Cost Saving</h3><p>Avoids rework by detecting issues beforehand.</p></div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans3DViews;
