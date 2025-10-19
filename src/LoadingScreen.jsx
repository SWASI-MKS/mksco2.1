import React, { useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // auto-complete after 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="loading-text">Loading, please wait...</div>
    </div>
  );
};

export default LoadingScreen;
