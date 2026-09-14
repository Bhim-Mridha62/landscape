import { ProjectFolio, MethodologyPhase, MaterialSpecimen, TestimonialSlide } from '../types';

export const BRAND_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1VQ7WAREjMFu4HPx17_WQ2UxvGW_CSeEKsANjrAY1hTNELpuUVRrxouNQmcsuMR1-v7BnfTkWz_rFlyDjTWYu_kzx_qbaIZYAXJkXcedv0hEGssxVFB-0rR7UnSXOxJD4pQ209fRG6QpcIp5zxUjUwBy2c3bzPT19bqtqmf7ujxW7Dc1_wVjWlZdZMEmnOFNQj9LqalEUMXGLwHu_xqeg_b9Y3duZAPJnPr7jBOMtKMQ5ue3EyazgnoOLjx';

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCc-zXDTBK7C30PmrUrkLtsSG2uWhU7HkyN0zUQ7UKi7ubiZFJlTuwBsbjRe5HSEnyIMx1RFBP0TJ-cE9a_NOveP0llZtpIoAIs-ohuw7kHVPnCPkju9-fsqbmhgnc_fnpUaLFed_N1DVV7T1Me-RPr8w-JiwS-B2obxGJWZWMEA-43IdmvrnSxyinHUU1srWLnY99qJrJjKjpHm9pdOw6mQ1--eIAJPID8Z1SUL8f5czFqvoAvpU6uCQ';

export const GLASS_PAVILION_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBop9fOYY1hvPievzFdvYT6lzC3iTEwJNK9VRSwydhRKfm5f3lOHxdONtq3cHXGAC6leXGzH-kcpaNTxvPtb4Q3i5hzj3Zoy7qS-CBAKQrEzpRKJEFHYadnzG-ejqTimOGEJAJ1rdKrRP5PMzAg9_BSLPIB7JVyNMr34CGwUMZfEsOVrtvHaxA59_dOhNqfmi9llkiAhPQ9hEJqIV2M5dfkcS8URhj3wAO-oaWhV_13_g2njY0o-QAhiQ';

export const AZURE_HORIZON_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDptKBjAIlAdRHWwBv5HazDi7glMSY_7TbeveaPUCbkHWH4KKcBYoOBv_jb3aTqUqVA9n8hObfHTT9VIgT4GrJnytWvbBaD50TOQvO_PHc9TaCxUMh8qUo7d-zDC1HwKvstSJq7O0ebMqT6gweX1nO4fPvWaMxfkjfXvl8AEvQjfTmqRyP_Yi0jELB4JLAYBBypsPd0qTUkaULKWyVq1cHmF5jp1VvBz-tkkTsZuVa7dKqxbAh00uHQqw';

export const STUDIO_PRINCIPALS_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCylYqh0jL4MR5rFtURJtZO-VFFelzdIOK_kUG8WfHkS5jubYGqHFKjVJWB-trJPrZUG1M2mTKDZ94yKa_SITb_XAT5z4NDFI6H3IGd5MoEcCwoog2853w4zwyGqf9iPeRKN0HjCMMeNY_F0MsQ9_eNAJKh6ErrTJIQokktiYNNgqqGgiYkQWCOqrDGJZtHc60pum9eaxRPha3ctFWByQOxVU0HqP8NgbLt_pceCXZrWxYAjgz37vZHrQ';

// High-fidelity architectural photography matching the mockup scenes
export const BASALT_STONE_IMAGE_URL =
  'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&q=80';

export const OLIVE_SPECIMEN_IMAGE_URL =
  'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80';

export const TWILIGHT_VILLA_IMAGE_URL =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80';

export const OUTDOOR_KITCHEN_IMAGE_URL =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80';

export const BLUEPRINT_DESK_IMAGE_URL =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80';

