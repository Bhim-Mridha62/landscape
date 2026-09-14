import React, { useState } from 'react';
import { MATERIAL_SPECIMENS } from '../data/content';
import { MaterialSpecimen } from '../types';

interface CraftViewProps {
  onOpenConsultation: () => void;
}

export const CraftView: React.FC<CraftViewProps> = ({ onOpenConsultation }) => {
  const [selectedSpecimen, setSelectedSpecimen] = useState<MaterialSpecimen | null>(
    MATERIAL_SPECIMENS[0]
  );

  const additionalMaterials = [
    {
      id: 'japanese-cloud-pine',
      name: 'Japanese Black Pine (Niigata Curation)',
      tagline: 'Pinus thunbergii • Hand-trained over 60 seasons',
      specimenNumber: 'LIVING SPECIMEN 04',
      origin: 'Niigata Prefecture, Japan',
      description:
        'Maritime-resilient coniferous sculptures pruned annually using traditional niwaki methods, calibrated to silhouette against coastal fog and night illumination.',
      mineralClass: 'Pinus thunbergii (Dormant Acclimatized)',
      thermalAcousticRating: 'Salt-Spray Tolerance: Exceptional / Wind Resistance: Beaufort 10',
      image:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'cast-concrete-plinth',
      name: 'Post-Tensioned Architectural Concrete',
      tagline: 'Monolithic Cantilevers • Glass-Smooth Formwork',
      specimenNumber: 'MATERIAL STUDY 05',
      origin: 'Engineered Batch Atelier',
      description:
        'Ultra-high-performance post-tensioned concrete slabs featuring micro-silica additives for mirror-smooth soffits, zero efflorescence, and sea-mist immunity.',
      mineralClass: 'UHPC Grade C120/140 with Volcanic Ash Aggregate',
      thermalAcousticRating: 'Compressive Strength: 145 MPa / Permeability: <0.01%',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const allSpecimens = [...MATERIAL_SPECIMENS, ...additionalMaterials];

  return (
    <div className="w-full bg-[#f9f9f8] pt-28 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              Geological &amp; Arboreal Archive
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1a1c1c] font-normal tracking-tight mb-6">
            Craft, Materiality &amp; Tactile Permanence
          </h1>
          <p className="text-[#444748] text-base sm:text-lg font-light leading-relaxed">
            We reject synthetic and manufactured outdoor composites. Our palettes are strictly
            drawn from quarry faces, forged alloys, and living trees with established pedigrees.
          </p>
        </div>

        {/* Interactive Material Showcase */}
        {selectedSpecimen && (
          <div className="bg-[#f2f1ee] border border-[#e3e1dc] p-8 sm:p-12 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-black border border-[#e3e1dc]">
              <img
                src={selectedSpecimen.image}
                alt={selectedSpecimen.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
                {selectedSpecimen.specimenNumber} • {selectedSpecimen.origin}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1c1c] mb-3">
                {selectedSpecimen.name}
              </h2>
              <div className="text-xs uppercase tracking-editorial text-[#5a5d4d] font-semibold mb-4">
                {selectedSpecimen.tagline}
              </div>
              <p className="text-xs sm:text-sm text-[#444748] font-light leading-relaxed mb-6">
                {selectedSpecimen.description}
              </p>

              <div className="p-4 bg-white/70 border border-[#e3e1dc] text-xs font-mono mb-6 space-y-1">
                <div><strong>Classification:</strong> {selectedSpecimen.mineralClass}</div>
                {selectedSpecimen.alloySpec && (
                  <div><strong>Alloy Composition:</strong> {selectedSpecimen.alloySpec}</div>
                )}
                {selectedSpecimen.thermalAcousticRating && (
                  <div><strong>Performance:</strong> {selectedSpecimen.thermalAcousticRating}</div>
                )}
              </div>

              <button
                onClick={onOpenConsultation}
                className="self-start bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
              >
                Inquire on Material Sourcing
              </button>
            </div>
          </div>
        )}

        {/* Material Selection Grid */}
        <div className="mb-20">
          <div className="text-[11px] uppercase font-mono tracking-widest text-[#8c857b] mb-6">
            Specimen Register (Select to Inspect)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSpecimens.map((specimen) => {
              const isSelected = selectedSpecimen?.id === specimen.id;
              return (
                <div
                  key={specimen.id}
                  onClick={() => setSelectedSpecimen(specimen)}
                  className={`border p-6 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[#1a1a1a] bg-[#f2f1ee] shadow-sm'
                      : 'border-[#e3e1dc] bg-[#f9f9f8] hover:border-[#8c857b]'
                  }`}
                >
                  <div className="aspect-[16/9] mb-4 overflow-hidden bg-black">
                    <img
                      src={specimen.image}
                      alt={specimen.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-[9px] uppercase font-mono tracking-widest text-[#8c857b] mb-1">
                    {specimen.specimenNumber}
                  </div>
                  <h3 className="font-serif text-lg text-[#1a1c1c] font-medium mb-1">
                    {specimen.name}
                  </h3>
                  <p className="text-xs text-[#444748] font-light line-clamp-2">
                    {specimen.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ethical Harvesting Doctrine */}
        <div className="border-t border-[#e3e1dc] pt-12 max-w-3xl">
          <h3 className="text-xs uppercase tracking-editorial font-bold text-[#8c857b] mb-3">
            Ethical Sourcing &amp; Geological Heritage
          </h3>
          <p className="text-xs sm:text-sm text-[#444748] font-light leading-relaxed">
            Every cubic meter of stone is tracked from certified European quarries that adhere to
            restorative quarrying protocols. Specimen trees are exclusively rescued from ancient
            orchard renewals and certified agricultural replant programs, accompanied by CITES
            documentation.
          </p>
        </div>
      </div>
    </div>
  );
};
