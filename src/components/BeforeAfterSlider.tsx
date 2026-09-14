import React, { useEffect, useRef, useState } from "react";

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  title,
  description,
  initialPosition = 50,
  className = "",
  height = "h-[450px]", // Perfect height for landscape view
}) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));

    setPosition(newPosition);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => isDragging && updatePosition(e.clientX);
  const handleTouchMove = (e) => updatePosition(e.touches[0].clientX);
  const handleClick = (e) => {
    if (e.target.closest("[data-slider-handle]")) return;
    updatePosition(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div className="space-y-6 w-full max-w-7xl mx-auto">
      {/* LUXURY HEADER SECTION (Matched with brand styling) */}
      {(title || description) && (
        <div className="space-y-2 text-left">
          {title && (
            <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-gray-900">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* SLIDER CONTAINER */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
        className={`
          relative w-full overflow-hidden rounded-xl bg-gray-950
          select-none shadow-md border border-gray-200/60
          ${height} 
          ${className}
        `}
      >
        {/* AFTER IMAGE (Background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          draggable="false"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* BEFORE IMAGE (Clipped Layer) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden h-full"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            draggable="false"
            className="absolute top-0 left-0 h-full max-w-none object-cover object-[center_top]"
            style={{ width: containerRef.current?.offsetWidth || "100%" }}
          />
        </div>

        {/* BEFORE LABEL */}
        <div className="absolute top-5 left-5 z-10 px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold uppercase tracking-[0.2em] shadow-sm">
          {beforeLabel}
        </div>

        {/* AFTER LABEL */}
        <div className="absolute top-5 right-5 z-10 px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold uppercase tracking-[0.2em] shadow-sm">
          {afterLabel}
        </div>

        {/* SLIDER LINE & HANDLE */}
        <div
          data-slider-handle
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
          className="absolute top-0 bottom-0 z-20 w-[2px] -translate-x-1/2 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] touch-none"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 shadow-lg border border-gray-200 transition-transform hover:scale-110">
            <span className="text-sm font-bold leading-none">↔</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
