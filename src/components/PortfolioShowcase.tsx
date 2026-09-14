import React from "react";
import { PORTFOLIO_PROJECTS } from "../data/content";
import { ProjectFolio } from "../types";

interface PortfolioShowcaseProps {
  onSelectProject: (project: ProjectFolio) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onSelectProject,
}) => {
  const projects = PORTFOLIO_PROJECTS.slice(0, 5);

  if (projects.length === 0) return null;

  return (
    <section className="w-full bg-[#f9f9f8] pt-10 sm:pt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e3e1dc] pb-8">
          <div>
            <span className="text-[11px] uppercase font-mono tracking-[0.24em] text-[#8c857b] block mb-3">
              Selected Folios
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight">
              Recent Architectural Commissions
            </h2>
          </div>
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#8c857b] font-mono">
            Edition 2024—2026
          </span>
        </div>

        {/* PERFECT ZIG-ZAG BENTO GRID (5 Images) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Row 1: Left Large Image (7 Cols) & Right Tall Image (5 Cols) */}
          {projects[0] && (
            <div
              onClick={() => onSelectProject(projects[0])}
              className="lg:col-span-7 relative h-[450px] sm:h-[580px] overflow-hidden cursor-pointer group rounded-sm shadow-xl"
            >
              <img
                src={projects[0].heroImage}
                alt={projects[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-colors duration-500" />
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight">
                  {projects[0].title}
                </h3>
              </div>
            </div>
          )}

          {projects[1] && (
            <div
              onClick={() => onSelectProject(projects[1])}
              className="lg:col-span-5 relative h-[450px] sm:h-[580px] overflow-hidden cursor-pointer group rounded-sm shadow-xl"
            >
              <img
                src={projects[1].heroImage}
                alt={projects[1].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-colors duration-500" />
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight">
                  {projects[1].title}
                </h3>
              </div>
            </div>
          )}

          {/* Row 2: Three Equal Columns (4 Cols each) */}
          {projects[2] && (
            <div
              onClick={() => onSelectProject(projects[2])}
              className="lg:col-span-4 relative h-[380px] sm:h-[420px] overflow-hidden cursor-pointer group rounded-sm shadow-xl"
            >
              <img
                src={projects[2].heroImage}
                alt={projects[2].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight">
                  {projects[2].title}
                </h3>
              </div>
            </div>
          )}

          {projects[3] && (
            <div
              onClick={() => onSelectProject(projects[3])}
              className="lg:col-span-4 relative h-[380px] sm:h-[420px] overflow-hidden cursor-pointer group rounded-sm shadow-xl"
            >
              <img
                src={projects[3].heroImage}
                alt={projects[3].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight">
                  {projects[3].title}
                </h3>
              </div>
            </div>
          )}

          {projects[4] && (
            <div
              onClick={() => onSelectProject(projects[4])}
              className="lg:col-span-4 relative h-[380px] sm:h-[420px] overflow-hidden cursor-pointer group rounded-sm shadow-xl"
            >
              <img
                src={projects[4].heroImage}
                alt={projects[4].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal tracking-tight">
                  {projects[4].title}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