export const METHODOLOGY_PHASES: MethodologyPhase[] = [
  {
    phase: 'Phase 01',
    title: 'Site Ecology & Spatial Cartography',
    description:
      'In-depth terrain analysis, sunlight orientation matrices, indigenous soil horizons, and deep architectural alignment with primary living axes.',
    linkText: 'Topography Folio',
    icon: 'explore',
    img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    deliverables: [
      '3D LiDAR Point-Cloud Topography Model',
      'Solar Radiation & Microclimate Heat Map',
      'Indigenous Soil pH & Substratum Analysis',
      'Sightline Axial Geometric Master Drawings',
    ],
    fieldTechnique:
      'Laser cartography with GPS-referenced borehole sampling to map the bedrock threshold before foundation excavation.',
  },
  {
    phase: 'Phase 02',
    title: 'Architectural Hardscape & Watercraft',
    description:
      'Sculpting natural limestone terraces, knife-edge infinity reflection pools, cantilevered pavilions, and flush sunken fire pit amphitheaters.',
    linkText: 'Structural Stonework',
    icon: 'water_drop',
    img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    deliverables: [
      'Cross-cut Roman Travertine Joinery Schedules',
      'Knife-Edge Infinity Weir Precision Engineering',
      'Subterranean Acoustic Water Attenuation Vaults',
      'Flush Thermal Hearth & Fire Basin Systems',
    ],
    fieldTechnique:
      'Monolithic dry-joint masonry with concealed stainless-steel structural pins and zero-grout perimeter drains.',
  },
  {
    phase: 'Phase 03',
    title: 'Botanical & Specimen Curation',
    description:
      'Ethical sourcing of century-old olive groves, sculptural Japanese black pines, microclimatic moss gardens, and biodynamic coastal plantings.',
    linkText: 'Arboreal Registry',
    icon: 'potted_plant',
    img:"https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
    deliverables: [
      'Certified Century-Old Specimen Tree Registry',
      'Native & Microclimate Resilient Botanical Matrix',
      'Living Moss & Sub-Canopy Groundcover Layering',
      'Seasonal Bloom & Deciduous Chromatic Rhythm',
    ],
    fieldTechnique:
      'Bespoke crane rigging and biological mycorrhizal inoculation ensuring 99.4% specimen survival across transcontinental relocations.',
  },
  {
    phase: 'Phase 04',
    title: 'Luminary & Living Stewardship',
    description:
      'Concealed architectural illumination choreography, subterranean water conservation systems, and perpetual horticultural estate stewardship.',
    linkText: 'Perpetual Care',
    icon: 'wb_twilight',
    img:"https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
    deliverables: [
      '2700K Museum-Grade Architectural Nightscape Choreography',
      'Sub-surface Closed-Loop Water Re-circulation Grid',
      'Seasonal Precision Pruning Protocols',
      'Quarterly Master Gardener Soil Health Diagnostics',
    ],
    fieldTechnique:
      'Anti-glare shielded optical fixtures recessed into structural risers and tree canopies for subtle, star-safe evening luminosity.',
  },
];

