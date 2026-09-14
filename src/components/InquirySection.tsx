import React from 'react';

interface InquirySectionProps {
  onOpenConsultation: () => void;
  onOpenMonograph: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  onOpenConsultation,
  onOpenMonograph,
}) => {
  return (
    <section className="w-full bg-[#f2f1ee] py-24 sm:py-32 border-b border-[#e3e1dc]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              Bespoke Commissions
            </span>
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight mb-6">
            Commence Your Architectural Sanctuary
          </h2>

          <p className="text-[#444748] text-base sm:text-lg font-light leading-relaxed mb-10">
            We welcome private estate inquiries for forthcoming seasonal architectural masterplans
            across North America, Europe, and select coastal retreats.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#1a1a1a] text-[#f9f9f8] hover:bg-[#5a5d4d] px-8 py-4 text-xs font-semibold tracking-architectural uppercase transition-all duration-200 cursor-pointer shadow-sm"
            >
              Request Private Consultation
            </button>

            <button
              onClick={onOpenMonograph}
              className="border border-[#1a1a1a] text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white px-8 py-4 text-xs font-semibold tracking-architectural uppercase transition-all duration-200 cursor-pointer"
            >
              Download Monograph
            </button>
          </div>

          <div className="mt-12 text-[10px] uppercase tracking-widest text-[#8c857b] font-mono">
            Currently Reviewing Commissions for Autumn 2026 / Spring 2027
          </div>
        </div>
      </div>
    </section>
  );
};
