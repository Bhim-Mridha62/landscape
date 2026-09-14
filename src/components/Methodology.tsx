import React, { useState } from "react";
import { METHODOLOGY_PHASES } from "../data/content";
import { MethodologyPhase } from "../types";

interface MethodologyProps {
  onSelectPhase?: (phase: MethodologyPhase) => void;
}

export const Methodology: React.FC<MethodologyProps> = () => {
  const [activeModalPhase, setActiveModalPhase] =
    useState<MethodologyPhase | null>(null);

  return (
    <section
      id="methodology"
      className="w-full bg-[#f9f9f8] py-24 sm:py-32 border-b border-[#e3e1dc]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              The Methodology
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight leading-[1.15] mb-6">
            Harmonizing Architecture <br className="hidden sm:inline" />
            with Nature
          </h2>
          <p className="text-[#444748] text-base sm:text-lg font-light leading-relaxed">
            Every site carries a prehistoric dialogue between light, soil, and
            bedrock. We calibrate modern residential massing against geological
            permanence.
          </p>
        </div>

        {/* 4 Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_PHASES.map((phase) => (
            <div
              key={phase.phase}
              onClick={() => setActiveModalPhase(phase)}
              className="relative w-full h-[420px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-500 group shadow-sm hover:shadow-2xl flex flex-col justify-between p-5 sm:p-6"
            >
              {/* Permanent Full Background Image with Dark Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={phase.img}
                  alt={phase.title}
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Permanent Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />
              </div>

              {/* Top Content: Phase Number & Icon */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-mono">
                  {phase.phase}
                </span>
                <div className="w-9 h-9 bg-white/10 border border-white/20 flex items-center justify-center text-white rounded-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    {phase.icon}
                  </span>
                </div>
              </div>

              {/* Bottom Content (No Blur, Direct Clean Text over Dark Image) */}
              <div className="relative z-10 bg-transparent p-1 transition-all duration-300">
                <h3 className="font-serif text-lg sm:text-xl text-white font-normal leading-snug mb-2">
                  {phase.title}
                </h3>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light mb-4 line-clamp-3">
                  {phase.description}
                </p>

                <div className="pt-3 border-t border-white/20">
                  <button className="w-full flex items-center justify-between text-[11px] uppercase tracking-editorial font-semibold text-white group-hover:translate-x-1 transition-all cursor-pointer">
                    <span>{phase.linkText}</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Phase Technical Dossier Modal */}
      {activeModalPhase && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-[#f9f9f8] border border-[#1a1a1a] max-w-2xl w-full p-8 sm:p-10 shadow-2xl relative">
            <div className="flex items-start justify-between mb-6 pb-4 border-b border-[#e3e1dc]">
              <div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b]">
                  {activeModalPhase.phase} • Architectural Protocol
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] mt-1">
                  {activeModalPhase.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalPhase(null)}
                className="w-8 h-8 border border-[#e3e1dc] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">
                  close
                </span>
              </button>
            </div>

            <p className="text-[#444748] text-base leading-relaxed mb-6 font-light">
              {activeModalPhase.description}
            </p>

            <div className="bg-[#f2f1ee] p-5 border border-[#e3e1dc] mb-6">
              <div className="text-[10px] uppercase font-semibold tracking-editorial text-[#8c857b] mb-2">
                Field Execution Technique
              </div>
              <p className="text-[#1a1c1c] text-sm leading-relaxed">
                {activeModalPhase.fieldTechnique}
              </p>
            </div>

            <div className="mb-8">
              <div className="text-[10px] uppercase font-semibold tracking-editorial text-[#8c857b] mb-3">
                Principal Deliverables &amp; Folio Exhibits
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalPhase.deliverables.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs text-[#1a1c1c] font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-[#5a5d4d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#e3e1dc]">
              <button
                onClick={() => setActiveModalPhase(null)}
                className="bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#444748] transition-colors cursor-pointer"
              >
                Close Protocol
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
