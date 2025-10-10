import React, { useRef } from 'react';
import './MagneticImage.css';

const MagneticImage = ({ src, alt, className }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const sensitivity = 0.25;  // More = more tilt
    const zDepth = 100;        // Bigger = more pop

    const rotateX = (-y * sensitivity).toFixed(2);
    const rotateY = (x * sensitivity).toFixed(2);

    container.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(${zDepth}px)
    `;
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    container.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0px)
    `;
  };

  return (
    <div
      className="magnetic-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

export default MagneticImage;
  