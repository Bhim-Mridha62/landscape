import React, { useState } from 'react';
import {
  STUDIO_PRINCIPALS_IMAGE_URL,
  STUDIO_PRINCIPALS,
  BLUEPRINT_DESK_IMAGE_URL,
} from '../data/content';

interface StudioViewProps {
  onOpenConsultation: () => void;
  onOpenMonograph: () => void;
}

export const StudioView: React.FC<StudioViewProps> = ({
  onOpenConsultation,
  onOpenMonograph,
}) => {
  const [activeAtelier, setActiveAtelier] = useState<'hamptons' | 'belair'>('hamptons');

  return (
    <div className="w-full bg-[#f9f9f8] pt-28 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
              The Practice &amp; Ethos
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

        {/* Principals Portrait & Biography */}
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

            <button
              onClick={onOpenMonograph}
              className="self-start border border-[#1a1a1a] px-6 py-3 text-xs uppercase tracking-editorial text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
            >
              Read Full Studio Monograph
            </button>
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

        {/* Ateliers & Contact Information */}
        <div id="contact" className="border-t border-[#e3e1dc] pt-20">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#1a1a1a]" />
              <span className="text-[11px] uppercase font-bold tracking-[0.24em] text-[#8c857b]">
                Atelier Locations &amp; Appointments
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1c1c] font-normal tracking-tight">
              Visit Our Private Ateliers
            </h2>
          </div>

          {/* Atelier Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveAtelier('hamptons')}
              className={`px-6 py-3 text-xs uppercase tracking-editorial font-semibold border transition-all cursor-pointer ${
                activeAtelier === 'hamptons'
                  ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                  : 'border-[#e3e1dc] bg-[#f2f1ee] text-[#1a1c1c] hover:border-[#8c857b]'
              }`}
            >
              East Hampton Studio
            </button>
            <button
              onClick={() => setActiveAtelier('belair')}
              className={`px-6 py-3 text-xs uppercase tracking-editorial font-semibold border transition-all cursor-pointer ${
                activeAtelier === 'belair'
                  ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                  : 'border-[#e3e1dc] bg-[#f2f1ee] text-[#1a1c1c] hover:border-[#8c857b]'
              }`}
            >
              Bel Air Atelier
            </button>
          </div>

          {/* Atelier Details Card */}
          <div className="bg-[#f2f1ee] border border-[#e3e1dc] p-8 sm:p-12 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {activeAtelier === 'hamptons' ? (
              <>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
                    East Coast Headquarters
                  </div>
                  <h3 className="font-serif text-3xl text-[#1a1c1c] mb-3">
                    East Hampton Studio &amp; Coastal Nursery
                  </h3>
                  <p className="text-sm text-[#444748] font-light leading-relaxed mb-6">
                    Situated in the historic dunes of Long Island, our East Hampton atelier features
                    an experimental coastal flora testing meadow and private stone archives.
                  </p>
                  <div className="space-y-2 text-xs font-mono text-[#1a1c1c]">
                    <div><strong>Address:</strong> 840 Montauk Highway, East Hampton, NY 11937</div>
                    <div><strong>Direct Telephone:</strong> +1 (631) 283-9100</div>
                    <div><strong>Inquiries:</strong> easthampton@auralandscape.com</div>
                    <div><strong>Hours:</strong> Monday – Friday, By Appointment Only</div>
                  </div>
                </div>
                <div className="p-6 bg-white/80 border border-[#e3e1dc] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8c857b]">
                      Private Atelier Visits
                    </span>
                    <h4 className="font-serif text-xl text-[#1a1c1c] mt-1 mb-2">
                      Estate Masterplan Consultations
                    </h4>
                    <p className="text-xs text-[#444748] font-light leading-relaxed mb-6">
                      Schedule a private review with Julian Vance to inspect quarried stone samples
                      and discuss seasonal project availability.
                    </p>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                  >
                    Request Studio Appointment
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b] mb-2">
                    West Coast Atelier
                  </div>
                  <h3 className="font-serif text-3xl text-[#1a1c1c] mb-3">
                    Bel Air Atelier &amp; Specimen Archive
                  </h3>
                  <p className="text-sm text-[#444748] font-light leading-relaxed mb-6">
                    Our Bel Air studio is located on a canyon ridge overlooking Los Angeles, housing
                    our full-scale material mock-up terrace and exotic tree quarantine grounds.
                  </p>
                  <div className="space-y-2 text-xs font-mono text-[#1a1c1c]">
                    <div><strong>Address:</strong> 714 Bel Air Road, Los Angeles, CA 90077</div>
                    <div><strong>Direct Telephone:</strong> +1 (310) 472-8820</div>
                    <div><strong>Inquiries:</strong> belair@auralandscape.com</div>
                    <div><strong>Hours:</strong> Tuesday – Saturday, By Appointment Only</div>
                  </div>
                </div>
                <div className="p-6 bg-white/80 border border-[#e3e1dc] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8c857b]">
                      California &amp; Hawaii Inquiries
                    </span>
                    <h4 className="font-serif text-xl text-[#1a1c1c] mt-1 mb-2">
                      West Coast Consultations
                    </h4>
                    <p className="text-xs text-[#444748] font-light leading-relaxed mb-6">
                      Meet with Elena Rostova for hillside slope engineering assessments, seismic
                      cantilever reviews, and specimen tree selection.
                    </p>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                  >
                    Request Bel Air Appointment
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
