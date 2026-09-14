export type NavSection = 'home' | 'services' | 'portfolio' | 'craft' | 'studio' | 'contact';

export interface ProjectFolio {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'Coastal Sanctuaries' | 'Hillside & Cantilever' | 'Zen & Mineral' | 'Historic Restorations';
  disciplines: string;
  year: string;
  description: string;
  extendedDescription?: string;
  heroImage: string;
  galleryImages?: string[];
  specs: {
    acreage: string;
    elevationDelta?: string;
    stoneClass?: string;
    waterFeature?: string;
    arborealHighlights?: string;
    completion: string;
  };
  architecturalNotes?: string[];
}

export interface MethodologyPhase {
  phase: string;
  title: string;
  description: string;
  linkText: string;
  icon: string;
  deliverables: string[];
  fieldTechnique: string;
}

export interface MaterialSpecimen {
  id: string;
  name: string;
  tagline: string;
  specimenNumber: string;
  origin: string;
  description: string;
  mineralClass: string;
  alloySpec?: string;
  thermalAcousticRating?: string;
  image: string;
}

export interface TestimonialSlide {
  id: string;
  quote: string;
  client: string;
  estate: string;
  scopeTitle: string;
  scopeDetails: string;
  completedYear: string;
}

export interface ConsultationFormState {
  estateType: string;
  location: string;
  acreage: string;
  elements: string[];
  timeline: string;
  investmentRange: string;
  fullName: string;
  email: string;
  phone: string;
  architectOfRecord: string;
  notes: string;
}
