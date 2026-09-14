import React, { useState } from "react";
import { BRAND_LOGO_URL } from "../data/content";
import { NavSection } from "../types";

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  onOpenMonograph: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenMonograph,
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer
      className="w-full text-[#f9f9f8] pt-20 pb-12 relative"
      style={{ backgroundImage: "url(/footer.png)", backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={BRAND_LOGO_URL}
                  alt="AURA LANDSCAPE"
                  className="h-8 w-auto invert object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span className="font-serif text-2xl tracking-tight text-white uppercase">
                  Aura Landscape
                </span>
              </div>

              <p className="text-white/70 text-sm leading-relaxed font-light mb-8 max-w-sm">
                Transforming the architectural threshold into enduring natural
                sanctuary through minimalist botanical composition and hardscape
                curation.
              </p>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 mb-3 font-mono">
                Folio Archives
              </div>
              <div className="flex items-center gap-4 text-xs tracking-editorial uppercase text-white/80">
                <a
                  href="#instagram"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <span>•</span>
                <a
                  href="#pinterest"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors"
                >
                  Pinterest
                </a>
                <span>•</span>
                <a
                  href="#adpro"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors"
                >
                  AD Pro
                </a>
                <span>•</span>
                <a
                  href="#linkedin"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Disciplines Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-editorial text-white/50 font-semibold mb-6">
              Disciplines
            </h4>
            <ul className="space-y-3 text-xs tracking-wide text-white/80 font-light">
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Master Planning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Coastal Estates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Hardscape Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("craft")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Horticultural Curations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terrace Sculpting
                </button>
              </li>
            </ul>
          </div>

          {/* Practice & Firm Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-editorial text-white/50 font-semibold mb-6">
              The Firm
            </h4>
            <ul className="space-y-3 text-xs tracking-wide text-white/80 font-light">
              <li>
                <button
                  onClick={() => onNavigate("portfolio")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Selected Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("studio")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Practice &amp; Ethics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("craft")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Craft &amp; Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("studio")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Studio &amp; Principals
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenMonograph}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Press &amp; Monograph
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-editorial text-white/50 font-semibold mb-4">
              Stay Inspired
            </h4>
            <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
              Receive our seasonal monographic prints, technical research
              papers, and architectural study releases.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex border border-white/30 focus-within:border-white">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="bg-transparent px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none flex-1 font-light"
                />
                <button
                  type="submit"
                  className="bg-white text-[#1a1a1a] px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#e3e1dc] transition-colors cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-[#8c857b] font-mono">
                  Thank you. A seasonal monograph invitation has been
                  dispatched.
                </div>
              )}
            </form>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={onOpenConsultation}
                className="text-[10px] uppercase font-mono tracking-widest text-white/70 hover:text-white flex items-center gap-2 cursor-pointer"
              >
                <span>Private Commission Inquiries</span>
                <span className="material-symbols-outlined text-xs">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Studio Locations Grid */}
        <div className="py-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-light">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/50 font-mono mb-2">
              East Hampton Studio
            </div>
            <p className="text-white/90">
              840 Montauk Highway, East Hampton, NY 11937
            </p>
            <p className="text-white/60 text-[11px] mt-1">
              Consultation by Appointment • +1 (631) 283-9100
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/50 font-mono mb-2">
              Bel Air Atelier
            </div>
            <p className="text-white/90">
              714 Bel Air Road, Los Angeles, CA 90077
            </p>
            <p className="text-white/60 text-[11px] mt-1">
              Design Studio &amp; Plant Archive • +1 (310) 472-8820
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-editorial text-white/50 font-mono">
          <div>© AURA LANDSCAPE 2026. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">
              Terms of Practice
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">
              Studio Credentials
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
