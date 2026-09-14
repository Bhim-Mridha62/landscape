import React from 'react';
import { ProjectFolio } from '../types';
import { BLUEPRINT_DESK_IMAGE_URL } from '../data/content';

interface ProjectDetailModalProps {
  project: ProjectFolio | null;
  onClose: () => void;
  onRequestConsultation: (projectTitle?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestConsultation,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#f9f9f8] border border-[#1a1a1a] max-w-5xl w-full my-auto overflow-hidden shadow-2xl relative">
        {/* Modal Top Header Bar */}
        <div className="h-16 px-6 sm:px-8 border-b border-[#e3e1dc] flex items-center justify-between bg-[#f2f1ee]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b]">
              Project Dossier
            </span>
            <span className="text-[#8c857b]">•</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1a1c1c] font-semibold">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Project Dossier"
            className="w-8 h-8 border border-[#e3e1dc] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Scrollable Dossier Body */}
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-10">
          {/* Main Title & Subtitle */}
          <div className="mb-8">
            <div className="text-xs uppercase tracking-editorial text-[#8c857b] font-medium mb-2">
              {project.subtitle}
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight mb-3">
              {project.title}
            </h2>
            <div className="text-sm font-semibold uppercase tracking-widest text-[#5a5d4d]">
              {project.disciplines}
            </div>
          </div>

          {/* Hero Photography */}
          <div className="relative aspect-[16/9] mb-10 overflow-hidden bg-[#1a1a1a]">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-sm text-white px-3 py-1.5 text-[9px] uppercase tracking-widest font-mono">
              Site Reference: {project.location} • Completed {project.year}
            </div>
          </div>

          {/* Architectural Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-7">
              <h3 className="text-xs uppercase tracking-editorial font-bold text-[#8c857b] mb-3">
                Architectural Statement
              </h3>
              <p className="text-[#444748] text-base leading-relaxed font-light mb-4">
                {project.extendedDescription || project.description}
              </p>
              <p className="text-[#444748] text-base leading-relaxed font-light">
                The residence was planned around sun trajectory calculations, preserving geological
                drainage corridors and framing uninterrupted perspectives toward the horizon.
              </p>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="lg:col-span-5 bg-[#f2f1ee] border border-[#e3e1dc] p-6">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-4 pb-2 border-b border-[#e3e1dc]">
                Site Metrics &amp; Engineering
              </h4>
              <dl className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <dt className="text-[#8c857b]">Total Acreage:</dt>
                  <dd className="font-semibold text-[#1a1c1c]">{project.specs.acreage}</dd>
                </div>
                {project.specs.elevationDelta && (
                  <div className="flex justify-between">
                    <dt className="text-[#8c857b]">Elevation Gradient:</dt>
                    <dd className="font-semibold text-[#1a1c1c]">{project.specs.elevationDelta}</dd>
                  </div>
                )}
                {project.specs.stoneClass && (
                  <div className="flex justify-between">
                    <dt className="text-[#8c857b]">Primary Masonry:</dt>
                    <dd className="font-semibold text-[#1a1c1c] text-right">{project.specs.stoneClass}</dd>
                  </div>
                )}
                {project.specs.waterFeature && (
                  <div className="flex justify-between">
                    <dt className="text-[#8c857b]">Water System:</dt>
                    <dd className="font-semibold text-[#1a1c1c] text-right">{project.specs.waterFeature}</dd>
                  </div>
                )}
                {project.specs.arborealHighlights && (
                  <div className="flex justify-between">
                    <dt className="text-[#8c857b]">Arboreal Anchor:</dt>
                    <dd className="font-semibold text-[#1a1c1c] text-right">{project.specs.arborealHighlights}</dd>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-[#e3e1dc]">
                  <dt className="text-[#8c857b]">Commission Completion:</dt>
                  <dd className="font-semibold text-[#5a5d4d]">{project.specs.completion}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Construction Blueprint & Execution Notes */}
          <div className="mb-12 border-t border-[#e3e1dc] pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] bg-[#e3e1dc] overflow-hidden border border-[#e3e1dc]">
                <img
                  src={BLUEPRINT_DESK_IMAGE_URL}
                  alt="Architectural Blueprint and Elevation Drawings"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-editorial font-bold text-[#8c857b] mb-4">
                  Field Execution Protocols
                </h4>
                {project.architecturalNotes && (
                  <ul className="space-y-3">
                    {project.architecturalNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-[#1a1c1c]">
                        <span className="w-1.5 h-1.5 bg-[#5a5d4d] mt-1.5 shrink-0" />
                        <span className="font-light leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-8 border-t border-[#e3e1dc] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] font-mono text-[#8c857b]">
              Confidential Client Archive • Private Reproduction Prohibited
            </span>

            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="border border-[#1a1a1a] px-6 py-3 text-xs uppercase tracking-editorial text-[#1a1a1a] hover:bg-[#f2f1ee] transition-colors cursor-pointer"
              >
                Close Dossier
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestConsultation(project.title);
                }}
                className="bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
              >
                Inquire on this Typology
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
