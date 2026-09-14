import React, { useState } from "react";
import { ProjectFolio } from "../types";
import { PORTFOLIO_PROJECTS, BLUEPRINT_DESK_IMAGE_URL } from "../data/content";

interface ServicesViewProps {
  onSelectProject: (project: ProjectFolio) => void;
  onOpenConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [activeHubIndex, setActiveHubIndex] = useState<number>(0);
  const [expandedSpecialistId, setExpandedSpecialistId] = useState<string | null>(null);

  // 5 Service Hubs > 24 Specialist Disciplines (as specified in Sitemap)
  const serviceHubs = [
    {
      id: "hub-01",
      num: "01",
      title: "Master Landscape Planning & Spatial Cartography",
      tagline: "Macro site planning, contour analysis, and ecological zoning",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      description:
        "Holistic estate cartography balancing architectural living axes against geological gradients, microclimate wind corridors, and solar trajectories.",
      specialists: [
        {
          id: "sp-01",
          name: "3D LiDAR Point-Cloud Topography",
          scope: "Millimeter-accuracy terrain scans capturing bedrock thresholds and contour gradients.",
        },
        {
          id: "sp-02",
          name: "Solar Radiation & Microclimate Heat Mapping",
          scope: "Equinox solar path simulations to optimize shade pavilions and thermal stone absorption.",
        },
        {
          id: "sp-03",
          name: "Coastal Commission & Environmental Zoning",
          scope: "Comprehensive regulatory filing for protected coastal dunes, hillsides, and wetland setbacks.",
        },
        {
          id: "sp-04",
          name: "Primary Architectural Sightline Alignments",
          scope: "Axial cone calculations ensuring living room and master suite vistas flow uninterrupted.",
        },
        {
          id: "sp-05",
          name: "Subterranean Utility & Drainage Routing",
          scope: "Concealed high-capacity stormwater vaults and invisible service access routing.",
        },
      ],
    },
    {
      id: "hub-02",
      num: "02",
      title: "Architectural Watercraft & Swimming Basins",
      tagline: "Perimeter knife-edge pools, koi sanctuaries, and acoustic weirs",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      description:
        "Engineered water features that dissolve the line between pool water and open sky, complete with subterranean acoustic water vaults and dual-saline filtration.",
      specialists: [
        {
          id: "sp-06",
          name: "Knife-Edge Infinity Perimeter Weirs",
          scope: "Slot overflow engineering with mirror-flat water surfaces flush with stone pavers.",
        },
        {
          id: "sp-07",
          name: "Subterranean Acoustic Attenuation Vaults",
          scope: "Sound-isolated mechanical rooms preventing pump vibration from entering residential foundations.",
        },
        {
          id: "sp-08",
          name: "Biophilic Koi & Wetland Filtration Circuits",
          scope: "Sub-gravel biological nitrifying filters cycling 15,000 gal/hr for crystalline water clarity.",
        },
        {
          id: "sp-09",
          name: "Ozone & Low-Saline Mineral Sanitization",
          scope: "Gentle mineral water conditioning eliminating harsh chlorine odors and eye irritation.",
        },
        {
          id: "sp-10",
          name: "Geothermal & Solar Pool Heat Exchange",
          scope: "Year-round energy-efficient thermal management integrated with estate heat pumps.",
        },
      ],
    },
    {
      id: "hub-03",
      num: "03",
      title: "Structural Hardscape & Monolithic Stonework",
      tagline: "Travertine plinths, volcanic dry-stack walls, and cantilevered pavilions",
      image:
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&q=80",
      description:
        "Precision stonework chiseled from certified Italian and Sardinian quarry faces, assembled with zero-grout joinery and seismic tiebacks.",
      specialists: [
        {
          id: "sp-11",
          name: "Monolithic Dry-Joint Basalt Masonry",
          scope: "Zero-mortar interlocking retaining walls with concealed stainless steel internal dowels.",
        },
        {
          id: "sp-12",
          name: "Cross-Cut Roman Travertine Paving Plinths",
          scope: "Custom-honed large format slabs with slip-resistant acid-etched and flamed finishes.",
        },
        {
          id: "sp-13",
          name: "Post-Tensioned Cantilevered Terraces",
          scope: "Engineered concrete deck structures floating gracefully over steep hillside ridges.",
        },
        {
          id: "sp-14",
          name: "Flush Sunken Fire Amphitheaters",
          scope: "Terrace-integrated lounge wells with marine-grade bronze burners and concealed drainage.",
        },
        {
          id: "sp-15",
          name: "Architectural Bronze & Gunmetal Detailing",
          scope: "Hand-patinated bronze stair nosings, perimeter trim, and bespoke garden gates.",
        },
      ],
    },
    {
      id: "hub-04",
      num: "04",
      title: "Horticultural Architecture & Arboreal Curation",
      tagline: "Century-old olive groves, Japanese black pines, and native flora matrices",
      image:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      description:
        "Ethical sourcing, transcontinental logistics, and heavy-crane rigging of mature specimen trees with 99.4% transplant survival protocols.",
      specialists: [
        {
          id: "sp-16",
          name: "Historic Specimen Olive Tree Acquisition",
          scope: "Rescued 100+ year old productive olive trees certified with full phytosanitary passports.",
        },
        {
          id: "sp-17",
          name: "Niwaki Japanese Black Pine Sculpting",
          scope: "Hand-pruned coastal pines sculpted to frame dramatic architectural evening silhouettes.",
        },
        {
          id: "sp-18",
          name: "Microclimate Native Flora Matrices",
          scope: "Biodiverse perennial and drought-tolerant Mediterranean palettes with continuous blooms.",
        },
        {
          id: "sp-19",
          name: "Mycorrhizal Inoculation & Root Aeration",
          scope: "Biological soil conditioning ensuring immediate root establishment in foreign soils.",
        },
        {
          id: "sp-20",
          name: "Sub-Canopy Living Moss & Groundcover",
          scope: "Velvety shade-loving bryophyte gardens thriving beneath mature canopy shade.",
        },
      ],
    },
    {
      id: "hub-05",
      num: "05",
      title: "Sustainable Estate Ecology & Living Stewardship",
      tagline: "Museum-grade nightscapes, smart hydrology, and perpetual estate care",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      description:
        "Long-term ecological preservation systems ensuring estate landscapes flourish for decades under dedicated master gardener oversight.",
      specialists: [
        {
          id: "sp-21",
          name: "2700K Museum-Grade Twilight Nightscapes",
          scope: "Dark-sky certified recessed solid brass optics casting soft organic illumination without glare.",
        },
        {
          id: "sp-22",
          name: "Closed-Loop Stormwater Recycling",
          scope: "Subsurface cisterns and bio-swales capturing 100% of rainwater runoff for estate irrigation.",
        },
        {
          id: "sp-23",
          name: "Quarterly Soil Diagnostic Biomarker Testing",
          scope: "Laboratory microbiome profiling to balance mineral nutrients and prevent tree pathogens.",
        },
        {
          id: "sp-24",
          name: "Perpetual Master Gardener Stewardship",
          scope: "Direct seasonal pruning protocols and system maintenance executed by senior staff.",
        },
      ],
    },
  ];

