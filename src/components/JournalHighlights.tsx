import React from "react";
import { JOURNAL_ARTICLES } from "../data/content";

interface JournalHighlightsProps {
  onNavigateToJournal?: () => void;
}

export const JournalHighlights: React.FC<JournalHighlightsProps> = ({
  onNavigateToJournal,
}) => {
  return (
    <section
      id="journal-highlights"
      className="w-full bg-[#f2f1ee] py-10 border-b border-[#e3e1dc]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                Journal &amp; Research
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight leading-[1.15]">
              Design Highlights &amp; <br className="hidden sm:inline" />
              Project Stories
            </h2>
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#8c857b] font-mono pb-2">
            Latest Publications
          </div>
        </div>

        {/* Journal Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              onClick={onNavigateToJournal}
              className="bg-[#f9f9f8] border border-[#e3e1dc] overflow-hidden flex flex-col group hover:border-[#1a1a1a] transition-all duration-300 cursor-pointer"
            >
              {/* Article Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center img-zoom"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 text-[8px] uppercase tracking-widest font-mono">
                  {article.category}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  {/* Date */}
                  <div className="flex items-center justify-between text-[9px] uppercase font-mono tracking-widest text-[#8c857b] mb-3">
                    <span>{article.date}</span>
                    <span>Article 0{idx + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg text-[#1a1c1c] font-normal mb-3 leading-snug group-hover:text-[#5a5d4d] transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#444748] text-xs leading-relaxed font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-4 mt-4 border-t border-[#e3e1dc] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-editorial font-bold text-[#1a1a1a] group-hover:text-[#5a5d4d] transition-colors">
                    Read Article
                  </span>
                  <span className="material-symbols-outlined text-sm text-[#1a1a1a] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className=" mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#8c857b] font-light">
            Explore More Useful design articles and recent project stories
          </p>
          <button
            onClick={onNavigateToJournal}
            className="border border-[#1a1a1a] px-4 md:px-8 py-2 md:py-4 text-xs font-semibold tracking-architectural uppercase text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all cursor-pointer"
          >
            Browse Full Journal →
          </button>
        </div>
      </div>
    </section>
  );
};
