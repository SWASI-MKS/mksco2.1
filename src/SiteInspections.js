import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const SiteInspections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Site Inspections</h2>
        <p>
          Our experts carry out detailed site inspections, including stability,
          rebar checking, and renovation assessments to ensure construction quality
          and safety compliance.
        </p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Foundation Checks" />
            <h3>Foundation Checks</h3>
            <p>Assess soil, footing, and structural foundations for stability.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Rebar Verification" />
            <h3>Rebar Verification</h3>
            <p>Ensure reinforcement bars are correctly placed and of proper quality.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Renovation Assessment" />
            <h3>Renovation Assessment</h3>
            <p>Inspect existing structures before renovation or expansion work.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Safety Audits" />
            <h3>Safety Audits</h3>
            <p>Comprehensive checks for safety compliance and risk prevention.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Key Benefits of Our Site Inspections</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Structural Safety</h3>
            <p>Identify potential hazards and ensure building integrity.</p>
          </div>
          <div className="benefit-card">
            <h3>Quality Assurance</h3>
            <p>Verify materials, workmanship, and compliance with engineering standards.</p>
          </div>
          <div className="benefit-card">
            <h3>Preventive Action</h3>
            <p>Detect issues early to reduce costs and avoid delays.</p>
          </div>
          <div className="benefit-card">
            <h3>Detailed Reporting</h3>
            <p>Provide actionable insights and recommendations for construction teams.</p>
          </div>
          <div className="benefit-card">
            <h3>Regulatory Compliance</h3>
            <p>Ensure the site adheres to all legal and safety requirements.</p>
          </div>
          <div className="benefit-card">
            <h3>Project Clarity</h3>
            <p>Clear overview for clients, engineers, and contractors to make informed decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteInspections;
