import React, { useState } from 'react';
import { BRAND_LOGO_URL } from '../data/content';
import { NavSection } from '../types';

interface HeaderProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  onOpenVault: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onNavigate,
  onOpenConsultation,
  onOpenVault,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'craft', label: 'Craft' },
    { id: 'studio', label: 'Studio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f9f9f8]/90 backdrop-blur-md border-b border-[#e3e1dc]/80">
      <div className="h-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-6">
        {/* Brand Logo & Wordmark */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <img
            src={BRAND_LOGO_URL}
            alt="AURA LANDSCAPE Brand Logo"
            className="h-8 w-auto object-contain transition-opacity group-hover:opacity-80"
            onError={(e) => {
              // Graceful fallback if external image URL is blocked
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-tight text-[#1a1c1c] uppercase font-normal leading-none">
              Aura Landscape
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#8c857b] font-medium mt-1">
              Architectural Sanctuaries
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[11px] font-semibold tracking-editorial uppercase transition-all duration-200 cursor-pointer py-1 ${
                  isActive
                    ? 'text-[#1a1c1c] underline underline-offset-8 decoration-1 font-bold'
                    : 'text-[#444748] hover:text-[#1a1c1c]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Elements */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="hidden md:inline-flex items-center justify-center border border-[#1a1a1a] px-6 py-3 text-[#1a1a1a] bg-transparent text-[11px] font-semibold uppercase tracking-[0.16em] hover:bg-[#1a1a1a] hover:text-[#f9f9f8] transition-colors duration-250 cursor-pointer"
          >
            Schedule a Consultation
          </button>

          {/* Client Vault / Portal Toggle */}
          <button
            onClick={onOpenVault}
            title="Commission Folio & Client Vault"
            className="w-9 h-9 bg-[#1a1a1a] text-[#f9f9f8] flex items-center justify-center shrink-0 hover:bg-[#5a5d4d] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[19px]">account_balance</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open Navigation Menu"
            className="xl:hidden text-[#1a1a1a] p-2 focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#f9f9f8] border-t border-[#e3e1dc] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileOpen(false);
                }}
                className={`text-left text-xs uppercase tracking-editorial py-2 border-b border-[#e3e1dc]/40 cursor-pointer ${
                  currentSection === item.id
                    ? 'text-[#1a1a1a] font-bold underline underline-offset-4'
                    : 'text-[#444748] hover:text-[#1a1a1a]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => {
              onOpenConsultation();
              setMobileOpen(false);
            }}
            className="w-full text-center border border-[#1a1a1a] px-5 py-3 text-[#1a1a1a] text-xs font-semibold uppercase tracking-editorial hover:bg-[#1a1a1a] hover:text-[#f9f9f8] transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      )}
    </header>
  );
};
