import React, { useState } from "react";

interface ProcessViewProps {
  onOpenConsultation: () => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({
  onOpenConsultation,
}) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const stages = [
    {
      num: "01",
      name: "Discovery",
      subtitle: "Site Ecology & Spatial Cartography",
      tagline: "Weeks 1–4 • Terrain, Microclimate & Vision Alignment",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      description:
        "Every commission begins with an forensic investigation into the site’s natural geometry. We capture millimeter-precise 3D LiDAR point clouds, sample geological substrata, and map sun paths across all four seasonal equinoxes.",
      milestones: [
        "3D LiDAR Point-Cloud Topography & Aerial Drone Survey",
        "Bedrock Threshold & Substratum Soil pH Borehole Analysis",
        "Solar Radiation & Microclimate Wind Corridor Mapping",
        "Architectural Axial Alignment with Primary Residence Sightlines",
      ],
      deliverable: "Topographical Master Atlas & Ecological Feasibility Dossier",
    },
    {
      num: "02",
      name: "Design",
      subtitle: "Architectural Concept & Materiality Matrices",
      tagline: "Weeks 5–12 • Spatial Geometry & Material Selection",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      description:
        "We sculpt the physical threshold between interior living spaces and open horizons. We draft custom hardscape stonework, knife-edge pool weir profiles, and curatorial botanical palettes.",
      milestones: [
        "1:50 Scale Monographic Masterplan Drawings & 3D Spatial Renders",
        "Direct Quarry Specimen Sampling (Basalt, Travertine, Granite)",
        "Hydraulic Water Flow & Acoustic Attenuation Engineering",
        "Curated Botanical Palette & Specimen Tree Silhouette Choreography",
      ],
      deliverable: "Comprehensive Architectural Landscape Master Plan",
    },
    {
      num: "03",
      name: "Finalization",
      subtitle: "Engineering, Permitting & Specimen Procurement",
      tagline: "Weeks 13–18 • Technical Detailing & Sourcing Contracts",
      image:
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&q=80",
      description:
        "Before ground is broken, all municipal coastal and environmental permits are secured. We dispatch our arborists and stonemasons across Europe and Japan to hand-tag ancient specimens and lock quarry blocks.",
      milestones: [
        "Environmental Impact & Coastal Commission Permit Dossiers",
        "Structural Engineering Review with Seismic & Hydraulic Calculations",
        "Hand-Tagging Century-Old Olive Groves & Japanese Black Pines",
        "Fixed-Price Craft Execution Schedule & Master Procurement Register",
      ],
      deliverable: "Stamped Construction Package & Certified Specimen Registry",
    },
    {
      num: "04",
      name: "Construction",
      subtitle: "Master Stonemasonry, Rigging & Living Stewardship",
      tagline: "Months 5–14 • Bespoke On-Site Execution",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      description:
        "Our dedicated master stonemasons and field arborists oversee the transformation. Dry-stacked walls are chiseled by hand, mature specimen trees are craned into position with mycorrhizal root feeds, and lighting choreography is calibrated at twilight.",
      milestones: [
        "Precision Zero-Grout Monolithic Stone Terrace Installation",
        "Heavy-Crane Specimen Tree Rigging with 99.4% Survival Guarantee",
        "Subterranean Water Re-circulation & Ozone Filtration Commissioning",
        "2700K Museum-Grade Architectural Nightscape Illumination Setup",
      ],
      deliverable: "Completed Estate Sanctuary & Handover Stewardship Manual",
    },
  ];

  const faqs = [
    {
      question: "How does Aura collaborate with our primary residential architect?",
      answer:
        "We engage directly with your Architect of Record from schematic design onward. Our team integrates CAD/BIM models to coordinate structural slab elevations, concealed threshold drains, flush paving levels, and unobstructed sightline corridors across glass façades.",
    },
    {
      question: "What is the typical timeline for an estate exterior transformation?",
      answer:
        "Timelines typically range from 6 to 14 months depending on estate acreage, topographical complexity, and municipal permitting. The Discovery and Design phases require 12 to 18 weeks, followed by staged site excavation, stonemasonry, and botanical installation.",
    },
    {
      question: "How are municipal, environmental, and coastal permits handled?",
      answer:
        "Our in-house regulatory team prepares complete environmental impact reports, erosion mitigation plans, and tree preservation documentation. We liaise directly with coastal commissions and municipal review boards to ensure full compliance.",
    },
    {
      question: "Can we hand-select specimen trees and quarry stone blocks?",
      answer:
        "Yes. We offer escorted private sourcing visits for patrons. You may accompany our principals to historic nurseries in Japan, centuries-old olive orchards in Tuscany, and volcanic basalt quarries in Sardinia to tag individual living specimens and stone blocks.",
    },
    {
      question: "How are client privacy and non-disclosure agreements handled?",
      answer:
        "All commissions are conducted under strict non-disclosure protocols. Estate addresses, aerial photography, and client identities are securely encrypted in our Private Client Vault and never published without explicit written authorization.",
    },
    {
      question: "What ongoing stewardship is provided after completion?",
      answer:
        "We offer perpetual living stewardship packages. Our master arborists and hydraulic engineers perform quarterly soil diagnostic tests, seasonal specimen pruning, and water system calibrations to ensure the estate matures gracefully for decades.",
    },
  ];

