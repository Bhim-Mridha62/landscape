import { useState, useEffect } from 'react';
import { NavSection, ProjectFolio } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PressBar } from './components/PressBar';
import { Methodology } from './components/Methodology';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { MaterialitySection } from './components/MaterialitySection';
import { StudioSection } from './components/StudioSection';
import { StatsBanner } from './components/StatsBanner';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { MonographModal } from './components/MonographModal';
import { ClientVaultModal } from './components/ClientVaultModal';
import { ServicesView } from './components/ServicesView';
import { PortfolioView } from './components/PortfolioView';
import { CraftView } from './components/CraftView';
import { StudioView } from './components/StudioView';

export default function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectFolio | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [isMonographOpen, setIsMonographOpen] = useState<boolean>(false);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);
  const [consultationPreselection, setConsultationPreselection] = useState<string | undefined>();

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToExplore = () => {
    const methodologyEl = document.getElementById('methodology');
    if (methodologyEl) {
      methodologyEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  const handleOpenConsultationWithProject = (projectTitle?: string) => {
    setConsultationPreselection(projectTitle);
    setIsConsultationOpen(true);
  };

  // Scroll to top on section switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        {currentSection === 'home' && (
          <>
            {/* Full Viewport Monographic Hero */}
            <Hero
              onExplorePortfolio={() => handleNavigate('portfolio')}
              onViewMonograph={() => setIsMonographOpen(true)}
              onScrollDown={handleScrollToExplore}
            />

            {/* Editorial Press Recognition Bar */}
            <PressBar />

            {/* The Methodology: 4 Architectural Phases */}
            <Methodology />

            {/* Selected Folios: The Glass Pavilion & Azure Horizon */}
            <PortfolioShowcase
              onSelectProject={(project) => setSelectedProject(project)}
              onViewAllWorks={() => handleNavigate('portfolio')}
            />

            {/* Materiality & Craft: Basalt, Ancient Olive, Travertine & Bronze */}
            <MaterialitySection
              onOpenMaterialIndex={() => handleNavigate('craft')}
            />

            {/* The Studio: Julian Vance & Elena Rostova */}
            <StudioSection
              onOpenPhilosophy={() => handleNavigate('studio')}
            />

            {/* Quantitative Impact Statistics */}
            <StatsBanner />

            {/* Client Perspectives Testimonial Carousel */}
            <TestimonialCarousel />

            {/* Bespoke Commissions Callout */}
            <InquirySection
              onOpenConsultation={() => {
                setConsultationPreselection(undefined);
                setIsConsultationOpen(true);
              }}
              onOpenMonograph={() => setIsMonographOpen(true)}
            />
          </>
        )}

        {currentSection === 'services' && (
          <ServicesView
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentSection === 'portfolio' && (
          <PortfolioView
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentSection === 'craft' && (
          <CraftView
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {(currentSection === 'studio' || currentSection === 'contact') && (
          <StudioView
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenMonograph={() => setIsMonographOpen(true)}
          />
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
