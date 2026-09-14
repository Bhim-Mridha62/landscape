import React from 'react';
import { STUDIO_PRINCIPALS_IMAGE_URL, STUDIO_PRINCIPALS } from '../data/content';

interface StudioSectionProps {
  onOpenPhilosophy: () => void;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ onOpenPhilosophy }) => {
  return (
    <section id="studio" className="w-full bg-[#f9f9f8] py-24 sm:py-32 border-b border-[#e3e1dc]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              The Studio
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight leading-[1.15]">
            Where Built Form Yields to <br className="hidden sm:inline" />
            the Living Horizon
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Studio Principals Photography & Caption */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e3e1dc] border border-[#e3e1dc]">
              <img
                src={STUDIO_PRINCIPALS_IMAGE_URL}
                alt="Julian Vance and Elena Rostova, Founding Principals of Aura Landscape"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="mt-4 pt-3 border-t border-[#e3e1dc] flex items-center justify-between text-[10px] uppercase tracking-widest font-mono text-[#8c857b]">
              <span>Julian Vance &amp; Elena Rostova</span>
              <span>Founding Principals</span>
            </div>
          </div>

          {/* Right: Narrative, Limiting Doctrine, & Statistics */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div className="space-y-6 text-[#444748] text-base sm:text-lg font-light leading-relaxed">
              <p>
                Founded on the conviction that exterior environments should rival the intimacy and
                refinement of interior architecture, Aura Landscape designs singular sanctuaries.
                Each commission is an unrepeatable dialogue between geologic permanence and
                botanical impermanence.
              </p>
              <p className="text-[#1a1c1c] font-normal border-l-2 border-[#5a5d4d] pl-4 italic">
                We intentionally limit our studio to twelve concurrent residential commissions
                globally per year. This protects the tactile intimacy between principal architect,
                master craftsman, and client vision.
              </p>
            </div>

            {/* Practice Statistics Grid */}
            <div className="mt-12 pt-8 border-t border-[#e3e1dc]">
              <div className="grid grid-cols-3 gap-6 mb-10">
                {STUDIO_PRINCIPALS.practiceStats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-serif text-3xl sm:text-4xl text-[#1a1c1c] font-normal tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-editorial text-[#8c857b] font-medium mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenPhilosophy}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-architectural font-bold text-[#1a1a1a] hover:text-[#5a5d4d] hover:gap-4 transition-all cursor-pointer"
              >
                <span>Read Our Philosophy &amp; Monograph</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
