import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";
import ImageWithOverlay from "./ImageWithOverlay";
import site_seperation from "./site_seperation.png";
import actualsiteplan from "./actualsiteplan.png";
import subdivisions from "./subdivisions.png";
import fmb_sketch from "./fmb._sketch.png";
import plotseperationplan from "./plotseperationplan.png";
const PlotSeparation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Plot Separation Services</h2>
        <p>
          We provide accurate and legal plot separation services to divide land
          into clear, saleable, and documented portions.
        </p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <ImageWithOverlay src={site_seperation} alt="Site Seperation" />
            <h3>Site Seperation</h3>
            <p>Transforming Large Properties into Legally Approved, Clearly Defined Plots for Hassle-Free Ownership.</p>
          </div>

          <div className="card">
            <ImageWithOverlay src={actualsiteplan} alt="Actual site plan" />
            <h3>Actual Site Plan </h3>
            <p>Accurate, Approved, and Ready-to-Build Site Plans for Smarter Development.</p>
          </div>
        <div className="card">
            <ImageWithOverlay src={subdivisions} alt="SubDivision" />
            <h3>Sub-Divisions </h3>
            <p>Accurate, Approved, and Ready-to-Build Site Plans for Smarter Development.</p>
          </div>
           <div className="card">
            <ImageWithOverlay src={fmb_sketch} alt="fmb sketch" />
            <h3>FMB Sketch </h3>
            <p>Detailed Field Measurement Book Sketches for Precise Land Boundaries and Legal Clarity.</p>
          </div>
                   <div className="card">
            <ImageWithOverlay src={plotseperationplan} alt="plot seperation plan" />
            <h3>Plot Seperation Plan</h3>
            <p>Legally Approved Plot Separation Plans for Clear Ownership, Easy Sale, and Smart Development.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Plot Separation</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Legal Recognition</h3>
            <p>Each separated plot is officially documented.</p>
          </div>
          <div className="benefit-card">
            <h3>Ease of Sale</h3>
            <p>Individual plots can be sold or mortgaged easily.</p>
          </div>
          <div className="benefit-card">
            <h3>Ownership Clarity</h3>
            <p>Eliminates disputes over joint ownership.</p>
          </div>
          <div className="benefit-card">
            <h3>Government Approval</h3>
            <p>Meets all legal partition requirements.</p>
          </div>
          <div className="benefit-card">
            <h3>Increased Value</h3>
            <p>Separated plots often fetch higher market value.</p>
          </div>
          <div className="benefit-card">
            <h3>Development Ready</h3>
            <p>Facilitates faster construction and approvals.</p>
          </div>
          <div className="benefit-card">
            <h3>Transparency</h3>
            <p>Ensures fair distribution of land among parties.</p>
          </div>
          <div className="benefit-card">
            <h3>Financial Benefits</h3>
            <p>Helps in availing bank loans for individual plots.</p>
          </div>
          <div className="benefit-card">
            <h3>Dispute Prevention</h3>
            <p>Reduces family and legal conflicts.</p>
          </div>
          <div className="benefit-card">
            <h3>Future Expansion</h3>
            <p>Allows each owner to plan independently.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlotSeparation;
