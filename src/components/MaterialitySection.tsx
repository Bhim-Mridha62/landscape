import React, { useState } from 'react';
import { MATERIAL_SPECIMENS } from '../data/content';
import { MaterialSpecimen } from '../types';

interface MaterialitySectionProps {
  onOpenMaterialIndex: () => void;
}

export const MaterialitySection: React.FC<MaterialitySectionProps> = ({
  onOpenMaterialIndex,
}) => {
  const [selectedSpecimen, setSelectedSpecimen] = useState<MaterialSpecimen | null>(null);

  const specimen1 = MATERIAL_SPECIMENS[0];
  const specimen2 = MATERIAL_SPECIMENS[1];
  const specimen3 = MATERIAL_SPECIMENS[2];

  return (
    <section id="craft" className="w-full bg-[#f2f1ee] py-24 sm:py-32 border-b border-[#e3e1dc]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              Materiality &amp; Craft
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight leading-[1.15] mb-6">
            Tactile Permanence &amp; <br className="hidden sm:inline" />
            Living Form
          </h2>
          <p className="text-[#444748] text-base sm:text-lg font-light leading-relaxed">
            Every project harmonizes geologic permanence with botanical heritage. Sourced directly
            from premier quarries and private arboreal collections.
          </p>
        </div>

        {/* Asymmetrical Grid matching Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Large Card: Hand-Chiseled Basalt */}
          <div
            onClick={() => setSelectedSpecimen(specimen1)}
            className="lg:col-span-7 bg-[#f9f9f8] border border-[#e3e1dc] overflow-hidden flex flex-col justify-between group hover:border-[#1a1a1a] transition-all duration-300 cursor-pointer"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-[#1a1a1a]">
              <img
                src={specimen1.image}
                alt={specimen1.name}
                className="w-full h-full object-cover object-center img-zoom"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-[9px] uppercase tracking-widest font-mono">
                {specimen1.tagline}
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-3">
                  <span>{specimen1.specimenNumber}</span>
                  <span>{specimen1.origin}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] font-normal mb-4 group-hover:text-[#5a5d4d] transition-colors">
                  {specimen1.name}
                </h3>

                <p className="text-[#444748] text-sm sm:text-base leading-relaxed font-light mb-6">
                  {specimen1.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#e3e1dc] flex items-center justify-between text-xs font-mono text-[#8c857b]">
                <span>Class: {specimen1.mineralClass}</span>
                <span className="material-symbols-outlined text-sm text-[#1a1a1a] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Specimen Olive + Travertine/Bronze Study */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Top Card: Ancient Olive Specimen */}
            <div
              onClick={() => setSelectedSpecimen(specimen2)}
              className="bg-[#f9f9f8] border border-[#e3e1dc] overflow-hidden group hover:border-[#1a1a1a] transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#1a1a1a]">
                <img
                  src={specimen2.image}
                  alt={specimen2.name}
                  className="w-full h-full object-cover object-center img-zoom"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 text-[8px] uppercase tracking-widest font-mono">
                  {specimen2.tagline}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between text-[9px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
                  <span>{specimen2.specimenNumber}</span>
                  <span>{specimen2.origin}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#1a1c1c] font-normal mb-3 group-hover:text-[#5a5d4d] transition-colors">
                  {specimen2.name}
                </h3>

                <p className="text-[#444748] text-xs sm:text-sm leading-relaxed font-light">
                  {specimen2.description}
                </p>
              </div>
            </div>

            {/* Bottom Card: Travertine & Bronze Study */}
            <div className="bg-[#f9f9f8] border border-[#e3e1dc] p-6 sm:p-8 flex flex-col justify-between flex-1 hover:border-[#1a1a1a] transition-all duration-300">
              <div>
                <div className="flex items-center justify-between text-[9px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
                  <span>{specimen3.specimenNumber}</span>
                  <span>{specimen3.origin}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#1a1c1c] font-normal mb-3">
                  {specimen3.name}
                </h3>

                <p className="text-[#444748] text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {specimen3.description}
                </p>

                {/* Specs Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#f2f1ee] border border-[#e3e1dc] text-[11px] mb-6">
                  <div>
                    <span className="text-[#8c857b] block uppercase tracking-wider text-[9px]">
                      Mineral Class
                    </span>
                    <span className="text-[#1a1c1c] font-semibold">{specimen3.mineralClass}</span>
                  </div>
                  <div>
                    <span className="text-[#8c857b] block uppercase tracking-wider text-[9px]">
                      Alloy Spec
                    </span>
                    <span className="text-[#1a1c1c] font-semibold">{specimen3.alloySpec}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e3e1dc]">
                <button
                  onClick={onOpenMaterialIndex}
                  className="w-full flex items-center justify-between text-xs uppercase tracking-editorial font-bold text-[#1a1a1a] hover:text-[#5a5d4d] transition-colors cursor-pointer"
                >
                  <span>Specimen &amp; Material Index</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Material Detail Modal */}
      {selectedSpecimen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-[#f9f9f8] border border-[#1a1a1a] max-w-xl w-full p-8 shadow-2xl relative">
            <div className="flex items-start justify-between mb-6 pb-4 border-b border-[#e3e1dc]">
              <div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b]">
                  {selectedSpecimen.specimenNumber} • Archive
                </div>
                <h3 className="font-serif text-2xl text-[#1a1c1c] mt-1">
                  {selectedSpecimen.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSpecimen(null)}
                className="w-8 h-8 border border-[#e3e1dc] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>

            <div className="aspect-[16/9] mb-4 overflow-hidden bg-black">
              <img
                src={selectedSpecimen.image}
                alt={selectedSpecimen.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[#444748] text-sm leading-relaxed font-light mb-4">
              {selectedSpecimen.description}
            </p>

            <div className="bg-[#f2f1ee] p-4 border border-[#e3e1dc] text-xs font-mono mb-6 space-y-1">
              <div><strong>Provenance:</strong> {selectedSpecimen.origin}</div>
              <div><strong>Scientific Classification:</strong> {selectedSpecimen.mineralClass}</div>
              {selectedSpecimen.thermalAcousticRating && (
                <div><strong>Engineering Specs:</strong> {selectedSpecimen.thermalAcousticRating}</div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedSpecimen(null)}
                className="bg-[#1a1a1a] text-white px-6 py-2.5 text-xs uppercase tracking-architectural font-semibold hover:bg-[#444748] transition-colors"
              >
                Close Specimen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