  const currentHub = serviceHubs[activeHubIndex];

  return (
    <div className="w-full bg-[#f9f9f8] pt-28 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              Full Practice Hierarchy (/services/)
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1a1c1c] font-normal tracking-tight mb-6">
            5 Service Hubs &gt; 24 Specialist Disciplines
          </h1>
          <p className="text-[#444748] text-base sm:text-lg font-light leading-relaxed">
            Explore our comprehensive architectural landscape capabilities.
            Select a service hub below to open the complete breakdown of our 24 specialized practices.
          </p>
        </div>

        {/* 5 Service Hubs Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-12">
          {serviceHubs.map((hub, idx) => (
            <button
              key={hub.id}
              onClick={() => {
                setActiveHubIndex(idx);
                setExpandedSpecialistId(null);
              }}
              className={`p-5 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                activeHubIndex === idx
                  ? "border-[#1a1a1a] bg-[#1a231c] text-white shadow-md"
                  : "border-[#e3e1dc] bg-[#f2f1ee] text-[#1a1c1c] hover:border-[#8c857b]"
              }`}
            >
              <div className="font-mono text-xs mb-3 text-[#8c857b]">
                HUB {hub.num}
              </div>
              <div className="font-serif text-base sm:text-lg leading-snug">
                {hub.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Hub Showcase */}
        <div className="bg-[#f2f1ee] border border-[#e3e1dc] p-8 sm:p-14 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 aspect-[16/10] overflow-hidden bg-black border border-[#e3e1dc]">
            <img
              src={currentHub.image}
              alt={currentHub.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
              Service Hub {currentHub.num} • {currentHub.specialists.length} Specialized Areas
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1c1c] mb-3">
              {currentHub.title}
            </h2>
            <div className="text-xs uppercase tracking-editorial text-[#5a5d4d] font-semibold mb-4">
              {currentHub.tagline}
            </div>
            <p className="text-xs sm:text-sm text-[#444748] font-light leading-relaxed mb-6">
              {currentHub.description}
            </p>

