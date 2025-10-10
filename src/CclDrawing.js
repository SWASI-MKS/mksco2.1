import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const CCLDrawing = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>CCL Drawing</h2>
        <p>We prepare accurate CCL (Construction Control Level) drawings for proper leveling and foundation planning.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Foundation Leveling" />
            <h3>Foundation Leveling</h3>
            <p>Accurate CCL drawings for proper leveling of foundations.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Site Marking" />
            <h3>Site Marking</h3>
            <p>Detailed plans for marking the construction site accurately.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Reference Levels" />
            <h3>Reference Levels</h3>
            <p>Provides clear reference points for construction execution.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Accuracy & Safety" />
            <h3>Accuracy & Safety</h3>
            <p>Ensures proper construction levels and reduces risks during execution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCLDrawing;
