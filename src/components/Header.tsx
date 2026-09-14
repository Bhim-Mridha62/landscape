import React, { useState } from "react";
import { NavSection } from "../types";

interface HeaderProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  onOpenVault?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { id: NavSection; label: string }[] = [
    { id: "home", label: "HOME" },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "services", label: "SERVICES" },
    { id: "process", label: "OUR PROCESS" },
    { id: "about", label: "ABOUT" },
    { id: "journal", label: "JOURNAL" },
  ];

  const isItemActive = (id: NavSection) => {
    if (currentSection === id) return true;
    if (id === "process" && currentSection === "craft") return true;
    if (id === "about" && currentSection === "studio") return true;
    return false;
  };

  const handleItemClick = (id: NavSection) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1a231c] text-white shadow-md">
      <div className="max-w-[1440px] py-2 mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-6">
        {/* Brand Logo / Wordmark — Always switches to Home Page View */}
        <button
          onClick={() => handleItemClick("home")}
          className="flex items-center focus:outline-none group cursor-pointer shrink-0"
          title="Return to Home Page"
        >
          <img
            src="/logo.png"
            alt="Aura Logo"
            className="h-14 sm:h-16 w-auto object-contain group-hover:opacity-85 transition-opacity duration-300"
            onError={(e) => {
              // Fallback text if logo image is unavailable
              const target = e.target as HTMLElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent && !parent.querySelector(".fallback-text")) {
                const text = document.createElement("span");
                text.className =
                  "fallback-text font-serif text-2xl tracking-tight text-white uppercase font-light leading-none";
                text.innerText = "AURA";
                parent.appendChild(text);
              }
            }}
          />
        </button>

        {/* Desktop Navigation Links — Each switches to its dedicated separate page view */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navItems.map((item) => {
            const active = isItemActive(item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-[12px] font-medium tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer py-1 ${
                  active
                    ? "text-white font-bold border-b border-white pb-0.5"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button — Solid White Box */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center bg-white text-[#1a1c1c] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-[#eae8e3] transition-colors duration-200 cursor-pointer shadow-sm"
          >
            BOOK A CONSULTATION
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden text-white p-2 focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#151c17] border-t border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleItemClick(item.id);
                  setMobileOpen(false);
                }}
                className={`text-left text-xs uppercase tracking-[0.16em] py-2 border-b border-white/10 cursor-pointer ${
                  isItemActive(item.id)
                    ? "text-white font-bold"
                    : "text-white/70 hover:text-white"
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
            className="w-full text-center bg-white text-[#1a1c1c] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#eae8e3] transition-colors cursor-pointer"
          >
            BOOK A CONSULTATION
          </button>
        </div>
      )}
    </header>
  );
};
