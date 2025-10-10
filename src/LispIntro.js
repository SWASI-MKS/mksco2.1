import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const LispIntro = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Lisp Introduction</h2>
        <p>We offer an introduction to Lisp programming for CAD automation and efficient drafting solutions.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Lisp Basics" />
            <h3>Lisp Basics</h3>
            <p>Learn the fundamentals of Lisp programming for CAD customization.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Commands & Functions" />
            <h3>Commands & Functions</h3>
            <p>Introduction to Lisp commands and functions for automating repetitive tasks.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Drawing Automation" />
            <h3>Drawing Automation</h3>
            <p>Automate CAD drawings using Lisp scripts to save time and effort.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Practical Examples" />
            <h3>Practical Examples</h3>
            <p>Hands-on examples for real-world CAD workflow improvement.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Learning Lisp</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Automation Efficiency</h3>
            <p>Reduce repetitive drafting tasks and save valuable design time.</p>
          </div>
          <div className="benefit-card">
            <h3>Customization Power</h3>
            <p>Tailor CAD software to meet specific project or company needs.</p>
          </div>
          <div className="benefit-card">
            <h3>Error Reduction</h3>
            <p>Automated commands minimize manual errors in CAD drawings.</p>
          </div>
          <div className="benefit-card">
            <h3>Productivity Boost</h3>
            <p>Enhance drafting speed and efficiency for large-scale projects.</p>
          </div>
          <div className="benefit-card">
            <h3>Career Advantage</h3>
            <p>Stand out as a CAD professional with specialized Lisp knowledge.</p>
          </div>
          <div className="benefit-card">
            <h3>Practical Application</h3>
            <p>Apply Lisp scripts in real projects for instant workflow improvements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LispIntro;
