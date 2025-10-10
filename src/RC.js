import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const RCWork = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Reinforced Concrete (RC) Work</h2>
        <p>We provide detailed RC reinforcement drawings for beams, columns, slabs, and staircases to ensure safety, durability, and structural integrity.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Beams" />
            <h3>Beams</h3>
            <p>Accurate reinforcement detailing for beams according to design specifications.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Columns" />
            <h3>Columns</h3>
            <p>Precise RC detailing to ensure load-bearing efficiency and structural safety.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Slabs" />
            <h3>Slabs</h3>
            <p>Optimized steel layout for slabs to maintain strength and minimize wastage.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Staircases" />
            <h3>Staircases</h3>
            <p>RC detailing for staircases to ensure safe headroom and proper reinforcement.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of RC Work</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Precise steel placement according to design standards.</p>
          </div>
          <div className="benefit-card">
            <h3>Structural Safety</h3>
            <p>Ensures long-lasting, durable, and safe construction.</p>
          </div>
          <div className="benefit-card">
            <h3>Cost Efficiency</h3>
            <p>Reduces steel wastage and overall construction costs.</p>
          </div>
          <div className="benefit-card">
            <h3>Time Saving</h3>
            <p>Facilitates smooth and fast execution with detailed plans.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RCWork;
