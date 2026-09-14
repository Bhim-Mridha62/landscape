import React, { useState } from "react";
import { JOURNAL_ARTICLES } from "../data/content";

interface JournalViewProps {
  onOpenConsultation: () => void;
}

export const JournalView: React.FC<JournalViewProps> = ({
  onOpenConsultation,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
    null
  );

  const topics = [
    "All",
    "Material Studies",
    "Botanical Curation",
    "Water Architecture",
    "Practice & Ethos",
  ];

  const filteredArticles =
    selectedTopic === "All"
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.category === selectedTopic);

  const activeArticle = JOURNAL_ARTICLES.find(
    (a) => a.id === selectedArticleId
  );

  return (
    <div className="w-full bg-[#f9f9f8] pt-28 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                Monographic Journal &amp; Publications (/blog/)
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1a1c1c] font-normal tracking-tight">
              Design Research &amp; Field Studies
            </h1>
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#8c857b] font-mono pb-2">
            Volume XXIV • Archive 2024—2026
          </div>
        </div>

        {/* Topic Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-12 border-b border-[#e3e1dc]">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-5 py-2.5 text-xs uppercase tracking-editorial transition-all cursor-pointer ${
                selectedTopic === topic
                  ? "bg-[#1a1a1a] text-white font-semibold"
                  : "bg-[#f2f1ee] text-[#444748] hover:bg-[#e3e1dc] hover:text-[#1a1a1a]"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Article Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 sm:gap-12 mb-24">
          {filteredArticles.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticleId(article.id)}
              className="bg-[#f2f1ee] border border-[#e3e1dc] overflow-hidden flex flex-col group hover:border-[#1a1a1a] transition-all cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm text-white px-3 py-1 text-[9px] uppercase tracking-widest font-mono">
                  {article.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-widest font-mono text-[#1a1c1c]">
                  {article.readTime}
                </div>
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-3">
                    <span>{article.date}</span>
                    <span>Document Ref #0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] font-normal mb-3 leading-snug group-hover:text-[#5a5d4d] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-[#444748] text-sm font-light leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#e3e1dc] flex items-center justify-between text-xs uppercase tracking-editorial font-bold text-[#1a1a1a]">
                  <span>Read Full Field Monograph</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal / Reading View for Individual Article */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8">
            <div className="bg-[#f9f9f8] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#1a1a1a] p-8 sm:p-12 relative">
              <button
                onClick={() => setSelectedArticleId(null)}
                className="absolute top-6 right-6 text-[#1a1c1c] hover:text-[#5a5d4d] p-2 focus:outline-none cursor-pointer"
                aria-label="Close article"
              >
                <span className="material-symbols-outlined text-2xl">
                  close
                </span>
              </button>

              <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
                {activeArticle.category} • {activeArticle.date} • {activeArticle.readTime}
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1c1c] mb-6 leading-tight">
                {activeArticle.title}
              </h2>

              <div className="aspect-[16/9] mb-8 overflow-hidden bg-black">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-base text-[#1a1c1c] font-serif italic mb-6 leading-relaxed">
                "{activeArticle.excerpt}"
              </p>

              <div className="space-y-4 text-sm text-[#444748] font-light leading-relaxed mb-10">
                <p>
                  Architectural landscape design is inherently a temporal art.
                  Unlike interior masonry or static structural framing,
                  the botanical and hydraulic layers of an estate evolve across
                  decades, responding to sun angles, seasonal hydrology, and
                  subterranean root expansion.
                </p>
                <p>
                  In this monograph study, our research studio examines the
                  structural tolerances of natural basalt masonry, the acoustic
                  principles of knife-edge water weirs, and the biological
                  mycorrhizal inoculation protocols required to preserve
                  century-old specimens during transcontinental relocations.
                </p>
                <p>
                  Every commission documented here reflects our core philosophy:
                  built form must ultimately yield to the living horizon,
                  creating timeless sanctuaries for generations to come.
                </p>
              </div>

              <div className="pt-6 border-t border-[#e3e1dc] flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticleId(null)}
                  className="border border-[#1a1a1a] px-6 py-2.5 text-xs uppercase tracking-editorial text-[#1a1a1a] hover:bg-[#f2f1ee] transition-colors cursor-pointer"
                >
                  ← Close Monograph
                </button>
                <button
                  onClick={() => {
                    setSelectedArticleId(null);
                    onOpenConsultation();
                  }}
                  className="bg-[#1a1a1a] text-white px-6 py-2.5 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                >
                  Discuss Project
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Consultation CTA Banner */}
        <div className="p-12 bg-[#f2f1ee] border border-[#e3e1dc] text-center max-w-3xl mx-auto">
          <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-3">
            Architectural Inquiries &amp; Consultations
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] mb-4">
            Commission an Architectural Landscape
          </h3>
          <p className="text-xs sm:text-sm text-[#444748] font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Our atelier accepts a limited number of estate commissions each season to ensure uncompromising craftsmanship and direct principal oversight.
          </p>
          <button
            onClick={onOpenConsultation}
            className="bg-[#1a1a1a] text-white px-8 py-3.5 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
