import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const WorkLayout = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Work Layout</h2>
        <p>We prepare accurate work layouts to ensure smooth execution of construction projects with minimal errors.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Site Planning" />
            <h3>Site Planning</h3>
            <p>Detailed site layouts to coordinate construction activities efficiently.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Material Layout" />
            <h3>Material Layout</h3>
            <p>Organized placement of materials to reduce wastage and optimize workflow.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Work Phases" />
            <h3>Work Phases</h3>
            <p>Clear visualization of project phases for better planning and execution.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Safety Measures" />
            <h3>Safety Measures</h3>
            <p>Layouts consider safety zones and risk reduction strategies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkLayout;
