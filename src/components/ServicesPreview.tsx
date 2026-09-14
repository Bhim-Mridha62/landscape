import React from "react";
import { SERVICE_GATEWAYS } from "../data/content";

interface ServicesPreviewProps {
  onNavigateToServices: () => void;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({
  onNavigateToServices,
}) => {
  return (
    <section
      id="services-preview"
      className="w-full bg-[#f9f9f8] py-24 sm:py-32 border-b border-[#e3e1dc]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                Our Disciplines
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight leading-[1.15] mb-6">
              Explore Our Services
            </h2>
            <p className="text-[#444748] text-base sm:text-lg font-light leading-relaxed">
              Five integrated architectural disciplines that transform raw
              terrain into enduring sanctuary.
            </p>
          </div>
        </div>

        {/* 5 Gateway Cards — responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICE_GATEWAYS.map((service, idx) => (
            <div
              key={service.title}
              onClick={onNavigateToServices}
              className="relative group cursor-pointer overflow-hidden flex flex-col"
            >
              {/* Image with overlay */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 group-hover:from-black/75 transition-colors duration-500" />

                {/* Floating Number Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[9px] uppercase tracking-widest font-mono text-white">
                    0{idx + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-9 h-9 bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      {service.icon}
                    </span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-serif text-lg sm:text-xl text-white font-normal leading-snug mb-2 group-hover:text-stone-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-300 text-xs leading-relaxed font-light line-clamp-3 mb-4">
                    {service.description}
                  </p>
                  <div className="pt-3 border-t border-white/20">
                    <span className="flex items-center justify-between text-[10px] uppercase tracking-editorial font-semibold text-white group-hover:translate-x-1 transition-transform">
                      <span>Learn More</span>
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
