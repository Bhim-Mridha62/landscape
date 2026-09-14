import React from 'react';
import { STUDIO_STATISTICS } from '../data/content';

export const StatsBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#f2f1ee] border-b border-[#e3e1dc] py-16 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STUDIO_STATISTICS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center px-0 lg:px-8 ${
                idx !== 0 ? 'lg:border-l lg:border-[#e3e1dc]' : ''
              }`}
            >
              <div className="font-serif text-4xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight mb-2">
                {stat.number}
              </div>
              <div className="text-[11px] uppercase tracking-editorial text-[#8c857b] font-medium leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
