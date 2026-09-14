import React from "react";
import { PORTFOLIO_PROJECTS } from "../data/content";
import { ProjectFolio } from "../types";

interface PortfolioShowcaseProps {
  onSelectProject: (project: ProjectFolio) => void;
  onViewAllWorks: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onSelectProject,
  onViewAllWorks,
}) => {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 5);

  return (
    <section
      id="portfolio-showcase"
      className="w-full bg-[#f9f9f8] py-24 sm:py-32 border-b border-[#e3e1dc]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                Selected Folios
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight">
              Recent Architectural Commissions
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#8c857b] font-mono pb-2">
            Edition 2024—2026
          </div>
        </div>

        {/* Full-Screen Background Image Project Displays */}
        <div className="space-y-5 sm:space-y-10">
          {featuredProjects.map((project, idx) => {
            // Even content on right (idx % 2 === 1), Odd content on left (idx % 2 === 0)
            const isContentRight = idx % 2 === 1;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="relative w-full h-[600px] sm:h-[700px] overflow-hidden cursor-pointer group rounded-sm shadow-xl"
              >
                {/* Full-Bleed Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 transition-colors duration-500" />
                </div>

                {/* Top Floating Details */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10 pointer-events-none">
                  <span className="bg-black/35 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-widest font-mono text-white">
                    {project.subtitle || project.specs.acreage} • {project.year}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1.5">
                    Folio Ref: 0{idx + 1}
                  </span>
                </div>

                {/* Floating Content Box (Left or Right Aligned) */}
                <div
                  className={`absolute inset-0 flex items-end p-4 sm:p-10 lg:p-12 z-10 ${
                    isContentRight ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="max-w-xl w-full p-2 md:p-10 text-white">
                    <div className="text-[10px] uppercase tracking-editorial text-white/70 font-medium mb-2">
                      {project.disciplines}
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight mb-4 group-hover:text-stone-200 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-architectural font-bold text-white group-hover:text-stone-300 transition-all">
                        <span>Discover Residence</span>
                        <span className="material-symbols-outlined text-base">
                          north_east
                        </span>
                      </span>

                      <span className="text-[10px] uppercase font-mono text-stone-400">
                        {project.specs.acreage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Works CTA */}
        <div className="mt-20 pt-10 border-t border-[#e3e1dc] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#8c857b] font-light">
            Inquire to access our private unreleased archive of high-security
            residential folios.
          </p>
          <button
            onClick={onViewAllWorks}
            className="border border-[#1a1a1a] px-4 md:px-8 py-2 md:py-4 text-xs font-semibold tracking-architectural uppercase text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all cursor-pointer"
          >
            Explore Complete Portfolio Archive →
          </button>
        </div>
      </div>
    </section>
  );
};
