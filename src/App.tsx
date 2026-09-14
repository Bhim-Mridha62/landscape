import { useState, useEffect } from "react";
import { NavSection, ProjectFolio } from "./types";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowWeWork } from "./components/HowWeWork";
import { PortfolioShowcase } from "./components/PortfolioShowcase";
import { MeetHSS7 } from "./components/MeetHSS7";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { InquirySection } from "./components/InquirySection";
import { Footer } from "./components/Footer";
import { ProjectDetailModal } from "./components/ProjectDetailModal";
import { ConsultationModal } from "./components/ConsultationModal";
import { MonographModal } from "./components/MonographModal";
import { ClientVaultModal } from "./components/ClientVaultModal";
import { ServicesView } from "./components/ServicesView";
import { PortfolioView } from "./components/PortfolioView";
import { ProcessView } from "./components/ProcessView";
import { AboutView } from "./components/AboutView";
import { ServicesPreview } from "./components/ServicesPreview";
import { JournalHighlights } from "./components/JournalHighlights";
import { JournalView } from "./components/JournalView";

export default function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>("home");
  const [selectedProject, setSelectedProject] = useState<ProjectFolio | null>(
    null,
  );
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [isMonographOpen, setIsMonographOpen] = useState<boolean>(false);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);
  const [consultationPreselection, setConsultationPreselection] = useState<
    string | undefined
  >();

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToExplore = () => {
    const portfolioEl = document.getElementById("portfolio-showcase");
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  };

  const handleOpenConsultationWithProject = (projectTitle?: string) => {
    setConsultationPreselection(projectTitle);
    setIsConsultationOpen(true);
  };

  // Scroll to top on section switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-[#f9f9f8] text-[#1a1c1c] flex flex-col font-sans selection:bg-[#1a1a1a] selection:text-[#f9f9f8]">
      {/* Global Architectural Header */}
      <Header
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenConsultation={() => {
          setConsultationPreselection(undefined);
          setIsConsultationOpen(true);
        }}
        onOpenVault={() => setIsVaultOpen(true)}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-1 w-full">
        {currentSection === "home" && (
          <>
            {/* 01 — Full Viewport Monographic Hero */}
            <Hero
              onExplorePortfolio={() => handleNavigate("portfolio")}
              onViewMonograph={() => setIsMonographOpen(true)}
              onScrollDown={handleScrollToExplore}
            />

            {/* 02 — Featured Projects: Large Project Cards */}
            <PortfolioShowcase
              onSelectProject={(project) => setSelectedProject(project)}
              onViewAllWorks={() => handleNavigate("portfolio")}
            />

            {/* 03 — Explore Our Services: 5 Visual Gateways */}
            <ServicesPreview
              onNavigateToServices={() => handleNavigate("services")}
            />

            {/* 04 — How We Work: 4 Architectural Stages with direct link to Our Process */}
            <HowWeWork />

            {/* 05 — Meet HSS7: Short Company Introduction & Team Imagery */}
            <MeetHSS7 onNavigateToAbout={() => handleNavigate("about")} />

            {/* 06 — Client Stories: Testimonial Carousel */}
            <TestimonialCarousel />

            {/* 07 — Journal Highlights: Design Articles & Stories */}
            <JournalHighlights
              onNavigateToJournal={() => handleNavigate("journal")}
            />

            {/* 08 — Consultation CTA */}
            <InquirySection
              onOpenConsultation={() => {
                setConsultationPreselection(undefined);
                setIsConsultationOpen(true);
              }}
              onOpenMonograph={() => setIsMonographOpen(true)}
            />
          </>
        )}

        {currentSection === "portfolio" && (
          <PortfolioView
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentSection === "services" && (
          <ServicesView
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {(currentSection === "process" || currentSection === "craft") && (
          <ProcessView onOpenConsultation={() => setIsConsultationOpen(true)} />
        )}

        {(currentSection === "about" ||
          currentSection === "studio" ||
          currentSection === "contact") && (
          <AboutView
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenMonograph={() => setIsMonographOpen(true)}
          />
        )}

        {currentSection === "journal" && (
          <JournalView onOpenConsultation={() => setIsConsultationOpen(true)} />
        )}
      </main>

      {/* Global Architectural Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => {
          setConsultationPreselection(undefined);
          setIsConsultationOpen(true);
        }}
        onOpenMonograph={() => setIsMonographOpen(true)}
      />

      {/* Architectural Project Dossier Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestConsultation={handleOpenConsultationWithProject}
      />

      {/* Bespoke Private Commission Intake Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedTypology={consultationPreselection}
        onOpenMonograph={() => {
          setIsConsultationOpen(false);
          setIsMonographOpen(true);
        }}
      />

      {/* Architectural Monograph Reader Modal */}
      <MonographModal
        isOpen={isMonographOpen}
        onClose={() => setIsMonographOpen(false)}
        onOpenConsultation={() => {
          setIsMonographOpen(false);
          setIsConsultationOpen(true);
        }}
      />

      {/* Private Client Commission Vault Modal */}
      <ClientVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
        onOpenConsultation={() => {
          setIsVaultOpen(false);
          setIsConsultationOpen(true);
        }}
      />
    </div>
  );
}