export const PORTFOLIO_PROJECTS: ProjectFolio[] = [
  {
    id: 'the-glass-pavilion',
    title: 'The Glass Pavilion',
    subtitle: 'Kyoto & Pacific Palisades • Private Estate',
    location: 'Pacific Palisades, California',
    category: 'Zen & Mineral',
    disciplines: 'Hardscape & Zen Reflecting Gardens',
    year: '2025',
    description:
      'Integrating dual-cantilevered transparent living spaces over dry-stacked granite retaining walls, sculpted pine specimens, and subterranean filtered water flows.',
    extendedDescription:
      'Perched on an ocean-facing ridge in the Pacific Palisades, The Glass Pavilion resolves the tension between modernist transparency and timeless Japanese Zen garden discipline. The landscape dissolves the threshold of the home via monolithic granite steps descending into a gravel raked karesansui courtyard, anchored by specimen black pines hand-curated from private Japanese nurseries.',
    heroImage: GLASS_PAVILION_IMAGE_URL,
    specs: {
      acreage: '2.8 Acres',
      elevationDelta: '42 ft terraced grade',
      stoneClass: 'Sardinian Basalt & Kyoto River Granite',
      waterFeature: 'Biophilic Koi Courtyard & Zero-Edge Basin',
      arborealHighlights: 'Sculptural Japanese Black Pines (Pinus thunbergii)',
      completion: 'Autumn 2025',
    },
    architecturalNotes: [
      'Engineered dry-stacked granite retaining walls with seismic tiebacks',
      'Continuous concealed overflow slot around the glass perimeter',
      'Filtered sub-gravel koi filtration system cycling 12,000 gal/hr',
      'Night illumination mapped to the pine silhouette branch geometry',
    ],
  },
  {
    id: 'azure-horizon',
    title: 'Azure Horizon',
    subtitle: "Cap d'Antibes • Coastal Sanctuary",
    location: "Cap d'Antibes, French Riviera",
    category: 'Coastal Sanctuaries',
    disciplines: 'Sculptural Olive Terraces & Infinity Ocean Basin',
    year: '2024',
    description:
      'Cascading honed Roman travertine decks that frame panoramic Mediterranean horizons, accented with hand-selected specimen olive trees and endemic lavender flora.',
    extendedDescription:
      'Carved into the limestone promontory of Cap d’Antibes, Azure Horizon unfolds as a sequence of outdoor salons stepping gently down to the sea. A 35-meter knife-edge infinity basin reflects the azure maritime skies, while three 180-year-old Olea europaea trees stand sentinel over sun-bleached travertine terraces.',
    heroImage: AZURE_HORIZON_IMAGE_URL,
    specs: {
      acreage: '6.4 Hectares',
      elevationDelta: '78 ft maritime bluff',
      stoneClass: 'Cross-Cut Roman Travertino Navona',
      waterFeature: '35m Horizon Infinity Basin & Marine Filtration',
      arborealHighlights: '180-Year Ancient Olive Groves & Coastal Myrtles',
      completion: 'Summer 2024',
    },
    architecturalNotes: [
      'Honed cross-cut travertine treated for salt air resistance and tactile barefoot comfort',
      'Deep sunken conversation pit with custom cast bronze bioethanol fire disc',
      'Endemic aromatic understory: Lavandula angustifolia, Rosmarinus prostratus',
      'Stormwater retention cisterns collecting 85,000 liters of seasonal rain',
    ],
  },
  {
    id: 'obsidian-reflection-villa',
    title: 'Obsidian Reflection Villa',
    subtitle: 'Bel Air Ridge • Architectural Masterplan',
    location: 'Bel Air, California',
    category: 'Hillside & Cantilever',
    disciplines: 'Subterranean Fire Lounge & Midnight Lap Pool',
    year: '2025',
    description:
      'Black slate monolithic walls paired with an obsidian reflecting pool and illuminated olive canopy create a dramatic nighttime sanctuary.',
    extendedDescription:
      'Commanding 180-degree views of the Los Angeles basin, this project explores the dark tactile palette of split-face charcoal basalt and night water. The lap pool acts as a black mirror, doubling the warm interior illumination of the residence.',
    heroImage: TWILIGHT_VILLA_IMAGE_URL,
    specs: {
      acreage: '3.5 Acres',
      elevationDelta: '35 ft canyon slope',
      stoneClass: 'Honed Charcoal Slate & Flamed Granite',
      waterFeature: '25m Black Quartzite Mirror Lap Basin',
      arborealHighlights: 'Field-dug Specimen Olive Pairs & Silver Birch',
      completion: 'Spring 2025',
    },
    architecturalNotes: [
      'Flush stepping pavers spanning the mirror reflection pool',
      'Tiered stone amphitheater with sunken linear gas hearth',
      'Museum-grade 2700K optical glare-free path and tree uplighting',
    ],
  },
  {
    id: 'cliffside-culinary-pavilion',
    title: 'Promontory Culinary Pavilion',
    subtitle: 'Corona del Mar • Oceanfront Atelier',
    location: 'Corona del Mar, California',
    category: 'Coastal Sanctuaries',
    disciplines: 'Cantilevered Concrete Canopy & Outdoor Hearth',
    year: '2024',
    description:
      'A wafer-thin cantilevered concrete roof floats over an outdoor kitchen, sculpted travertine dining table, and ocean-facing fire hearth.',
    extendedDescription:
      'Conceived as a sheltered perch for open-air entertaining above the Pacific breakers, the pavilion utilizes post-tensioned ultra-high-performance concrete to achieve a seamless 24-foot cantilever with zero visual support on the seaward edge.',
    heroImage: OUTDOOR_KITCHEN_IMAGE_URL,
    specs: {
      acreage: '1.9 Acres',
      elevationDelta: '110 ft sea cliff',
      stoneClass: 'Monolithic Travertine & Ribbed Bronze Panels',
      waterFeature: 'Cascading Water Wall into Coastal Cistern',
      arborealHighlights: 'Wind-sculpted Cypress & Coastal Agave Curations',
      completion: 'Winter 2024',
    },
    architecturalNotes: [
      'Post-tensioned architectural concrete canopy engineered for 120mph coastal gale loads',
      'Integrated induction cooktops and custom wood-fired hearth within bronze fluted cabinetry',
      'Solid 12-foot honed Roman travertine table slab weighing 3,800 lbs',
    ],
  },
];

