import React, { useState } from 'react';
import { METHODOLOGY_PHASES } from '../data/content';
import { MethodologyPhase } from '../types';

interface MethodologyProps {
  onSelectPhase?: (phase: MethodologyPhase) => void;
}

export const Methodology: React.FC<MethodologyProps> = () => {
  const [activeModalPhase, setActiveModalPhase] = useState<MethodologyPhase | null>(null);

  return (
    <section id="methodology" className="w-full bg-[#f9f9f8] py-24 sm:py-32 border-b border-[#e3e1dc]">
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
            Every site carries a prehistoric dialogue between light, soil, and bedrock. We calibrate
            modern residential massing against geological permanence.
          </p>
        </div>

        {/* 4 Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_PHASES.map((phase) => (
            <div
              key={phase.phase}
              className="bg-[#f2f1ee] border border-[#e3e1dc] p-8 flex flex-col justify-between hover:border-[#1a1a1a] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8c857b] font-mono">
                    {phase.phase}
                  </span>
                  <div className="w-10 h-10 bg-[#f9f9f8] border border-[#e3e1dc] flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">{phase.icon}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl text-[#1a1c1c] font-normal leading-snug mb-4 group-hover:text-[#5a5d4d] transition-colors">
                  {phase.title}
                </h3>

                <p className="text-[#444748] text-sm leading-relaxed font-light mb-8">
                  {phase.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#e3e1dc]/80">
                <button
                  onClick={() => setActiveModalPhase(phase)}
                  className="w-full flex items-center justify-between text-[11px] uppercase tracking-editorial font-semibold text-[#1a1a1a] group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>{phase.linkText}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
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
                <span className="material-symbols-outlined text-base">close</span>
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
