import React, { useEffect } from "react";
import "./VaastuPlan.css"; // same CSS as VaastuPlan
import CP from "./CP.png"; // using same image as VaastuPlan

const AmmoniaBlueprints = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Ammonia System Blueprint Design</h2>
        <p>
          We create precise ammonia system blueprints to ensure safety,
          efficiency, and regulatory compliance for industrial applications.
        </p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Industrial Plant" />
            <h3>Industrial Plant</h3>
            <p>Blueprints for ammonia pipelines optimized for safety and efficiency.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Refrigeration Unit" />
            <h3>Refrigeration Unit</h3>
            <p>Accurate ammonia refrigeration layouts for industrial cooling systems.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Chemical Facility" />
            <h3>Chemical Facility</h3>
            <p>Detailed ammonia handling designs with hazard prevention measures.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Storage Tanks" />
            <h3>Storage Tanks</h3>
            <p>Safe ammonia storage and transfer layouts following all standards.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Key Benefits of Our Ammonia Blueprints</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Safety Compliance</h3>
            <p>Blueprints adhere to all government and industry safety regulations.</p>
          </div>
          <div className="benefit-card">
            <h3>Operational Efficiency</h3>
            <p>Optimized layouts reduce energy loss and improve workflow.</p>
          </div>
          <div className="benefit-card">
            <h3>Accurate Documentation</h3>
            <p>Precise technical drawings for construction, installation, and maintenance.</p>
          </div>
          <div className="benefit-card">
            <h3>Industrial Standards</h3>
            <p>Designs meet both local and international ammonia system standards.</p>
          </div>
          <div className="benefit-card">
            <h3>Custom Solutions</h3>
            <p>Layouts tailored to the specific requirements of each facility.</p>
          </div>
          <div className="benefit-card">
            <h3>Hazard Prevention</h3>
            <p>Designs minimize risk of accidents and unsafe handling.</p>
          </div>
          <div className="benefit-card">
            <h3>Scalable Design</h3>
            <p>Blueprints can be expanded or upgraded as facility needs grow.</p>
          </div>
          <div className="benefit-card">
            <h3>Clear Visuals</h3>
            <p>Easy-to-read diagrams for engineers, technicians, and managers.</p>
          </div>
          <div className="benefit-card">
            <h3>Regulatory Approval Ready</h3>
            <p>Documentation prepared for smooth submission and approvals.</p>
          </div>
          <div className="benefit-card">
            <h3>Reliable Reference</h3>
            <p>Serves as a detailed guide for installation, operation, and maintenance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmmoniaBlueprints;
