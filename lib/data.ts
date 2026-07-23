export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  badge: string;
  featured?: boolean;
  yearBuilt?: number;
  agent?: string;
  latitude?: number;
  longitude?: number;
};

export type Agent = {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  rating: number;
  listings: number;
};

export const metrics = [
  { label: "Trusted buyers", value: "500+" },
  { label: "Years in business", value: "18" },
  { label: "Properties sold", value: "$2.8B+" },
  { label: "Average rating", value: "5.0" }
];

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Skyline Penthouse Collection",
    location: "Tribeca, New York",
    price: "$12,900,000",
    bedrooms: 4,
    bathrooms: 4,
    area: "4,200 sq ft",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    badge: "Private terrace",
    featured: true,
    yearBuilt: 2024,
    agent: "Olivia Carter"
  },
  {
    id: 2,
    title: "Central Park Residence",
    location: "Upper East Side, New York",
    price: "$8,750,000",
    bedrooms: 3,
    bathrooms: 3,
    area: "3,050 sq ft",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    badge: "Concierge living",
    yearBuilt: 2022,
    agent: "Julian Brooks"
  },
  {
    id: 3,
    title: "Waterfront Architectural Loft",
    location: "Brooklyn Heights, New York",
    price: "$6,400,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,780 sq ft",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    badge: "River views",
    yearBuilt: 2023,
    agent: "Maya Sinclair"
  },
  {
    id: 4,
    title: "Soho Modern Townhouse",
    location: "SoHo, New York",
    price: "$15,200,000",
    bedrooms: 5,
    bathrooms: 5,
    area: "5,400 sq ft",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    badge: "Private garden",
    featured: true,
    yearBuilt: 2024,
    agent: "Olivia Carter"
  },
  {
    id: 5,
    title: "Midtown Sky Suite",
    location: "Midtown, New York",
    price: "$4,800,000",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,950 sq ft",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    badge: "Panoramic views",
    agent: "Julian Brooks"
  },
  {
    id: 6,
    title: "Brooklyn Brownstone Estate",
    location: "Brooklyn Heights, New York",
    price: "$9,600,000",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,800 sq ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "Historic landmark",
    featured: true,
    yearBuilt: 2021,
    agent: "Maya Sinclair"
  }
];

export const searchFilters = [
  "Neighborhood",
  "Property Type",
  "Price Range",
  "Bedrooms",
  "Move-in Date"
];

export const whyChooseUs = [
  {
    title: "Curated luxury inventory",
    description:
      "We represent architecturally significant homes, private off-market opportunities, and signature residences across the city."
  },
  {
    title: "Discreet advisory service",
    description:
      "Every interaction is handled with white-glove discretion, from confidential viewings to multi-party negotiations."
  },
  {
    title: "Intelligent concierge tools",
    description:
      "Our AI booking assistant shortens response times, qualifies buyer intent, and keeps high-value opportunities moving."
  }
];

export const stats = [
  { label: "Luxury listings represented", value: "1,250+" },
  { label: "Private showings arranged", value: "9,400+" },
  { label: "Average response time", value: "< 3 min" },
  { label: "Repeat and referral clients", value: "72%" }
];

export const processSteps = [
  {
    title: "Consultation",
    description: "Clarify your goals, target neighborhoods, lifestyle requirements, and timeline."
  },
  {
    title: "Curation",
    description: "Receive a personally selected shortlist of properties matched to your brief."
  },
  {
    title: "Private viewings",
    description: "Book in-person or virtual tours through our concierge team and AI scheduling assistant."
  },
  {
    title: "Negotiation",
    description: "Move with confidence through pricing, due diligence, and closing strategy."
  }
];

export const testimonials = [
  {
    quote:
      "The experience felt effortless from the first inquiry to the final signature. Every showing was highly relevant and impeccably managed.",
    name: "Ariana Mitchell",
    role: "Buyer, Tribeca penthouse",
    rating: 5
  },
  {
    quote:
      "Their process is polished, discreet, and exceptionally fast. The team made a high-stakes purchase feel calm and completely under control.",
    name: "Daniel Hart",
    role: "Investor, Upper East Side",
    rating: 5
  },
  {
    quote:
      "The AI assistant helped us lock viewing times instantly, then the agents took over seamlessly. It felt premium at every step.",
    name: "Sophia Bennett",
    role: "Relocation client",
    rating: 5
  },
  {
    quote:
      "From the first consultation to closing, every detail was handled with precision and care. Truly a world-class experience.",
    name: "James Whitfield",
    role: "CEO, Whitfield Capital",
    rating: 5
  },
  {
    quote:
      "They found us a property that wasn't even on the market yet. That kind of access is invaluable for discerning buyers.",
    name: "Victoria Chen",
    role: "Private investor",
    rating: 5
  },
  {
    quote:
      "The virtual tour technology combined with their expertise made international buying feel completely seamless.",
    name: "Marcus Thorne",
    role: "International buyer, London",
    rating: 5
  }
];

export const agents: Agent[] = [
  {
    name: "Olivia Carter",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Specializes in luxury residences, private negotiations, and discreet buyer representation with over 15 years of experience in the Manhattan market.",
    specialties: ["Luxury Residences", "Private Negotiations", "International Buyers"],
    rating: 5.0,
    listings: 48
  },
  {
    name: "Julian Brooks",
    role: "Senior Property Advisor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Focused on high-value townhomes, skyline residences, and cross-market investment acquisitions with a track record of $500M+ in closed transactions.",
    specialties: ["Townhomes", "Investment Properties", "Market Analysis"],
    rating: 4.9,
    listings: 36
  },
  {
    name: "Maya Sinclair",
    role: "Client Experience Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Coordinates high-touch showings, international buyer support, and concierge service delivery ensuring every client feels valued and understood.",
    specialties: ["Client Relations", "Concierge Service", "Relocation"],
    rating: 5.0,
    listings: 52
  }
];

