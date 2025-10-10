import React, { useState, useEffect } from "react";
import "./ImageWithOverlay.css";

const ImageWithOverlay = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  // Allow closing with Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeOverlay();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Thumbnail Image */}
      <img
        src={src}
        alt={alt}
        className="thumbnail-img"
        onClick={openOverlay}
        onContextMenu={(e) => e.preventDefault()} // disable right click
      />

      {/* Overlay View */}
      {isOpen && (
        <div className="overlay" onClick={closeOverlay}>
          {/* Close Button OUTSIDE the image area */}
          <button className="close-btn" onClick={closeOverlay}>
            ✕
          </button>

          {/* Image Wrapper */}
          <div
            className="overlay-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <img
              src={src}
              alt={alt}
              className="overlay-img"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageWithOverlay;
