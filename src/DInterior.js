import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const Interior3D = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>3D Interior Design</h2>
        <p>We create realistic 3D interior designs to visualize spaces, optimize layouts, and enhance aesthetics before execution.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Living Room Design" />
            <h3>Living Room Design</h3>
            <p>3D visualization of living spaces to plan furniture, lighting, and decor efficiently.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Bedroom Design" />
            <h3>Bedroom Design</h3>
            <p>Realistic rendering of bedroom layouts for comfort, aesthetics, and functionality.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Kitchen Design" />
            <h3>Kitchen Design</h3>
            <p>3D interior layouts for kitchens to optimize storage, workflow, and ergonomics.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Office & Study Design" />
            <h3>Office & Study Design</h3>
            <p>Detailed 3D planning of office and study spaces for productivity and aesthetics.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of 3D Interior Design</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Realistic Visualization</h3>
            <p>See your interior design before implementation to make informed decisions.</p>
          </div>
          <div className="benefit-card">
            <h3>Space Optimization</h3>
            <p>Plan layouts and furniture placement efficiently for maximum usability.</p>
          </div>
          <div className="benefit-card">
            <h3>Aesthetic Enhancement</h3>
            <p>Visualize colors, textures, and lighting to improve overall design appeal.</p>
          </div>
          <div className="benefit-card">
            <h3>Time & Cost Efficiency</h3>
            <p>Identify potential design issues early to save construction time and costs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interior3D;