export const faqs = [
  {
    question: "Can I book a private viewing outside standard hours?",
    answer:
      "Yes. We offer flexible private tours and virtual appointments for qualified buyers, including evening and travel-sensitive requests. Simply reach out to your dedicated advisor or use our AI assistant to schedule instantly."
  },
  {
    question: "Do you handle off-market properties?",
    answer:
      "Yes. Select opportunities are available through our private networks and can be introduced based on fit and discretion requirements. Our relationships with exclusive developers give our clients first access before listings go public."
  },
  {
    question: "How does the AI assistant help?",
    answer:
      "Our AI Property Assistant answers instantly, narrows preferences, suggests matching inventory, and secures viewing times before handing off to our advisors. It's available 24/7 to answer questions about properties, neighborhoods, and the buying process."
  },
  {
    question: "Do you work with international buyers?",
    answer:
      "Absolutely. We support remote discovery, immersive virtual tours, and coordinated purchase guidance for domestic and international clients. Our team has experience with cross-border transactions and can connect you with trusted legal and financial partners."
  },
  {
    question: "What is the average time from first contact to closing?",
    answer:
      "For qualified buyers, the average timeline is 45-60 days from initial consultation to closing. However, we've completed transactions in as little as 14 days for cash buyers with clear criteria."
  },
  {
    question: "Are virtual tours available?",
    answer:
      "Yes. Every property in our portfolio is available for high-definition virtual tours. We use Matterport 3D scanning and live video walkthroughs to give you a complete sense of the space from anywhere in the world."
  }
];

export const awards = [
  "Top 1% Luxury Brokerage Network",
  "Certified International Property Specialist",
  "Trusted by leading mortgage and relocation partners",
  "Forbes Real Estate Award 2024",
  "Luxury Property Advisor of the Year"
];

export const trustBadges = [
  {
    label: "Google Reviews",
    rating: 5.0,
    count: "500+ reviews"
  },
  {
    label: "BBB Accredited",
    rating: "A+"
  },
  {
    label: "Years Experience",
    value: "18+"
  },
  {
    label: "Properties Sold",
    value: "$2.8B+"
  }
];

export const propertyTypes = [
  "All Properties",
  "Penthouse",
  "Townhouse",
  "Apartment",
  "Loft",
  "Estate",
  "Investment"
];

export const neighborhoods = [
  "All Neighborhoods",
  "Tribeca",
  "SoHo",
  "Upper East Side",
  "Brooklyn Heights",
  "Midtown",
  "Greenwich Village"
];

export const budgetRanges = [
  "Any Budget",
  "$1M - $3M",
  "$3M - $5M",
  "$5M - $10M",
  "$10M - $20M",
  "$20M+"
];

export const aiSuggestions = [
  "Luxury homes",
  "Apartments",
  "Investment properties",
  "Houses under $500k",
  "Ocean view",
  "Penthouse suites",
  "Waterfront estates",
  "Smart homes"
];

export const aiResponses: Record<string, string> = {
  "luxury homes": "I have access to an exclusive portfolio of luxury residences across Manhattan's most prestigious neighborhoods. Our collection includes penthouses with private terraces, historic townhomes, and modern architectural masterpieces ranging from $4M to $25M+. Would you like to see our featured properties or narrow down by neighborhood?",
  "apartments": "We represent some of the finest apartments in New York City, from sleek modern studios in Midtown to sprawling multi-bedroom residences on the Upper East Side. Our inventory includes full-service buildings with concierge amenities, private fitness centers, and stunning skyline views. What's your preferred neighborhood and budget?",
  "investment properties": "Excellent choice. Our investment portfolio includes high-yield rental properties, fix-and-flip opportunities, and development projects with strong ROI potential. Our advisors can provide detailed market analysis, cap rate projections, and connect you with trusted property management services. Shall I arrange a consultation with our investment team?",
  "houses under $500k": "While luxury homes in Manhattan typically start above $500k, I can help you explore emerging neighborhoods with great investment potential. Areas like Harlem, Washington Heights, and parts of Brooklyn offer excellent value with strong appreciation trends. Let me connect you with an advisor who specializes in first-time luxury buyers.",
  "ocean view": "Breathtaking! Our ocean-view portfolio features stunning waterfront properties in Brooklyn Heights, Battery Park City, and along the East River. These residences offer panoramic views of the harbor, bridges, and city skyline. Many include private terraces and floor-to-ceiling windows. Would you like to schedule a virtual tour of our waterfront collection?",
  "penthouse suites": "Our penthouse collection represents the pinnacle of New York City luxury living. These residences feature private roof terraces, panoramic views, custom interiors by renowned designers, and exclusive building amenities. Current availability includes a 4-bedroom Tribeca penthouse at $12.9M and a Central Park-facing residence at $8.75M. Shall I send you the full portfolio?",
  "waterfront estates": "Our waterfront estates offer the perfect blend of privacy and prestige. Located in prime waterfront neighborhoods, these properties feature private docks, expansive terraces, and uninterrupted water views. Perfect for those seeking a sanctuary within the city. I can arrange private viewings of our most exclusive waterfront listings.",
  "smart homes": "We specialize in tech-integrated luxury residences featuring smart home automation, energy-efficient systems, and cutting-edge security. Many of our listings include Lutron lighting, Crestron automation, integrated audio systems, and EV charging stations. The future of luxury living is intelligent and sustainable. Would you like to explore our smart home collection?"
};
