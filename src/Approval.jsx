import React, { useEffect } from "react";
import "./VaastuPlan.css";
import ImageWithOverlay from "./ImageWithOverlay"; 
import CP from "./CP.png";

const GovernmentApproval = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Building Plan Approval & Appeal Plan</h2>
        <p>We assist in obtaining government approvals for your land, ensuring compliance with legal and municipal standards.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <ImageWithOverlay src={CP} alt="Local Body Approvals (Residential)" />
            <h3>Local Body Approvals (Residential)</h3>
            <p>Seamless permits to build your dream home hassle-free.</p>
          </div>
          <div className="card">
            <ImageWithOverlay src={CP} alt="Local Body Approvals (Commercial)" />
            <h3>Local Body Approvals (Commercial)</h3>
            <p>Fast-track clearances to power your business spaces.</p>
          </div>
          <div className="card">
            <ImageWithOverlay src={CP} alt="Appeal Plan" />
            <h3>Appeal Plan</h3>
            <p>Revised approvals made simple – turning rejections into clearances.</p>
          </div>
           <div className="card">
            <ImageWithOverlay src={CP} alt="DTCP Approvals" />
            <h3>DTCP Approvals</h3>
            <p>Guidance in securing Directorate of Town and Country Planning approvals.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Government Approval</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Legal Recognition</h3><p>Approved plots are legally recognized for ownership and sale.</p></div>
          <div className="benefit-card"><h3>Bank Loan Eligibility</h3><p>Government-approved plots easily qualify for housing loans.</p></div>
          <div className="benefit-card"><h3>Market Value</h3><p>Plots with approvals have higher market value and demand.</p></div>
          <div className="benefit-card"><h3>Secure Investment</h3><p>Investors prefer government-approved layouts for security.</p></div>
          <div className="benefit-card"><h3>Transparency</h3><p>Ensures buyers and sellers have complete clarity.</p></div>
          <div className="benefit-card"><h3>Future Development</h3><p>Approval enables construction and infrastructure growth.</p></div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentApproval;
