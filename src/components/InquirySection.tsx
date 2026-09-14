import React from "react";

interface InquirySectionProps {
  onOpenConsultation: () => void;
  onOpenMonograph: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  onOpenConsultation,
  onOpenMonograph,
}) => {
  return (
    <section
      id="inquiry"
      className="w-full bg-[#121212] py-10 py-20 border-b border-[#e3e1dc] text-white relative overflow-hidden"
    >
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5a5d4d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#d9c7bd]" />
            <span className="text-[11px] uppercase font-mono tracking-[0.3em] text-[#d9c7bd]">
              Bespoke Commissions
            </span>
            <span className="w-8 h-[1px] bg-[#d9c7bd]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight mb-8 leading-[1.1]">
            Design &amp; Build Your Dream With Us
          </h2>

          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Collaborate with Dubai&apos;s leading architects and master
            craftsmen. Whether you are envisioning a private estate
            transformation or a sophisticated interior sanctuary, we bring your
            architectural vision to life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <button
              onClick={onOpenConsultation}
              className="bg-[#d9c7bd] text-[#121212] hover:bg-white px-9 py-4 text-xs font-semibold tracking-architectural uppercase transition-all duration-200 cursor-pointer shadow-lg"
            >
              Request Private Consultation
            </button>

            <button
              onClick={onOpenMonograph}
              className="border border-stone-700 text-white bg-transparent hover:border-white px-9 py-4 text-xs font-semibold tracking-architectural uppercase transition-all duration-200 cursor-pointer"
            >
              Download Monograph
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
