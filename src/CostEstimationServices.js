import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const CostEstimationServices = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Cost Estimation Services</h2>
        <p>We provide accurate cost estimations for your construction projects to help you plan finances and resources efficiently.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Construction Estimation" /><h3>Construction Estimation</h3><p>Detailed cost analysis of materials, labor, and project duration.</p></div>
          <div className="card"><img src={CP} alt="Bank Reports" /><h3>Construction & Bank Estimation Reports</h3><p>Reports formatted as per bank requirements for project financing.</p></div>
          <div className="card"><img src={CP} alt="Loan Assistance" /><h3>Bank Loan Assistance</h3><p>Support for preparing project cost estimates for loan applications.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Cost Estimation Services</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Financial Planning</h3><p>Helps manage budgets effectively before starting construction.</p></div>
          <div className="benefit-card"><h3>Loan Approval</h3><p>Ensures documents are valid for securing bank loans.</p></div>
          <div className="benefit-card"><h3>Transparency</h3><p>Provides a clear picture of total project costs.</p></div>
          <div className="benefit-card"><h3>Risk Reduction</h3><p>Prevents cost overruns by anticipating expenses in advance.</p></div>
          <div className="benefit-card"><h3>Time Efficiency</h3><p>Saves time with pre-prepared structured reports.</p></div>
        </div>
      </div>
    </section>
  );
};

export default CostEstimationServices;
