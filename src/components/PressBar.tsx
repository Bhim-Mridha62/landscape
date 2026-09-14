import React from "react";
import { PRESS_HONORS } from "../data/content";

export const PressBar: React.FC = () => {
  return (
    <section className="w-full bg-[#f2f1ee] border-b border-[#e3e1dc] py-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mb-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#8c857b]" />
          <span className="text-[10px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
            Honored &amp; Profiled In
          </span>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group">
        {/* Gradient Fade Edges for smooth look */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f2f1ee] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f2f1ee] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track (Duplicated for infinite seamless loop) */}
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {[...PRESS_HONORS, ...PRESS_HONORS].map((item, idx) => (
            <div
              key={idx}
              className="group/item flex flex-col justify-center border-l border-[#e3e1dc] pl-6 shrink-0 transition-colors"
            >
              <span className="font-serif text-xs sm:text-[13px] tracking-wide text-[#1a1c1c] font-medium group-hover/item:text-[#5a5d4d] transition-colors">
                {item.name}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#8c857b] mt-0.5">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
