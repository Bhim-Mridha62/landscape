import React, { useState } from "react";

interface HowWeWorkProps {
  onNavigateToProcess: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      num: "1",
      name: "DISCOVERY",
      subtitle: "Interior & Exterior Assessment",
      timeline: "Interior - 2 Days / Exterior - 2 Days",
      icon: "explore",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      description:
        "We begin by understanding your needs and vision. Our team conducts a thorough assessment to ensure we capture every detail and requirement, setting the foundation for a successful project.",
      deliverables: [
        "Interior - 2 Days",
        "Exterior - 2 Days",
        "Needs & Vision Assessment",
      ],
    },
    {
      num: "2",
      name: "DESIGN",
      subtitle: "Tailored Concepts & Alignment",
      timeline: "Interior - 4-6 Weeks / Exterior - 1-2 Weeks",
      icon: "draw",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      description:
        "Our designers create tailored concepts that reflect your style and preferences. We work closely with you to refine the design, ensuring every element aligns with your vision and enhances your space.",
      deliverables: [
        "Interior - 4-6 Weeks",
        "Exterior - 1-2 Weeks",
        "Concept Refinement & Alignment",
      ],
    },
    {
      num: "3",
      name: "FINALIZATION",
      subtitle: "Materials, Timelines & Budgets",
      timeline: "Interior - 2-3 Weeks / Exterior - 1-2 Weeks",
      icon: "verified",
      image:
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&q=80",
      description:
        "Once the design is approved, we finalize all details, including materials, timelines, and budgets. This phase ensures everything is in place for a smooth transition to the next stage.",
      deliverables: [
        "Interior - 2-3 Weeks",
        "Exterior - 1-2 Weeks",
        "Materials & Budget Approval",
      ],
    },
    {
      num: "4",
      name: "CONSTRUCTION",
      subtitle: "Precision Execution & Oversight",
      timeline: "Interior - 5-10 Months / Exterior - 1-2 Months",
      icon: "construction",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      description:
        "Our skilled team brings the design to life with precision and care. From start to finish, we oversee every aspect of construction, ensuring a flawless execution and a stunning result.",
      deliverables: [
        "Interior - 5-10 Months",
        "Exterior - 1-2 Months",
        "Flawless Execution & Oversight",
      ],
    },
  ];

  return (
    <section
      id="how-we-work"
      className="w-full bg-[#f9f9f8] py-6 md:py-16 border-b border-[#e3e1dc]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                Process Overview
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight leading-[1.15]">
              Our Complete Project <br className="hidden sm:inline" />
              Timeline &amp; Phases.
            </h2>
          </div>
        </div>

        {/* 4 Interactive Cards with Exact Image Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stages.map((stage) => {
            return (
              <div
                key={stage.num}
                className={`relative h-[440px] rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between p-6 transition-all duration-500`}
              >
                {/* Background Image with Dark Vignette */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
                </div>

                {/* Top Bar: Phase Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-white/15 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase rounded">
                    PHASE {stage.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-base">
                      {stage.icon}
                    </span>
                  </div>
                </div>

                {/* Bottom Content Area - Strictly matching image text */}
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl text-white font-normal mb-3">
                    PHASE {stage.num}: {stage.name}
                  </h3>

                  <div className="space-y-1 mb-3 text-stone-200 text-xs font-mono">
                    <div>
                      Interior -{" "}
                      {stage.num === "1"
                        ? "2 Days"
                        : stage.num === "2"
                          ? "4-6 Weeks"
                          : stage.num === "3"
                            ? "2-3 Weeks"
                            : "5-10 Months"}
                    </div>
                    <div>
                      Exterior -{" "}
                      {stage.num === "1"
                        ? "2 Days"
                        : stage.num === "2"
                          ? "1-2 Weeks"
                          : stage.num === "3"
                            ? "1-2 Weeks"
                            : "1-2 Months"}
                    </div>
                  </div>

                  <p className="text-stone-300 text-xs leading-relaxed font-light mb-4 line-clamp-3">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
