import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const PlumbingLayout = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Plumbing Layout Drawings</h2>
        <p>We prepare efficient plumbing layouts to ensure smooth water supply, drainage, and sanitation systems.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Water Supply Layout" /><h3>Water Supply Layout</h3><p>Ensures proper routing of fresh water pipelines.</p></div>
          <div className="card"><img src={CP} alt="Drainage Systems" /><h3>Drainage Systems</h3><p>Effective layouts for wastewater and stormwater disposal.</p></div>
          <div className="card"><img src={CP} alt="Sanitary Fittings Plan" /><h3>Sanitary Fittings Plan</h3><p>Optimized placement of sinks, taps, and sanitary units.</p></div>
          <div className="card"><img src={CP} alt="Rainwater Harvesting" /><h3>Rainwater Harvesting</h3><p>Incorporation of eco-friendly water conservation systems.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Plumbing Layout Drawings</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Efficiency</h3><p>Ensures smooth water flow and drainage.</p></div>
          <div className="benefit-card"><h3>Hygiene</h3><p>Maintains sanitary conditions with proper sewage design.</p></div>
          <div className="benefit-card"><h3>Eco-Friendly</h3><p>Supports rainwater harvesting and water-saving measures.</p></div>
          <div className="benefit-card"><h3>Durability</h3><p>Reduces chances of leaks and plumbing issues.</p></div>
          <div className="benefit-card"><h3>Cost-Effective</h3><p>Minimizes maintenance and repair costs.</p></div>
          <div className="benefit-card"><h3>Regulatory Approval</h3><p>Complies with municipal plumbing standards.</p></div>
          <div className="benefit-card"><h3>Convenience</h3><p>Offers user-friendly placement of fittings.</p></div>
          <div className="benefit-card"><h3>Flexibility</h3><p>Easy modifications for future renovations.</p></div>
          <div className="benefit-card"><h3>Sustainability</h3><p>Promotes efficient use of natural resources.</p></div>
          <div className="benefit-card"><h3>Property Value</h3><p>Enhances property quality and resale value.</p></div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingLayout;
