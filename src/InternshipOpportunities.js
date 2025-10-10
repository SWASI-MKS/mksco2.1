import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const InternshipOpportunities = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Internship Opportunities for Civil Engineering Students</h2>
        <p>We offer practical training programs designed to equip civil engineering students with real-world skills and experience.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Site Training" /><h3>Site Training</h3><p>Hands-on learning on live construction sites with expert supervision.</p></div>
          <div className="card"><img src={CP} alt="Software Skills" /><h3>Design Software Training</h3><p>Workshops on AutoCAD, Revit, STAAD Pro, and other civil tools.</p></div>
          <div className="card"><img src={CP} alt="Project Exposure" /><h3>Project Exposure</h3><p>Involvement in planning, estimation, and execution tasks.</p></div>
          <div className="card"><img src={CP} alt="Certification" /><h3>Certification</h3><p>Internship completion certificates recognized in the industry.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Our Internship Programs</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Industry Experience</h3><p>Bridges the gap between academics and real-world practice.</p></div>
          <div className="benefit-card"><h3>Skill Development</h3><p>Improves technical, analytical, and project management skills.</p></div>
          <div className="benefit-card"><h3>Networking</h3><p>Builds connections with industry experts and professionals.</p></div>
          <div className="benefit-card"><h3>Career Readiness</h3><p>Prepares students for placements and higher studies.</p></div>
          <div className="benefit-card"><h3>Confidence</h3><p>Boosts confidence in handling civil projects independently.</p></div>
        </div>
      </div>
    </section>
  );
};

export default InternshipOpportunities;
