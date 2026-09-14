import React, { useState } from "react";
import {
  STUDIO_PRINCIPALS_IMAGE_URL,
  STUDIO_PRINCIPALS,
  BLUEPRINT_DESK_IMAGE_URL,
  TESTIMONIALS,
} from "../data/content";

interface AboutViewProps {
  onOpenConsultation: () => void;
  onOpenMonograph: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenConsultation,
  onOpenMonograph,
}) => {
  const [activeTab, setActiveTab] = useState<"story" | "team" | "testimonials">(
    "story"
  );
  const [activeTeamFilter, setActiveTeamFilter] = useState<string>("All");

  const teamMembers = [
    {
      name: "Julian Vance",
      role: "Co-Founder & Principal Landscape Architect",
      discipline: "Topography & Master Planning",
      experience: "24 Years",
      origin: "Zurich / Los Angeles",
      bio: "Master of Architecture from ETH Zurich. Oversees macro site cartography, structural axis alignments, and quarry excavations across Europe and North America.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Elena Rostova",
      role: "Co-Founder & Botanical Director",
      discipline: "Specimen Arboreal & Living Ecology",
      experience: "22 Years",
      origin: "Kyoto / New York",
      bio: "Trained at Kyoto University’s Department of Forest Science. Renowned for transcontinental specimen curation, ancient olive tree preservation, and microclimate layering.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Marcus Thorne, AIA",
      role: "Senior Architectural Director",
      discipline: "Hardscape & Concrete Engineering",
      experience: "16 Years",
      origin: "London",
      bio: "Specializes in post-tensioned cantilevered plinths, knife-edge pool weir profiles, and zero-grout stone joinery.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Sarah Lin",
      role: "Director of Ecological Science",
      discipline: "Soil Horizons & Substratum Hydrology",
      experience: "14 Years",
      origin: "Vancouver",
      bio: "Ph.D. in Soil Microbiology from UC Berkeley. Leads subterranean mycorrhizal inoculation protocols for 99.4% transplant survival rates.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Giacomo Bellini",
      role: "Master Stonemason & Masonry Curator",
      discipline: "Monolithic Dry-Stack Masonry",
      experience: "28 Years",
      origin: "Carrara, Italy",
      bio: "Fifth-generation Italian stonemason overseeing quarry selection and hand-chiseled dry-joint retaining wall systems.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kenji Takahashi",
      role: "Master Niwaki Arborist",
      discipline: "Coniferous Sculpture & Japanese Pine Curation",
      experience: "31 Years",
      origin: "Niigata, Japan",
      bio: "Dedicated master of traditional Japanese cloud pruning (niwaki) with over three decades pruning multi-century specimen pines.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dmitri Volkov",
      role: "Lead Hydraulic Systems Engineer",
      discipline: "Acoustic Attenuation & Water Vaults",
      experience: "18 Years",
      origin: "Munich",
      bio: "Designs silent surge tanks, subterranean acoustic attenuation vaults, and dual-saline reflection basin circulation.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Claire Beaumont",
      role: "Twilight Illumination Choreographer",
      discipline: "2700K Museum-Grade Optical Design",
      experience: "12 Years",
      origin: "Paris",
      bio: "Specialist in glare-shielded low-voltage brass optics, twilight transition matrices, and star-safe dark-sky compliances.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const clientStories = [
    {
      id: "estate-01",
      client: "Lord & Lady Sterling",
      estate: "The Cap d'Antibes Coastal Villa",
      location: "French Riviera, France",
      acreage: "4.5 Hectares",
      year: "2025",
      quote:
        "Aura dissolved the boundary between our cliffside living salon and the Mediterranean. The century-old olive grove looks as if it has stood on this promontory since antiquity.",
      scope:
        "Knife-Edge Infinity Basin, 60-Year Niigata Cloud Pines, Sardinian Basalt Plinths, Concealed Acoustic Water Vaults",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "estate-02",
      client: "Hiroshi & Maya Tanaka",
      estate: "The Kyoto Hillside Residence",
      location: "Higashiyama, Kyoto",
      acreage: "1.8 Acres",
      year: "2024",
      quote:
        "The dialogue between modern cast concrete and ancient raked karesansui gravel is transcendent. Elena and Julian understand the soul of Japanese stonecraft.",
      scope:
        "Dry-Stacked Kyoto Granite, Biological Koi Stream, Dormant Moss Terraces, 2700K Twilight Optical Illuminations",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "estate-03",
      client: "Dr. Arthur Pendelton",
      estate: "Meadow Lane Oceanfront Compound",
      location: "Southampton, New York",
      acreage: "6.2 Acres",
      year: "2025",
      quote:
        "Navigating coastal zoning in Southampton is daunting. Aura managed every environmental permit flawlessly while delivering an architectural masterwork.",
      scope:
        "Coastal Dune Restoration, Post-Tensioned Cantilevered Fire Amphitheater, Specimen Grass Meadow, Heated Saline Plunge Basin",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const teamDisciplines = [
    "All",
    "Principals & Directors",
    "Stonemasons & Hardscape",
    "Arborists & Living Ecology",
    "Hydraulics & Lighting",
  ];

  const filteredTeam =
    activeTeamFilter === "All"
      ? teamMembers
      : teamMembers.filter((m) => {
          if (activeTeamFilter === "Principals & Directors")
            return m.role.includes("Principal") || m.role.includes("Director");
          if (activeTeamFilter === "Stonemasons & Hardscape")
            return m.discipline.includes("Masonry") || m.discipline.includes("Hardscape");
          if (activeTeamFilter === "Arborists & Living Ecology")
            return m.discipline.includes("Ecology") || m.discipline.includes("Pine");
          if (activeTeamFilter === "Hydraulics & Lighting")
            return m.discipline.includes("Hydraulic") || m.discipline.includes("Optical");
          return true;
        });

  return (
    <div className="w-full bg-[#f9f9f8] pt-28 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Navigation Sub-Tabs: Story vs Team vs Client Stories */}
        <div className="flex flex-wrap items-center gap-3 pb-8 mb-16 border-b border-[#e3e1dc]">
          <button
            onClick={() => setActiveTab("story")}
            className={`px-6 py-3 text-xs uppercase tracking-editorial transition-all cursor-pointer font-semibold ${
              activeTab === "story"
                ? "bg-[#1a1a1a] text-white"
                : "bg-[#f2f1ee] text-[#444748] hover:bg-[#e3e1dc]"
            }`}
          >
            Company Story &amp; Ethos
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`px-6 py-3 text-xs uppercase tracking-editorial transition-all cursor-pointer font-semibold ${
              activeTab === "team"
                ? "bg-[#1a1a1a] text-white"
                : "bg-[#f2f1ee] text-[#444748] hover:bg-[#e3e1dc]"
            }`}
          >
            Multidisciplinary Team (8 Masters)
          </button>
          <button
            onClick={() => setActiveTab("testimonials")}
            className={`px-6 py-3 text-xs uppercase tracking-editorial transition-all cursor-pointer font-semibold ${
              activeTab === "testimonials"
                ? "bg-[#1a1a1a] text-white"
                : "bg-[#f2f1ee] text-[#444748] hover:bg-[#e3e1dc]"
            }`}
          >
            Client Stories (/our-testimonials/)
          </button>
        </div>

        {/* TAB 1: COMPANY STORY & ETHOS */}
        {activeTab === "story" && (
          <div>
            {/* Header */}
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[#1a1a1a]" />
                <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                  The Practice &amp; Story (/about-us/)
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl text-[#1a1c1c] font-normal tracking-tight mb-6">
                Where Built Form Yields to the Living Horizon
              </h1>
              <p className="text-[#444748] text-base sm:text-lg font-light leading-relaxed">
                Founded in 2002 by Julian Vance and Elena Rostova, Aura Landscape creates exterior
                environments that bridge architectural geometry with primordial terrain.
              </p>
            </div>

            {/* Founders Feature Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 bg-[#f2f1ee] border border-[#e3e1dc] p-8 sm:p-14">
              <div className="lg:col-span-6 aspect-[4/3] overflow-hidden bg-black border border-[#e3e1dc]">
                <img
                  src={STUDIO_PRINCIPALS_IMAGE_URL}
                  alt="Julian Vance & Elena Rostova"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
                  Principals &amp; Founders
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1c1c] mb-4">
                  {STUDIO_PRINCIPALS.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#444748] font-light leading-relaxed mb-6">
                  {STUDIO_PRINCIPALS.bio}
                </p>
                <p className="text-xs sm:text-sm text-[#444748] font-light leading-relaxed mb-8">
                  Their multidisciplinary studio includes registered landscape architects, structural
                  stonemasons, hydraulic engineers, and master arborists dedicated to the highest tier of
                  residential craft.
                </p>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#e3e1dc] mb-8">
                  {STUDIO_PRINCIPALS.practiceStats.map((stat, i) => (
                    <div key={i}>
                      <div className="font-serif text-3xl text-[#1a1c1c]">{stat.value}</div>
                      <div className="text-[9px] uppercase tracking-editorial text-[#8c857b]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveTab("team")}
                    className="bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                  >
                    View Studio Team
                  </button>
                  <button
                    onClick={onOpenMonograph}
                    className="border border-[#1a1a1a] px-6 py-3 text-xs uppercase tracking-editorial text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
                  >
                    Read Monograph
                  </button>
                </div>
              </div>
            </div>

            {/* The Twelve Commission Doctrine */}
            <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2 block">
                  Core Practice Principle
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1a1c1c] mb-6">
                  The Twelve Rule
                </h3>
                <p className="text-sm text-[#444748] font-light leading-relaxed mb-4">
                  By strictly capping our concurrent commissions at twelve residential estates
                  worldwide, we protect the sanctity of direct principal engagement.
                </p>
                <p className="text-sm text-[#444748] font-light leading-relaxed">
                  Julian Vance and Elena Rostova personally conduct all topographical site inspections,
                  material quarry visits, and specimen tree tagging.
                </p>
              </div>

              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-black border border-[#e3e1dc]">
                <img
                  src={BLUEPRINT_DESK_IMAGE_URL}
                  alt="Atelier Drafting Desk"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TEAM SECTIONS */}
        {activeTab === "team" && (
          <div>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[#1a1a1a]" />
                <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                  Multidisciplinary Atelier
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight mb-4">
                Master Craftsmen &amp; Architectural Principals
              </h2>
              <p className="text-[#444748] text-sm sm:text-base font-light leading-relaxed">
                Meet the specialized directors, stonemasons, hydraulic engineers, and arborists
                who shape every square meter of our estate commissions.
              </p>
            </div>

            {/* Team Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-[#e3e1dc]">
              {teamDisciplines.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTeamFilter(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-editorial transition-all cursor-pointer ${
                    activeTeamFilter === cat
                      ? "bg-[#1a1a1a] text-white font-semibold"
                      : "bg-[#f2f1ee] text-[#444748] hover:bg-[#e3e1dc]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {filteredTeam.map((member, i) => (
                <div
                  key={i}
                  className="bg-[#f2f1ee] border border-[#e3e1dc] overflow-hidden flex flex-col justify-between group hover:border-[#1a1a1a] transition-all"
                >
                  <div>
                    <div className="aspect-[4/5] overflow-hidden bg-black">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-[9px] uppercase font-mono tracking-widest text-[#8c857b] mb-1">
                        {member.origin} • {member.experience}
                      </div>
                      <h3 className="font-serif text-xl text-[#1a1c1c] mb-1 font-normal">
                        {member.name}
                      </h3>
                      <div className="text-[11px] uppercase tracking-editorial text-[#5a5d4d] font-semibold mb-3">
                        {member.role}
                      </div>
                      <p className="text-xs text-[#444748] font-light leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-4 border-t border-[#e3e1dc] bg-white/50 text-[10px] font-mono text-[#8c857b]">
                    Specialty: {member.discipline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CLIENT STORIES (/our-testimonials/) */}
        {activeTab === "testimonials" && (
          <div>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[#1a1a1a]" />
                <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                  Verified Patron Dossiers (/our-testimonials/)
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight mb-4">
                Client Stories &amp; Estate Testimonials
              </h2>
              <p className="text-[#444748] text-sm sm:text-base font-light leading-relaxed">
                Reflections from estate owners, art collectors, and architectural patrons
                whose private sanctuaries were conceived by Aura.
              </p>
            </div>

            {/* Client Stories Cards Grid */}
            <div className="space-y-12 mb-24">
              {clientStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-[#f2f1ee] border border-[#e3e1dc] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-5 aspect-[16/10] overflow-hidden bg-black border border-[#e3e1dc]">
                    <img
                      src={story.image}
                      alt={story.estate}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
                        {story.location} • Completed {story.year} • {story.acreage}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] mb-2">
                        {story.estate}
                      </h3>
                      <div className="text-xs uppercase tracking-editorial text-[#5a5d4d] font-semibold mb-6">
                        Patron: {story.client}
                      </div>

                      <blockquote className="font-serif text-lg sm:text-xl text-[#1a1c1c] italic leading-relaxed mb-6 border-l-2 border-[#1a1a1a] pl-4">
                        "{story.quote}"
                      </blockquote>
                    </div>

                    <div className="p-4 bg-white/70 border border-[#e3e1dc] text-xs font-mono">
                      <span className="text-[#8c857b] uppercase block text-[9px] mb-1">
                        Delivered Scope:
                      </span>
                      <span className="text-[#1a1c1c] font-medium">
                        {story.scope}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consultation Banner */}
        <div className="p-12 bg-[#1a231c] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-white/60 mb-2">
              Private Commissions
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Ready to Discuss an Architectural Landscape?
            </h3>
            <p className="text-sm text-white/75 font-light mt-1">
              Speak directly with Julian Vance and Elena Rostova regarding upcoming seasonal availability.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-white text-[#1a1c1c] hover:bg-[#e3e1dc] px-8 py-4 text-xs font-semibold tracking-architectural uppercase transition-colors cursor-pointer"
          >
            Arrange Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
