import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const ElevationInteriorViews = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Elevation & Interior Views</h2>
        <p>We craft creative elevation and interior designs that blend functionality with aesthetics.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Exterior Elevations" /><h3>Exterior Elevations</h3><p>Front, side, and rear views showcasing design style.</p></div>
          <div className="card"><img src={CP} alt="Interior Concepts" /><h3>Interior Concepts</h3><p>Functional and stylish layouts for interiors.</p></div>
          <div className="card"><img src={CP} alt="Material Palettes" /><h3>Material Palettes</h3><p>Suggestions for materials, textures, and finishes.</p></div>
          <div className="card"><img src={CP} alt="Lighting Designs" /><h3>Lighting Designs</h3><p>Plans for aesthetic and functional illumination.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Elevation & Interior Views</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Aesthetic Appeal</h3><p>Improves the visual impact of projects.</p></div>
          <div className="benefit-card"><h3>Personalized Design</h3><p>Interiors customized as per lifestyle and taste.</p></div>
          <div className="benefit-card"><h3>Functionality</h3><p>Ensures designs are practical and user-friendly.</p></div>
          <div className="benefit-card"><h3>Material Clarity</h3><p>Clients can see how materials will look in reality.</p></div>
          <div className="benefit-card"><h3>Lighting Solutions</h3><p>Proper lighting enhances interior functionality.</p></div>
          <div className="benefit-card"><h3>Confidence</h3><p>Clients understand exactly how spaces will appear.</p></div>
          <div className="benefit-card"><h3>Enhanced Value</h3><p>Attractive design increases property value.</p></div>
          <div className="benefit-card"><h3>Innovation</h3><p>Creative solutions enhance comfort and luxury.</p></div>
          <div className="benefit-card"><h3>Time Saving</h3><p>Faster approvals with clear visualization.</p></div>
          <div className="benefit-card"><h3>Market Appeal</h3><p>Striking designs attract buyers and investors.</p></div>
        </div>
      </div>
    </section>
  );
};

export default ElevationInteriorViews;
