import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const VitrifiedTilesDoorsWindows = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Vitrified Tiles Flooring, Doors & Windows Fixing</h2>
        <p>We provide precise layouts and schedules for vitrified tiles, door, and window installation to ensure quality finishing.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Flooring Layout" />
            <h3>Flooring Layout</h3>
            <p>Accurate vitrified tile layouts for seamless and aesthetic flooring.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Door Installation" />
            <h3>Door Installation</h3>
            <p>Proper measurements and placement for doors to ensure perfect fitting.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Window Fixing" />
            <h3>Window Fixing</h3>
            <p>Precise window placement for ventilation, sunlight, and design harmony.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Quality Control" />
            <h3>Quality Control</h3>
            <p>Ensures finishing quality and alignment for tiles, doors, and windows.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrifiedTilesDoorsWindows;
