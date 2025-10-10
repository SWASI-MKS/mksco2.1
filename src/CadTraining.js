import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const CADTraining = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>CAD Training</h2>
        <p>We offer CAD training programs for beginners and professionals to improve drafting skills and efficiency.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Basics of CAD" />
            <h3>Basics of CAD</h3>
            <p>Learn fundamental CAD tools, commands, and drawing techniques.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Advanced Techniques" />
            <h3>Advanced Techniques</h3>
            <p>Learn 3D modeling, layer management, and complex drawing creation.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Practical Exercises" />
            <h3>Practical Exercises</h3>
            <p>Hands-on exercises to apply CAD knowledge effectively.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Project Assistance" />
            <h3>Project Assistance</h3>
            <p>Guidance on using CAD for real-world construction projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CADTraining;
