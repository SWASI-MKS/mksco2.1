import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const SiteMeasurements = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Site Measurements</h2>
        <p>We provide precise site measurement services for accurate layout, construction, and documentation.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Dimension Measurement" />
            <h3>Dimension Measurement</h3>
            <p>Accurate measurement of all site dimensions for precise execution.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Leveling" />
            <h3>Leveling</h3>
            <p>Check levels for foundation and flooring accuracy.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Area Calculation" />
            <h3>Area Calculation</h3>
            <p>Precise site area calculation to plan material usage efficiently.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Report Documentation" />
            <h3>Report Documentation</h3>
            <p>Provide documented site measurements for construction references.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteMeasurements;
