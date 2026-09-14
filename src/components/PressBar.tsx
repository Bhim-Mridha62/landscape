import React from 'react';
import { PRESS_HONORS } from '../data/content';

export const PressBar: React.FC = () => {
  return (
    <section className="w-full bg-[#f2f1ee] border-b border-[#e3e1dc] py-8">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="shrink-0 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#8c857b]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              Honored &amp; Profiled In
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
            {PRESS_HONORS.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-center border-l border-[#e3e1dc] pl-4 transition-colors"
              >
                <span className="font-serif text-xs sm:text-[13px] tracking-wide text-[#1a1c1c] font-medium group-hover:text-[#5a5d4d] transition-colors whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#8c857b] mt-0.5 whitespace-nowrap">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
