import React from "react";
import { HERO_IMAGE_URL } from "../data/content";

interface HeroProps {
  onExplorePortfolio: () => void;
  onViewMonograph: () => void;
  onScrollDown: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePortfolio,
  onViewMonograph,
  onScrollDown,
}) => {
  return (
    <section className="relative w-full flex items-end justify-start overflow-hidden py-10 md:py-30">
      {/* Immersive Photography Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_URL}
          alt="Aura Landscape Architectural Sanctuary with sunken fire hearth and twilight reflection pool"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Scrim and Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Hero Architectural Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-3 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-white/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90">
              Architectural Landscaping • Estates • Sanctuaries
            </span>
            <span className="w-8 h-[1px] bg-white/60" />
          </div>

          {/* Monographic Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.08] tracking-tight mb-6">
            Crafting Outdoor Spaces <br />
            <span className="italic font-normal text-white/95">
              You Will Cherish
            </span>
          </h1>

          {/* Editorial Subtext */}
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed mb-4 md:mb-10 tracking-normal">
            Masterfully synthesized exterior architecture, bespoke horticultural
            curation, and timeless elemental living.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExplorePortfolio}
              className="bg-white text-[#1a1a1a] hover:bg-[#e3e1dc] px-8 py-4 text-xs font-semibold tracking-architectural uppercase transition-all duration-200 shadow-sm cursor-pointer"
            >
              Explore Portfolio
            </button>

            <button
              onClick={onViewMonograph}
              className="border border-white/60 text-white bg-black/20 backdrop-blur-sm hover:bg-white hover:text-[#1a1a1a] px-8 py-4 text-xs font-semibold tracking-architectural uppercase transition-all duration-200 cursor-pointer"
            >
              View Monograph
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
