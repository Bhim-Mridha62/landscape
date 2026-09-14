import React, { useState } from "react";
import { TESTIMONIALS } from "../data/content";

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
    );
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full bg-[#f9f9f8] py-24 sm:py-32 border-b border-[#e3e1dc]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
        {/* Section Header with Arrow Navigation */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-[#e3e1dc]">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              Client Perspectives
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Perspective"
              className="w-10 h-10 border border-[#e3e1dc] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_back
              </span>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Perspective"
              className="w-10 h-10 border border-[#e3e1dc] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Testimonial & Scope Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Quote Column */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span className="font-serif text-5xl text-[#5a5d4d] leading-none mb-4 select-none">
              “
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1a1c1c] font-normal leading-snug tracking-tight mb-8">
              {current.quote}
            </blockquote>

            <div>
              <div className="font-serif text-lg text-[#1a1c1c] font-medium">
                {current.client}
              </div>
              <div className="text-[11px] uppercase tracking-editorial text-[#8c857b] mt-1">
                {current.estate}
              </div>
            </div>
          </div>

          {/* Scope Card Column */}
          <div className="lg:col-span-4 bg-[#f2f1ee] border border-[#e3e1dc] p-3 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[9px] uppercase font-mono tracking-widest text-[#8c857b] mb-4 pb-2 border-b border-[#e3e1dc]">
                <span>Scope Details</span>
                <span className="text-[#5a5d4d] flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-xs">
                    verified
                  </span>
                  Completed {current.completedYear}
                </span>
              </div>

              <div className="font-serif text-lg text-[#1a1c1c] font-medium mb-3">
                {current.scopeTitle}
              </div>

              <p className="text-xs text-[#444748] leading-relaxed font-light">
                {current.scopeDetails}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#e3e1dc] flex items-center justify-between text-[10px] font-mono text-[#8c857b]">
              <span>
                Commission {currentIndex + 1} of {TESTIMONIALS.length}
              </span>
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Jump to slide ${i + 1}`}
                    className={`h-1.5 transition-all cursor-pointer ${
                      currentIndex === i
                        ? "w-6 bg-[#1a1a1a]"
                        : "w-2 bg-[#e3e1dc]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
