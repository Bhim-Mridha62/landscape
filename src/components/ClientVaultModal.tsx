import React, { useState } from 'react';

interface ClientVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ClientVaultModal: React.FC<ClientVaultModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'documents' | 'schedule'>('telemetry');
  const [accessCode, setAccessCode] = useState('AURA-ESTATE-7701');
  const [isUnlocked, setIsUnlocked] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#f9f9f8] border border-[#1a1a1a] max-w-3xl w-full my-auto overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="h-16 px-6 sm:px-8 border-b border-[#e3e1dc] flex items-center justify-between bg-[#f2f1ee]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#5a5d4d]" />
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#1a1c1c] font-semibold">
              Client Commission Vault &amp; Estate Telemetry
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 border border-[#e3e1dc] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Estate Identity Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#e3e1dc] gap-4">
            <div>
              <div className="text-[10px] uppercase font-mono text-[#8c857b] tracking-wider">
                Active Client Portal • Estate Ref: AURA-7701
              </div>
              <h3 className="font-serif text-2xl text-[#1a1c1c]">
                Villa Azure Horizon • Cap d&apos;Antibes
              </h3>
              <div className="text-xs text-[#5a5d4d] font-semibold mt-0.5">
                Principal Architects: Julian Vance &amp; Elena Rostova
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#f2f1ee] border border-[#e3e1dc] px-3 py-1.5 text-[11px] font-mono text-[#1a1c1c]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>Telemetry Live</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-[#e3e1dc] mb-6">
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-4 py-2 text-xs uppercase tracking-editorial font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === 'telemetry'
                  ? 'border-[#1a1a1a] text-[#1a1a1a] font-bold'
                  : 'border-transparent text-[#8c857b] hover:text-[#1a1a1a]'
              }`}
            >
              Living Telemetry
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-4 py-2 text-xs uppercase tracking-editorial font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === 'documents'
                  ? 'border-[#1a1a1a] text-[#1a1a1a] font-bold'
                  : 'border-transparent text-[#8c857b] hover:text-[#1a1a1a]'
              }`}
            >
              Architectural Blueprints
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-4 py-2 text-xs uppercase tracking-editorial font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === 'schedule'
                  ? 'border-[#1a1a1a] text-[#1a1a1a] font-bold'
                  : 'border-transparent text-[#8c857b] hover:text-[#1a1a1a]'
              }`}
            >
              Stewardship &amp; Care
            </button>
          </div>

          {/* Tab 1: Live Telemetry */}
          {activeTab === 'telemetry' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#f2f1ee] border border-[#e3e1dc] p-4">
                  <div className="text-[10px] uppercase font-mono text-[#8c857b] mb-1">
                    Soil Moisture Index
                  </div>
                  <div className="text-2xl font-serif text-[#1a1c1c]">68.4% Optimal</div>
                  <div className="text-[10px] text-[#5a5d4d] mt-1 font-mono">
                    Zone 4: Ancient Olive Terrace
                  </div>
                </div>

                <div className="bg-[#f2f1ee] border border-[#e3e1dc] p-4">
                  <div className="text-[10px] uppercase font-mono text-[#8c857b] mb-1">
                    Cistern Storage
                  </div>
                  <div className="text-2xl font-serif text-[#1a1c1c]">84,200 L</div>
                  <div className="text-[10px] text-[#5a5d4d] mt-1 font-mono">
                    Subterranean Rain Reservoir
                  </div>
                </div>

                <div className="bg-[#f2f1ee] border border-[#e3e1dc] p-4">
                  <div className="text-[10px] uppercase font-mono text-[#8c857b] mb-1">
                    Luminary Night Scene
                  </div>
                  <div className="text-2xl font-serif text-[#1a1c1c]">2700K Twilight</div>
                  <div className="text-[10px] text-[#5a5d4d] mt-1 font-mono">
                    Dusk Triggers at 19:42 CET
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#f9f9f8] border border-[#e3e1dc] text-xs leading-relaxed text-[#444748]">
                <strong>Subterranean System Diagnostic:</strong> Zero salinity infiltration detected
                in Mediterranean terrace pumps. Mycorrhizal root inoculation thriving at 98.6%
                viability across specimen trees.
              </div>
            </div>
          )}

          {/* Tab 2: Documents */}
          {activeTab === 'documents' && (
            <div className="space-y-3">
              {[
                {
                  title: 'Topographical Grading & Contour Masterplan',
                  size: '48.2 MB • Vector PDF',
                  date: 'Revised Dec 2025',
                },
                {
                  title: 'Cross-Cut Roman Travertine Stone Joinery Schedules',
                  size: '18.4 MB • DWG / PDF',
                  date: 'Approved Nov 2025',
                },
                {
                  title: 'Arboreal Botanical Schedule & Specimen Pedigree Register',
                  size: '12.1 MB • Archival PDF',
                  date: 'Issued Jan 2026',
                },
                {
                  title: 'Subterranean Hydraulic & Infinity Weir Precision Engineering',
                  size: '34.0 MB • CAD Vector',
                  date: 'Certified 2025',
                },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-[#f2f1ee] border border-[#e3e1dc] hover:border-[#1a1a1a] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#5a5d4d]">description</span>
                    <div>
                      <div className="text-xs font-medium text-[#1a1c1c]">{doc.title}</div>
                      <div className="text-[10px] text-[#8c857b] font-mono">
                        {doc.size} • {doc.date}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Downloading signed copy: ${doc.title}`)}
                    className="px-3 py-1.5 bg-[#1a1a1a] text-white text-[10px] uppercase font-mono hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Stewardship & Schedule */}
          {activeTab === 'schedule' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-[#f2f1ee] border border-[#e3e1dc]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-[#1a1c1c]">
                    Upcoming Seasonal Master Arborist Review
                  </span>
                  <span className="font-mono text-[#5a5d4d] font-bold">Scheduled: April 14, 2026</span>
                </div>
                <p className="text-[#444748] font-light leading-relaxed">
                  Principal arborist inspection of the three century-old olive specimens. Micro-nutrient
                  foliar feed and acoustic trunk tomography.
                </p>
              </div>

              <div className="p-4 bg-[#f2f1ee] border border-[#e3e1dc]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-[#1a1c1c]">
                    Travertine Hydrophobic Sealing &amp; Bronze Patina Treatment
                  </span>
                  <span className="font-mono text-[#8c857b]">Scheduled: June 2, 2026</span>
                </div>
                <p className="text-[#444748] font-light leading-relaxed">
                  Annual beeswax-oil buffing of architectural bronze threshold joints and deep-pore
                  cleansing of Navona travertine pool pavers.
                </p>
              </div>
            </div>
          )}

          {/* Footer inside Vault */}
          <div className="mt-8 pt-6 border-t border-[#e3e1dc] flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8c857b]">
              Encrypted 256-bit Estate Vault • Certified by Aura Practice
            </span>
            <button
              onClick={onClose}
              className="bg-[#1a1a1a] text-white px-6 py-2.5 text-xs uppercase tracking-architectural font-semibold hover:bg-[#444748] transition-colors cursor-pointer"
            >
              Close Vault
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
