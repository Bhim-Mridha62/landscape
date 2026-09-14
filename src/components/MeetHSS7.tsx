import React from "react";

interface MeetHSS7Props {
  onNavigateToAbout: () => void;
}

export const MeetHSS7: React.FC<MeetHSS7Props> = ({ onNavigateToAbout }) => {
  const stats = [
    { value: "250+", label: "Luxury Estates Completed" },
    { value: "100%", label: "In-House NOC & Execution" },
    { value: "15+", label: "Years UAE Architectural Craft" },
  ];

  const teamHighlights = [
    {
      name: "Landscape Architects",
      role: "Spatial Planning & Outdoor Design",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Interior Designers",
      role: "Refined Interiors & Joinery",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Project Specialists",
      role: "Execution & Quality Assurance",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section
      id="meet-hss7"
      className="w-full bg-[#f9f9f8] py-10 border-b border-[#e3e1dc]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                Meet HSS7
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight leading-[1.15]">
              Discover the Creative Minds &amp; Dedicated{" "}
              <br className="hidden sm:inline" />
              Craftsmen Behind Dubai&apos;s Exclusive Spaces
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#8c857b] font-mono">
              The HSS7 Atelier
            </span>
            <button
              onClick={onNavigateToAbout}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial font-bold text-[#1a1a1a] hover:text-[#5a5d4d] group transition-colors cursor-pointer"
            >
              <span>Explore Our Story &amp; Team</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Main 2-Column Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Team & Workshop Imagery Showcase */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative aspect-[16/11] overflow-hidden bg-black border border-[#e3e1dc] group">
              <img
                src="/Landscaping.webp"
                alt="HSS7 Master Craftsmanship & Engineering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div className="text-[9px] uppercase font-mono tracking-widest text-white/70 mb-1">
                    Ras Al Khor Atelier, Dubai
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    HSS7 Landscaping Works L.L.C.
                  </h3>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-3 py-1 text-[9px] uppercase font-mono tracking-widest text-white border border-white/30 hidden sm:block">
                  Dubai, UAE
                </div>
              </div>
            </div>

            {/* Small Team Badges Row */}
            <div className="grid grid-cols-3 gap-3">
              {teamHighlights.map((t, idx) => (
                <div
                  key={idx}
                  onClick={onNavigateToAbout}
                  className="bg-[#f2f1ee] border border-[#e3e1dc] p-3 flex flex-col justify-between hover:border-[#1a1a1a] transition-all cursor-pointer group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-black mb-2">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs text-[#1a1c1c] leading-tight mb-0.5 line-clamp-1">
                      {t.name}
                    </h4>
                    <p className="text-[9px] text-[#8c857b] font-mono line-clamp-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative, Turnkey Philosophy, & Statistics */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div className="space-y-6 text-[#444748] text-base sm:text-lg font-light leading-relaxed">
              <p>
                Discover the creative minds and dedicated craftsmen behind
                Dubai's most exclusive outdoor living spaces and refined
                interiors. At HSS7 Landscaping Works L.L.C., our success is
                driven by a passionate team of landscape architects, interior
                designers, and project execution specialists who share a
                singular vision: turning your dream property into an
                architectural reality. Operating from our base in Ras Al Khor,
                our professionals bring years of hands-on expertise to premier
                communities across Dubai, including Palm Jumeirah, Dubai Hills
                Estate, Arabian Ranches, and Emirates Hills. Whether we are
                engineering a luxury infinity pool, structuring architectural
                pergolas, or crafting bespoke interior cabinetry and joinery,
                our team ensures absolute precision from concept to handover,
                and you can learn more about who we are and what drives our
                craftsmanship.
              </p>
            </div>

            {/* Statistics Row */}
            <div className="mt-10 pt-8 border-t border-[#e3e1dc]">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-serif text-3xl sm:text-4xl text-[#1a1c1c] font-normal tracking-tight">
                      {s.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-editorial text-[#8c857b] font-medium mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onNavigateToAbout}
                  className="bg-[#1a1a1a] text-white px-7 py-3.5 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                >
                  Meet Our Full Team &amp; Story →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
