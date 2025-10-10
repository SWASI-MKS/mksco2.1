import React, { useEffect } from "react";

import "./VaastuPlan.css";
import CP from "./CP.png"; // replace with your actual survey plan image

const SurveyPlan = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Survey Plan Preparation</h2>
        <p>We deliver precise and well-documented survey plans that serve as the foundation for legal, architectural, and construction activities.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Property Layout Plan" />
            <h3>Property Layout Plan</h3>
            <p>Accurate representation of land parcels with clear boundary lines and dimensions.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Site Development Plan" />
            <h3>Site Development Plan</h3>
            <p>Comprehensive site drawings to support approvals, zoning, and future development.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Subdivision Plan" />
            <h3>Subdivision Plan</h3>
            <p>Preparation of detailed plots for residential, commercial, or industrial land use.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Construction Reference Plan" />
            <h3>Construction Reference Plan</h3>
            <p>Precise layout to guide engineers and contractors in safe and accurate construction.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of a Well-Prepared Survey Plan</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Legal Clarity</h3>
            <p>Ensures property boundaries and ownership are legally recognized.</p>
          </div>
          <div className="benefit-card">
            <h3>Approval Ready</h3>
            <p>Meets government standards for zoning and regulatory approvals.</p>
          </div>
          <div className="benefit-card">
            <h3>Project Accuracy</h3>
            <p>Acts as a reliable reference for architects and engineers during design and execution.</p>
          </div>
          <div className="benefit-card">
            <h3>Time Efficiency</h3>
            <p>Reduces delays by providing accurate, standardized documentation.</p>
          </div>
          <div className="benefit-card">
            <h3>Dispute Prevention</h3>
            <p>Eliminates conflicts over land ownership and usage with clear layouts.</p>
          </div>
          <div className="benefit-card">
            <h3>Future Expansion</h3>
            <p>Provides a reliable base for planning extensions or additional developments.</p>
          </div>
          <div className="benefit-card">
            <h3>Financial Security</h3>
            <p>Improves property valuation and assists in smooth transactions.</p>
          </div>
          <div className="benefit-card">
            <h3>Compliance</h3>
            <p>Ensures adherence to building codes and municipal regulations.</p>
          </div>
          <div className="benefit-card">
            <h3>Transparency</h3>
            <p>Offers clear documentation for buyers, sellers, and stakeholders.</p>
          </div>
          <div className="benefit-card">
            <h3>Strong Foundation</h3>
            <p>Acts as the first step for any safe, efficient, and legally sound project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyPlan;