            <button
              onClick={onOpenConsultation}
              className="self-start bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
            >
              Inquire on Hub {currentHub.num} Scope
            </button>
          </div>
        </div>

        {/* Specialist Disciplines under this Hub */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e3e1dc]">
            <h3 className="font-serif text-2xl text-[#1a1c1c]">
              Specialist Disciplines under Hub {currentHub.num}
            </h3>
            <span className="text-xs font-mono text-[#8c857b]">
              {currentHub.specialists.length} Practice Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentHub.specialists.map((sp, sIdx) => {
              const isExpanded = expandedSpecialistId === sp.id;
              return (
                <div
                  key={sp.id}
                  onClick={() =>
                    setExpandedSpecialistId(isExpanded ? null : sp.id)
                  }
                  className={`p-6 border flex flex-col justify-between transition-all cursor-pointer ${
                    isExpanded
                      ? "border-[#1a1a1a] bg-white shadow-sm"
                      : "border-[#e3e1dc] bg-[#f9f9f8] hover:border-[#8c857b]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#8c857b] mb-3">
                      <span>SPECIALIST 0{sIdx + 1}</span>
                      <span className="material-symbols-outlined text-sm text-[#5a5d4d]">
                        {isExpanded ? "unfold_less" : "unfold_more"}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg text-[#1a1c1c] mb-2 font-normal">
                      {sp.name}
                    </h4>
                    <p className="text-xs text-[#444748] font-light leading-relaxed mb-4">
                      {sp.scope}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#e3e1dc] text-[10px] uppercase font-bold tracking-editorial text-[#1a1a1a] flex items-center justify-between">
                    <span>Explore Technical Scope</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Complete 24-Specialist Practice Hierarchy Overview Tree */}
        <div className="border-t border-[#e3e1dc] pt-20 mb-20">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                Master Practice Architecture
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight">
              The 24 Specialist Hierarchy Directory
            </h2>
            <p className="text-[#444748] text-sm sm:text-base font-light leading-relaxed mt-3">
              Every discipline is executed in-house with dedicated master stonemasons,
              arborists, and licensed landscape architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHubs.map((hub) => (
              <div
                key={hub.id}
                className="bg-[#f2f1ee] border border-[#e3e1dc] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-1">
                    Hub {hub.num}
                  </div>
                  <h3 className="font-serif text-lg text-[#1a1c1c] mb-4">
                    {hub.title}
                  </h3>

                  <ul className="space-y-2 text-xs text-[#444748] font-light">
                    {hub.specialists.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#5a5d4d] mt-1.5 shrink-0" />
                        <span>{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setActiveHubIndex(
                      serviceHubs.findIndex((h) => h.id === hub.id)
                    );
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="mt-6 pt-4 border-t border-[#e3e1dc] text-[10px] uppercase tracking-editorial font-bold text-[#1a1a1a] hover:text-[#5a5d4d] text-left cursor-pointer"
                >
                  Inspect Hub {hub.num} →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action Banner */}
        <div className="p-12 bg-[#1a231c] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-white/60 mb-2">
              Bespoke Practice
            </div>
            <h3 className="font-serif text-3xl text-white">
              Ready to Commission an Exterior Masterplan?
            </h3>
            <p className="text-sm text-white/75 font-light mt-1">
              Our multidisciplinary directors are available for site inspections worldwide.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-white text-[#1a1c1c] hover:bg-[#e3e1dc] px-8 py-4 text-xs font-semibold tracking-architectural uppercase transition-colors cursor-pointer"
          >
            Request Private Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
