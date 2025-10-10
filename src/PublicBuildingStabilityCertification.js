import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const PublicBuildingStabilityCertification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Public Building Stability Certification</h2>
        <p>
          We provide professional certification services for public buildings,
          ensuring compliance with structural safety standards and regulatory approvals.
        </p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Schools & Colleges" />
            <h3>Schools & Colleges</h3>
            <p>Certified structural safety assessment for educational institutions.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Government Buildings" />
            <h3>Government Buildings</h3>
            <p>Ensuring compliance and stability of administrative offices and complexes.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Hospitals" />
            <h3>Hospitals</h3>
            <p>Structural certification for safe and durable healthcare facilities.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Community Centers" />
            <h3>Community Centers</h3>
            <p>Assessing stability for public spaces and social facilities.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Our Certification Services</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Safety Assurance</h3>
            <p>Confirm structural integrity for public safety.</p>
          </div>
          <div className="benefit-card">
            <h3>Regulatory Compliance</h3>
            <p>Meets government and legal standards for public buildings.</p>
          </div>
          <div className="benefit-card">
            <h3>Professional Documentation</h3>
            <p>Clear and detailed reports for approval and record-keeping.</p>
          </div>
          <div className="benefit-card">
            <h3>Risk Mitigation</h3>
            <p>Identify and resolve potential structural risks before issues arise.</p>
          </div>
          <div className="benefit-card">
            <h3>Operational Clarity</h3>
            <p>Easy-to-understand assessments for building managers and engineers.</p>
          </div>
          <div className="benefit-card">
            <h3>Reliable Reference</h3>
            <p>Serves as an official reference for audits, renovations, and expansions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicBuildingStabilityCertification;
