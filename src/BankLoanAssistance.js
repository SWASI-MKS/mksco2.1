import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const BankLoanAssistance = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Bank Loan Assistance</h2>
        <p>We support clients in availing hassle-free bank loans for construction, purchase, and renovation projects.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Home Loan" /><h3>Home Loan</h3><p>Guidance for purchasing residential properties with easy loan approvals.</p></div>
          <div className="card"><img src={CP} alt="Construction Loan" /><h3>Construction Loan</h3><p>Support for obtaining funds for new construction projects.</p></div>
          <div className="card"><img src={CP} alt="Renovation Loan" /><h3>Renovation Loan</h3><p>Assistance in securing loans for remodeling and home upgrades.</p></div>
          <div className="card"><img src={CP} alt="Land Purchase Loan" /><h3>Land Purchase Loan</h3><p>Loans for buying plots or land parcels with proper approvals.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Bank Loan Assistance</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Easy Approvals</h3><p>Simplifies the process with complete documentation support.</p></div>
          <div className="benefit-card"><h3>Better Interest Rates</h3><p>Helps clients access loans with competitive interest rates.</p></div>
          <div className="benefit-card"><h3>Financial Guidance</h3><p>Advisory services to choose the best loan options.</p></div>
          <div className="benefit-card"><h3>Time Saving</h3><p>Reduces delays in loan processing with proper paperwork.</p></div>
          <div className="benefit-card"><h3>Secure Transactions</h3><p>Ensures safe and legally valid loan procedures.</p></div>
          <div className="benefit-card"><h3>Transparency</h3><p>Clear communication between client, bank, and builder.</p></div>
          <div className="benefit-card"><h3>Customized Support</h3><p>Loan solutions tailored to each client’s financial capacity.</p></div>
          <div className="benefit-card"><h3>Higher Loan Eligibility</h3><p>Maximizes sanctioned amount with professional documentation.</p></div>
          <div className="benefit-card"><h3>Peace of Mind</h3><p>Clients can focus on their project while we handle the formalities.</p></div>
          <div className="benefit-card"><h3>Long-Term Benefits</h3><p>Supports smooth repayment planning with financial stability.</p></div>
        </div>
      </div>
    </section>
  );
};

export default BankLoanAssistance;
