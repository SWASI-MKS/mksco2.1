import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const BuildingPlanApproval = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Building Plan Approval</h2>
        <p>We provide end-to-end support for obtaining building plan approvals from Corporations, Municipalities, and Panchayats.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Corporation Approvals" /><h3>Corporation Approvals</h3><p>Clearance for urban construction within corporation limits.</p></div>
          <div className="card"><img src={CP} alt="Municipal Approvals" /><h3>Municipal Approvals</h3><p>Approvals for construction in semi-urban municipal zones.</p></div>
          <div className="card"><img src={CP} alt="Panchayat Approvals" /><h3>Panchayat Approvals</h3><p>Local approvals for residential and commercial projects.</p></div>
          <div className="card"><img src={CP} alt="Special Permissions" /><h3>Special Permissions</h3><p>Assistance in getting additional permits and clearances.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Building Plan Approval</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Legal Compliance</h3><p>Ensures construction is within government rules.</p></div>
          <div className="benefit-card"><h3>Safety Assurance</h3><p>Guarantees structural safety and standards.</p></div>
          <div className="benefit-card"><h3>Loan Approvals</h3><p>Banks approve loans only for authorized plans.</p></div>
          <div className="benefit-card"><h3>Value Addition</h3><p>Approved buildings have higher resale value.</p></div>
          <div className="benefit-card"><h3>Risk-Free Construction</h3><p>Avoids legal demolition risks.</p></div>
          <div className="benefit-card"><h3>Transparent Transactions</h3><p>Boosts buyer confidence during sales.</p></div>
          <div className="benefit-card"><h3>Time Efficiency</h3><p>Reduces approval delays with accurate documents.</p></div>
          <div className="benefit-card"><h3>Clear Records</h3><p>Maintains verified records of construction.</p></div>
          <div className="benefit-card"><h3>Hassle-Free Execution</h3><p>Allows smooth progress of building activities.</p></div>
          <div className="benefit-card"><h3>Long-Term Security</h3><p>Protects owners from future disputes.</p></div>
        </div>
      </div>
    </section>
  );
};

export default BuildingPlanApproval;
