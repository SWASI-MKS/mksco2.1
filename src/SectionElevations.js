import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const SectionElevation = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Section & Elevation</h2>
        <p>We provide detailed section and elevation drawings for accurate visualization and planning of architectural and structural designs.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Section Views" />
            <h3>Section Views</h3>
            <p>Detailed cross-sectional views to visualize internal structures.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Elevations" />
            <h3>Elevations</h3>
            <p>Accurate elevation drawings for architectural planning and aesthetics.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Annotations" />
            <h3>Annotations</h3>
            <p>All sections and elevations are properly annotated for clarity.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Compliance" />
            <h3>Compliance</h3>
            <p>Drawings comply with design standards and construction codes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionElevation;
