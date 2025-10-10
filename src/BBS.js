import React, { useEffect } from "react";

import "./VaastuPlan.css";
import CP from "./CP.png"; // your actual image

const VaastuPlan = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Bar Bending Schedule (BBS) Work</h2>
        <p>We provide accurate and detailed Bar Bending Schedules for precise steel reinforcement and cost-effective construction.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Beams" />
            <h3>Beams</h3>
            <p>Detailed BBS for beam reinforcement to ensure structural strength and proper steel placement.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Columns" />
            <h3>Columns</h3>
            <p>Precise reinforcement schedules for columns to maintain load-bearing efficiency and safety.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Slabs" />
            <h3>Slabs</h3>
            <p>BBS for slabs to optimize steel usage and ensure uniform distribution of reinforcement.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Staircases" />
            <h3>Staircases</h3>
            <p>Accurate detailing for stair reinforcements to avoid material wastage and ensure safety.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Our BBS Service</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Ensures precise cutting, bending, and placement of steel.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Minimizes wastage of steel and reduces overall construction costs.</p>
          </div>
          <div className="benefit-card">
            <h3>Time Saving</h3>
            <p>Detailed schedules speed up construction by avoiding delays in steel preparation.</p>
          </div>
          <div className="benefit-card">
            <h3>Structural Safety</h3>
            <p>Ensures correct reinforcement placement for stronger, safer structures.</p>
          </div>
          <div className="benefit-card">
            <h3>Optimized Steel Usage</h3>
            <p>Reduces unnecessary steel consumption and enhances efficiency.</p>
          </div>
          <div className="benefit-card">
            <h3>Easy Execution</h3>
            <p>Helps contractors and workers follow a clear steel layout plan.</p>
          </div>
          <div className="benefit-card">
            <h3>Project Planning</h3>
            <p>Facilitates accurate estimation and planning for construction projects.</p>
          </div>
          <div className="benefit-card">
            <h3>Compliance</h3>
            <p>Adheres to structural design codes and construction standards.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default VaastuPlan;
