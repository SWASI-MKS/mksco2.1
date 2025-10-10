import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const ConstructionBankEstimation = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Construction & Bank Estimation Reports</h2>
        <p>We prepare reliable estimation reports tailored for both construction planning and bank loan purposes.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Construction Estimate" /><h3>Construction Estimate</h3><p>Accurate calculation of costs based on project specifications.</p></div>
          <div className="card"><img src={CP} alt="Bank Estimate" /><h3>Bank Estimate Report</h3><p>Standardized reports for financial institutions and loan approvals.</p></div>
          <div className="card"><img src={CP} alt="Stage-wise Estimate" /><h3>Stage-wise Estimate</h3><p>Cost reports prepared according to construction phases.</p></div>
          <div className="card"><img src={CP} alt="Comparative Estimate" /><h3>Comparative Estimate</h3><p>Comparison between different designs and material choices.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Estimation Reports</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Loan Approval</h3><p>Ensures faster loan sanction from banks and NBFCs.</p></div>
          <div className="benefit-card"><h3>Financial Accuracy</h3><p>Provides precise cost breakdowns accepted by institutions.</p></div>
          <div className="benefit-card"><h3>Planning Support</h3><p>Helps schedule construction activities effectively.</p></div>
          <div className="benefit-card"><h3>Transparency</h3><p>Promotes clarity between clients, banks, and contractors.</p></div>
          <div className="benefit-card"><h3>Market Compliance</h3><p>Meets financial standards required by authorities.</p></div>
          <div className="benefit-card"><h3>Flexibility</h3><p>Allows adjustments based on client needs or scope changes.</p></div>
          <div className="benefit-card"><h3>Risk Reduction</h3><p>Reduces financial risks during construction stages.</p></div>
          <div className="benefit-card"><h3>Documentation</h3><p>Provides clear written proof of project expenses.</p></div>
          <div className="benefit-card"><h3>Confidence</h3><p>Gives banks and clients trust in project feasibility.</p></div>
          <div className="benefit-card"><h3>Value Enhancement</h3><p>Improves credibility and resale value of the property.</p></div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionBankEstimation;
