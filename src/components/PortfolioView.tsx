import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { ProjectFolio } from '../types';

interface PortfolioViewProps {
  onSelectProject: (project: ProjectFolio) => void;
  onOpenConsultation: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Folios');

  const categories = [
    'All Folios',
    'Coastal Sanctuaries',
    'Hillside & Cantilever',
    'Zen & Mineral',
  ];

  const filteredProjects =
    selectedCategory === 'All Folios'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#f9f9f8] pt-28 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                Monographic Archive
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1a1c1c] font-normal tracking-tight">
              Selected Architectural Folios
            </h1>
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#8c857b] font-mono pb-2">
            Archived Commissions 2024—2026
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-12 border-b border-[#e3e1dc]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-editorial transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1a1a1a] text-white font-semibold'
                  : 'bg-[#f2f1ee] text-[#444748] hover:bg-[#e3e1dc] hover:text-[#1a1a1a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-24">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-[#f2f1ee] border border-[#e3e1dc] flex flex-col justify-between group hover:border-[#1a1a1a] transition-all cursor-pointer overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-widest font-mono text-[#1a1c1c]">
                  {project.specs.acreage} • {project.year}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm text-white px-3 py-1 text-[9px] uppercase tracking-widest font-mono">
                  {project.category}
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
                    {project.location}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] font-normal mb-2 group-hover:text-[#5a5d4d] transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-[11px] uppercase tracking-editorial text-[#5a5d4d] font-semibold mb-4">
                    {project.disciplines}
                  </div>
                  <p className="text-xs sm:text-sm text-[#444748] font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e3e1dc] flex items-center justify-between text-xs uppercase tracking-editorial font-bold text-[#1a1a1a]">
                  <span>Discover Residence</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidential Inquiries Box */}
        <div className="p-12 bg-[#f2f1ee] border border-[#e3e1dc] text-center max-w-3xl mx-auto">
          <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-3">
            High-Security Private Commissions
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] mb-4">
            Requesting Unreleased Estate Records
          </h3>
          <p className="text-xs sm:text-sm text-[#444748] font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Certain ultra-high-net-worth commissions in Aspen, Saint-Barthélemy, and Lake Como are
            protected under non-disclosure. Verified patrons may request private folio viewings.
          </p>
          <button
            onClick={onOpenConsultation}
            className="bg-[#1a1a1a] text-white px-8 py-3.5 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
          >
            Arrange Confidential Review
          </button>
        </div>
      </div>
    </div>
  );
};
