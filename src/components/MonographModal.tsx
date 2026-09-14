import React, { useState } from 'react';
import {
  HERO_IMAGE_URL,
  GLASS_PAVILION_IMAGE_URL,
  AZURE_HORIZON_IMAGE_URL,
  STUDIO_PRINCIPALS_IMAGE_URL,
} from '../data/content';

interface MonographModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MonographModal: React.FC<MonographModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 4;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#f9f9f8] border border-[#1a1a1a] max-w-4xl w-full my-auto overflow-hidden shadow-2xl relative">
        {/* Monograph Top Bar */}
        <div className="h-16 px-6 sm:px-8 border-b border-[#e3e1dc] flex items-center justify-between bg-[#f2f1ee]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b]">
              Aura Monograph
            </span>
            <span className="text-[#8c857b]">•</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1a1c1c] font-semibold">
              Volume IV: The Architecture of Silence (Edition 2026)
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 border border-[#e3e1dc] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Monograph Editorial Canvas */}
        <div className="p-6 sm:p-12 max-h-[80vh] overflow-y-auto bg-[#fdfcfb]">
          {currentPage === 1 && (
            <div className="text-center py-6 sm:py-10">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#8c857b] font-mono mb-4">
                Private Publication • Aura Landscape Press
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#1a1c1c] font-normal tracking-tight mb-4">
                The Architecture of Silence
              </h2>
              <div className="font-serif italic text-lg sm:text-xl text-[#5a5d4d] mb-8">
                Geologic Permanence &amp; the Sculpted Horizon
              </div>

              <div className="relative aspect-[16/9] max-w-2xl mx-auto overflow-hidden border border-[#e3e1dc] mb-8">
                <img
                  src={HERO_IMAGE_URL}
                  alt="Monograph Cover Scene"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-w-xl mx-auto text-xs text-[#444748] font-light leading-relaxed mb-6">
                “When an exterior threshold is calibrated with architectural intention, the home
                ceases to end at glass. It claims the sky, the wind, and the stone.”
                <span className="block mt-2 font-mono text-[#8c857b]">
                  — Julian Vance &amp; Elena Rostova, 2026
                </span>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e3e1dc] mb-8">
                <span className="text-[10px] uppercase font-mono text-[#8c857b]">
                  Chapter 01: The Mineral Threshold
                </span>
                <span className="text-[10px] font-mono text-[#8c857b]">Pages 14–19</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div className="space-y-4 text-xs sm:text-sm text-[#444748] font-light leading-relaxed">
                  <h3 className="font-serif text-2xl text-[#1a1c1c] font-normal">
                    Precision Hardscape as Spatial Foundation
                  </h3>
                  <p>
                    Landscape is not decorative foliage applied after construction; it is the
                    subterranean grammar that anchors residential mass. By employing honed Roman
                    travertine and Sardinian basalt with hairline dry joints, we eliminate visual
                    noise.
                  </p>
                  <p>
                    Each step riser is calibrated to the natural stride of contemplation: 5.5
                    inches of rise against 18 inches of tread, grounding the occupant before the
                    reflection pool.
                  </p>
                </div>
                <div className="aspect-[4/3] bg-[#e3e1dc] overflow-hidden border border-[#e3e1dc]">
                  <img
                    src={GLASS_PAVILION_IMAGE_URL}
                    alt="The Glass Pavilion Monograph Plate"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e3e1dc] mb-8">
                <span className="text-[10px] uppercase font-mono text-[#8c857b]">
                  Chapter 02: Arboreal Curations
                </span>
                <span className="text-[10px] font-mono text-[#8c857b]">Pages 28–35</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div className="aspect-[4/3] bg-[#e3e1dc] overflow-hidden border border-[#e3e1dc]">
                  <img
                    src={AZURE_HORIZON_IMAGE_URL}
                    alt="Azure Horizon Olive Groves Plate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-[#444748] font-light leading-relaxed">
                  <h3 className="font-serif text-2xl text-[#1a1c1c] font-normal">
                    Living Sculpture &amp; Transcontinental Sourcing
                  </h3>
                  <p>
                    A century-old specimen tree carries a gravity that no architectural volume can
                    simulate. We maintain relationships with private arboreal groves across
                    Andalusia, Provence, and Niigata Prefecture.
                  </p>
                  <p>
                    When sited against a sea cliff or modernist glass elevation, the twisted trunk
                    of an ancient Olea europaea acts as an organic counterpoint to the horizontal
                    planes of cast concrete.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e3e1dc] mb-8">
                <span className="text-[10px] uppercase font-mono text-[#8c857b]">
                  Chapter 03: The Practice &amp; The Twelve Rule
                </span>
                <span className="text-[10px] font-mono text-[#8c857b]">Pages 40–48</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div className="space-y-4 text-xs sm:text-sm text-[#444748] font-light leading-relaxed">
                  <h3 className="font-serif text-2xl text-[#1a1c1c] font-normal">
                    Curated Intimacy of Practice
                  </h3>
                  <p>
                    Aura Landscape caps its active residential commissions at twelve per year. We
                    refuse institutional scaling so that Julian Vance and Elena Rostova personally
                    sculpt the topographical contours of every single property.
                  </p>
                  <div className="pt-4 border-t border-[#e3e1dc]">
                    <button
                      onClick={() => {
                        onClose();
                        onOpenConsultation();
                      }}
                      className="bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                    >
                      Inquire for Autumn 2026 Intake
                    </button>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-[#e3e1dc] overflow-hidden border border-[#e3e1dc]">
                  <img
                    src={STUDIO_PRINCIPALS_IMAGE_URL}
                    alt="Principals at Desk"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Monograph Navigation Footer */}
        <div className="h-16 px-6 sm:px-8 border-t border-[#e3e1dc] flex items-center justify-between bg-[#f2f1ee]">
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 border border-[#e3e1dc] text-xs font-mono disabled:opacity-40 hover:bg-white transition-colors cursor-pointer"
            >
              ← Previous Plate
            </button>
            <span className="text-xs font-mono text-[#8c857b] px-2">
              Plate {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1.5 border border-[#e3e1dc] text-xs font-mono disabled:opacity-40 hover:bg-white transition-colors cursor-pointer"
            >
              Next Plate →
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 border border-[#1a1a1a] px-4 py-1.5 text-[11px] font-mono uppercase text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              <span>Print Folio</span>
            </button>
            <button
              onClick={onClose}
              className="bg-[#1a1a1a] text-white px-5 py-1.5 text-[11px] font-mono uppercase tracking-wider hover:bg-[#5a5d4d] transition-colors cursor-pointer"
            >
              Close Monograph
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