export const MATERIAL_SPECIMENS: MaterialSpecimen[] = [
  {
    id: 'hand-chiseled-basalt',
    name: 'Hand-Chiseled Basalt',
    tagline: 'Quarried volcanic stone • Relief & shadow',
    specimenNumber: 'MATERIALITY SPECIMEN 01',
    origin: 'Sardinian Origin',
    description:
      'Quarried volcanic masonry, honed with subtle mineral veining and tactile acoustic depth for enduring exterior thresholds and reflecting borders.',
    mineralClass: 'Basalto Grigio Sardo',
    thermalAcousticRating: 'Thermal Mass Index: 9.8 / NRC Sound Dampening: 0.42',
    image: BASALT_STONE_IMAGE_URL,
  },
  {
    id: 'ancient-olive-specimen',
    name: 'Ancient Olive Specimen',
    tagline: 'Century-Old Olea Europaea • Living Architectural Sculpture',
    specimenNumber: 'LIVING SPECIMEN 02',
    origin: 'Arboreal Archive • Andalusia & Provence',
    description:
      'Century-old Olea europaea arboreal curation, acclimatized for coastal microclimates and sculpted as living centerpieces.',
    mineralClass: 'Olea europaea var. europaea (Age: 120–220 Yrs)',
    thermalAcousticRating: 'Drought Resilience: Extreme / Canopy Diameter: 6.5m',
    image: OLIVE_SPECIMEN_IMAGE_URL,
  },
  {
    id: 'roman-travertine-bronze',
    name: 'Honed Roman Travertine & Elemental Bronze',
    tagline: 'Cross-Cut Travertino & Architectural Gunmetal',
    specimenNumber: 'MATERIAL STUDY 03',
    origin: 'Tivoli & Florence',
    description:
      'Thermal mass integration with hand-rubbed elemental bronze architectural joints, mineral vein alignment, and concealed subterranean drainage channels.',
    mineralClass: 'Classico Navona Cross-Cut Travertino',
    alloySpec: 'Architectural Gunmetal Bronze (CuSn8)',
    thermalAcousticRating: 'Thermal Conductivity: 1.4 W/mK / Patina Life: 100+ Yrs',
    image:
      'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&w=1200&q=80',
  },
];

export const TESTIMONIALS: TestimonialSlide[] = [
  {
    id: 'st-claire',
    quote:
      'Aura completely redefined how our family inhabits our property. The transition between our living pavilion and the cascading limestone terraces feels effortless, timeless, and profoundly serene.',
    client: 'Lord Alistair & Evelyn St. Claire',
    estate: "Côte d’Azur Private Estate • Cap d'Antibes",
    scopeTitle: '6.4 Hectare Mediterranean Coastal Masterplan',
    scopeDetails:
      'Travertine Terraces, 35m Infinity Basin, Subterranean Fire Amphitheater, Century Olive Groves',
    completedYear: '2024',
  },
  {
    id: 'marcus-thorne',
    quote:
      'Their command of light, specimen trees, and water movement is unmatched in modern exterior architecture. Every evening when the concealed illumination awakens, the pavilion feels like an art installation.',
    client: 'Marcus Thorne',
    estate: 'Pacific Palisades Glass Residence • California',
    scopeTitle: '2.8 Acre Hillside Precision Masterplan',
    scopeDetails:
      'Specimen Cloud Pines, Dry-Stack Granite Walls, Koi Courtyard, Zero-Edge Water Terrace',
    completedYear: '2025',
  },
  {
    id: 'victoria-haddon',
    quote:
      'Working with Julian and Elena was the single most rewarding collaboration of our build. They treat living trees with the same structural reverence that an architect grants to cast concrete.',
    client: 'Lady Victoria & Harrison Haddon',
    estate: 'East Hampton Ocean Dune Sanctuary • New York',
    scopeTitle: '4.2 Acre Coastal Dune Restoration',
    scopeDetails:
      'Native Grass Meadow, Honed Granite Plinth, Salt-Mist Resilient Topiary, Concealed Spa Pavilion',
    completedYear: '2025',
  },
];

export const PRESS_HONORS = [
  { name: 'ARCHITECTURAL DIGEST', badge: 'Cover Story 2025' },
  { name: 'ELLE DÉCOR', badge: 'A-List Landscape Architects' },
  { name: 'ROBB REPORT', badge: 'Best of the Best: Living Sanctuaries' },
  { name: 'Wallpaper*', badge: 'Design Awards Winner' },
  { name: 'DWELL', badge: 'Pioneers of Modern Exterior Form' },
  { name: 'ASLA FELLOW HONORS', badge: 'Distinguished Practice Medal' },
];

export const STUDIO_STATISTICS = [
  { number: '$150M+', label: 'Residential Portfolio Created' },
  { number: '12', label: 'Global Design Awards' },
  { number: '100%', label: 'Native & Microclimate Resilient Flora' },
  { number: '450+', label: 'Mature Specimen Trees Preserved' },
];

export const STUDIO_PRINCIPALS = {
  name: 'Julian Vance & Elena Rostova',
  role: 'Founding Principals',
  bio: 'Julian Vance (MLA, Harvard GSD) and Elena Rostova (Architecte DPLG, École Nationale Supérieure d’Architecture de Paris) established Aura Landscape in 2002. Merging structural discipline with botanical scholarship, their studio commands international acclaim for exterior environments that achieve spatial synthesis with cutting-edge architecture.',
  practiceStats: [
    { value: '24', label: 'Years Practice' },
    { value: '160+', label: 'Global Works' },
    { value: '14', label: 'ASLA Honors' },
  ],
};