  return (
    <div className="w-full bg-[#f9f9f8] pt-28 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              Methodology &amp; Stages (/our-process/)
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#1a1c1c] font-normal tracking-tight mb-6">
            Four Stages to Architectural Permanence
          </h1>
          <p className="text-[#444748] text-base sm:text-lg font-light leading-relaxed">
            From raw bedrock mapping to the final millimeter alignment of honed
            travertine, our four-stage framework ensures rigorous execution,
            uncompromising craft, and direct principal oversight.
          </p>
        </div>

        {/* Stage Navigation Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stages.map((st, idx) => (
            <button
              key={st.num}
              onClick={() => setActiveStage(idx)}
              className={`p-5 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                activeStage === idx
                  ? "border-[#1a1a1a] bg-[#1a231c] text-white shadow-md"
                  : "border-[#e3e1dc] bg-[#f2f1ee] text-[#1a1c1c] hover:border-[#8c857b]"
              }`}
            >
              <div className="flex items-center justify-between mb-3 font-mono text-xs">
                <span className={activeStage === idx ? "text-white/70" : "text-[#8c857b]"}>
                  STAGE {st.num}
                </span>
                <span className="material-symbols-outlined text-sm">
                  {idx === 0
                    ? "explore"
                    : idx === 1
                    ? "draw"
                    : idx === 2
                    ? "verified"
                    : "construction"}
                </span>
              </div>
              <div className="font-serif text-lg sm:text-xl font-normal">
                {st.name}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Showcase */}
        {(() => {
          const curr = stages[activeStage];
          return (
            <div className="bg-[#f2f1ee] border border-[#e3e1dc] p-8 sm:p-14 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-black border border-[#e3e1dc]">
                <img
                  src={curr.image}
                  alt={curr.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
                  Stage {curr.num} • {curr.tagline}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1c1c] mb-2">
                  {curr.name}
                </h2>
                <div className="text-xs uppercase tracking-editorial text-[#5a5d4d] font-semibold mb-4">
                  {curr.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[#444748] font-light leading-relaxed mb-6">
                  {curr.description}
                </p>

                <div className="mb-6 pt-4 border-t border-[#e3e1dc]">
                  <div className="text-[9px] uppercase font-mono tracking-widest text-[#8c857b] mb-3">
                    Stage Milestones:
                  </div>
                  <div className="space-y-2">
                    {curr.milestones.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex items-start gap-2.5 text-xs text-[#1a1c1c]"
                      >
                        <span className="w-1.5 h-1.5 bg-[#5a5d4d] mt-1.5 shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 p-4 border border-[#e3e1dc] text-xs font-mono mb-6">
                  <span className="text-[#8c857b] uppercase block text-[9px] mb-1">
                    Key Deliverable:
                  </span>
                  <span className="text-[#1a1c1c] font-semibold">
                    {curr.deliverable}
                  </span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="self-start bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                >
                  Initiate Stage {curr.num} Discovery
                </button>
              </div>
            </div>
          );
        })()}

        {/* Four Stages Comprehensive Grid */}
        <div className="mb-28">
          <div className="text-[11px] uppercase font-mono tracking-widest text-[#8c857b] mb-8">
            Complete Architectural Stage Sequence
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((st, i) => (
              <div
                key={st.num}
                onClick={() => setActiveStage(i)}
                className={`p-6 border flex flex-col justify-between cursor-pointer transition-all ${
                  activeStage === i
                    ? "border-[#1a1a1a] bg-white shadow-sm"
                    : "border-[#e3e1dc] bg-[#f9f9f8] hover:border-[#8c857b]"
                }`}
              >
                <div>
                  <div className="font-mono text-2xl text-[#8c857b] mb-4">
                    {st.num}
                  </div>
                  <h3 className="font-serif text-2xl text-[#1a1c1c] mb-2">
                    {st.name}
                  </h3>
                  <div className="text-[10px] uppercase tracking-editorial text-[#5a5d4d] font-semibold mb-3">
                    {st.subtitle}
                  </div>
                  <p className="text-xs text-[#444748] font-light leading-relaxed line-clamp-3 mb-6">
                    {st.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e3e1dc] text-[10px] font-mono text-[#8c857b]">
                  {st.tagline}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section (Page Sections: Four Stages + FAQs) */}
        <div id="faqs" className="border-t border-[#e3e1dc] pt-20">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                Frequently Asked Inquiries
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight">
              Process &amp; Commission FAQs
            </h2>
            <p className="text-[#444748] text-sm sm:text-base font-light leading-relaxed mt-4">
              Detailed answers on our architectural collaboration model,
              patron privacy standards, procurement logistics, and estate delivery.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="bg-[#f2f1ee] border border-[#e3e1dc] transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#1a1c1c]">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-2xl text-[#5a5d4d] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-[#444748] font-light leading-relaxed border-t border-[#e3e1dc]/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-12 bg-[#1a231c] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-white/60 mb-2">
              Bespoke Intake
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Have Specific Site or Architectural Questions?
            </h3>
            <p className="text-sm text-white/75 font-light mt-1">
              Speak directly with our planning team regarding your estate’s topography.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-white text-[#1a1c1c] hover:bg-[#e3e1dc] px-8 py-4 text-xs font-semibold tracking-architectural uppercase transition-colors cursor-pointer"
          >
            Schedule Planning Call
          </button>
        </div>
      </div>
    </div>
  );
};
