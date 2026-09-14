import React from "react";
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
  const disciplines = [
    {
      num: "01",
      title: "Estate Master Planning & Spatial Cartography",
      desc: "Holistic masterplans balancing residential massing against geological gradients, microclimate wind corridors, and solar trajectories.",
      deliverables: [
        "Topographical 3D LiDAR Survey & Bedrock Borehole Mapping",
        "Zoning & Environmental Coastal Permitting Dossiers",
        "Axial Sightline Sight-Cone Alignments",
        "Circulation & Subterranean Service Routing",
      ],
      associatedProject: PORTFOLIO_PROJECTS[0],
    },
    {
      num: "02",
      title: "Architectural Hardscape & Monolithic Masonry",
      desc: "Precision stonework, dry-stacked volcanic retaining walls, and custom-honed Roman travertine plinths calibrated with concealed drainage.",
      deliverables: [
        "Zero-Grout Monolithic Stone Joinery Details",
        "Engineered Seismic Tiebacks for Cantilevered Terraces",
        "Hand-Rubbed Architectural Gunmetal Bronze Expansion Joints",
        "Slip-Resistant Flamed and Honed Surface Finishes",
      ],
      associatedProject: PORTFOLIO_PROJECTS[1],
    },
    {
      num: "03",
      title: "Specimen Arboreal Sourcing & Botanical Curation",
      desc: "Ethical acquisition and transcontinental relocation of century-old olive trees, Japanese black pines, and resilient native Mediterranean flora.",
      deliverables: [
        "Global Arboreal Heritage Registry & Provenance Tracking",
        "Mycorrhizal Inoculation & Root Zone Aeration Engineering",
        "Microclimate Companion Layering Schedules",
        "Seasonal Deciduous Chromatic Mapping",
      ],
      associatedProject: PORTFOLIO_PROJECTS[1],
    },
    {
      num: "04",
      title: "Knife-Edge Pools & Reflection Basins",
      desc: "Seamless zero-edge perimeter weirs that dissolve the division between pool water and natural horizons, complete with acoustic attenuation.",
      deliverables: [
        "Hydraulic Surge Basin Sizing & Perimeter Spillway Slots",
        "Natural Saline & Ozone Water Purification Circuits",
        "Concealed Sub-Gravel Koi Biological Filtration",
        "Subterranean Mechanical Vault Layouts",
      ],
      associatedProject: PORTFOLIO_PROJECTS[2],
    },
    {
      num: "05",
      title: "Concealed Luminary Choreography",
      desc: "Nightscape illumination engineered with 2700K optical glare shields recessed directly into stone risers, tree forks, and water margins.",
      deliverables: [
        "Dark-Sky Compliant Glare-Free Optical Fixtures",
        "Astronomical Clock & Dynamic Twilight Automation",
        "Silhouette Highlighting of Sculptural Trunks",
        "Low-Voltage Solid Brass Recessed Fixture Schedules",
      ],
      associatedProject: PORTFOLIO_PROJECTS[2],
    },
    {
      num: "06",
      title: "Outdoor Pavilions & Hearth Amphitheaters",
      desc: "Post-tensioned cantilevered concrete roofs, open-air culinary suites, and sunken conversation fire pits flush with terrace paving.",
      deliverables: [
        "Engineered Structural Concrete Overhangs",
        "Integrated Marine-Grade Induction & Wood Hearth Details",
        "Custom Cast Bronze Gas Fire Discs & Bioethanol Burners",
        "Acoustic Perimeter Baffling for Intimate Speech",
      ],
      associatedProject: PORTFOLIO_PROJECTS[3],
    },
  ];

  return (
    <div className="w-full bg-[#f9f9f8] pt-28 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              Comprehensive Practice
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1a1c1c] font-normal tracking-tight mb-6">
            Architectural Disciplines &amp; Field Engineering
          </h1>
          <p className="text-[#444748] text-base sm:text-lg font-light leading-relaxed">
            From raw bedrock mapping to the final millimeter alignment of honed
            travertine, our disciplines operate in strict concert with your
            architect of record.
          </p>
        </div>

        {/* Studio Drawing Desk Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-center bg-[#f2f1ee] border border-[#e3e1dc] p-8 sm:p-12">
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-black border border-[#e3e1dc]">
            <img
              src={BLUEPRINT_DESK_IMAGE_URL}
              alt="Architectural Drafting Table and Stone Materials"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
              Atelier Methodology
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] mb-4">
              Integrated Architectural Alignment
            </h3>
            <p className="text-xs sm:text-sm text-[#444748] font-light leading-relaxed mb-6">
              We do not treat landscape as an afterthought. Our principals
              collaborate with master architects from schematic inception,
              ensuring floor levels, glass thresholds, and sightlines flow
              outward uninterrupted.
            </p>
            <button
              onClick={onOpenConsultation}
              className="self-start bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
            >
              Consult On An Estate Masterplan
            </button>
          </div>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {disciplines.map((item) => (
            <div
              key={item.num}
              className="bg-[#f2f1ee] border border-[#e3e1dc] p-8 flex flex-col justify-between hover:border-[#1a1a1a] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8c857b] mb-4">
                  <span>DISCIPLINE {item.num}</span>
                  <span className="material-symbols-outlined text-sm">
                    architecture
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#1a1c1c] font-normal mb-4 group-hover:text-[#5a5d4d] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#444748] font-light leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="space-y-2 mb-8 pt-4 border-t border-[#e3e1dc]">
                  <div className="text-[9px] uppercase font-mono tracking-widest text-[#8c857b]">
                    Primary Deliverables:
                  </div>
                  {item.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 text-[11px] text-[#1a1c1c]"
                    >
                      <span className="w-1 h-1 bg-[#5a5d4d] mt-1.5 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {item.associatedProject && (
                <button
                  onClick={() => onSelectProject(item.associatedProject)}
                  className="pt-4 border-t border-[#e3e1dc] flex items-center justify-between text-[11px] uppercase tracking-editorial font-bold text-[#1a1a1a] hover:text-[#5a5d4d] transition-colors cursor-pointer"
                >
                  <span>Exemplar: {item.associatedProject.title}</span>
                  <span className="material-symbols-outlined text-sm">
                    north_east
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Commission Banner */}
        <div className="p-12 bg-[#1a1a1a] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
              Bespoke Practice
            </div>
            <h3 className="font-serif text-3xl text-white">
              Ready to Commission an Exterior Masterplan?
            </h3>
            <p className="text-sm text-white/70 font-light mt-1">
              Currently scheduling pre-design site inspections for upcoming
              estate intakes.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-white text-[#1a1a1a] hover:bg-[#e3e1dc] px-8 py-4 text-xs font-semibold tracking-architectural uppercase transition-colors cursor-pointer"
          >
            Request Private Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
