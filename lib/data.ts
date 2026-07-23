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
    badge: "Private terrace"
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
    badge: "Concierge living"
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
    badge: "River views"
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
    role: "Buyer, Tribeca penthouse"
  },
  {
    quote:
      "Their process is polished, discreet, and exceptionally fast. The team made a high-stakes purchase feel calm and completely under control.",
    name: "Daniel Hart",
    role: "Investor, Upper East Side"
  },
  {
    quote:
      "The AI assistant helped us lock viewing times instantly, then the agents took over seamlessly. It felt premium at every step.",
    name: "Sophia Bennett",
    role: "Relocation client"
  }
];

export const agents = [
  {
    name: "Olivia Carter",
    role: "Managing Director",
    bio: "Specializes in luxury residences, private negotiations, and discreet buyer representation."
  },
  {
    name: "Julian Brooks",
    role: "Senior Property Advisor",
    bio: "Focused on high-value townhomes, skyline residences, and cross-market investment acquisitions."
  },
  {
    name: "Maya Sinclair",
    role: "Client Experience Lead",
    bio: "Coordinates high-touch showings, international buyer support, and concierge service delivery."
  }
];

export const faqs = [
  {
    question: "Can I book a private viewing outside standard hours?",
    answer:
      "Yes. We offer flexible private tours and virtual appointments for qualified buyers, including evening and travel-sensitive requests."
  },
  {
    question: "Do you handle off-market properties?",
    answer:
      "Yes. Select opportunities are available through private networks and can be introduced based on fit and discretion requirements."
  },
  {
    question: "How does the AI assistant help?",
    answer:
      "It answers instantly, narrows preferences, suggests matching inventory, and secures viewing times before handing off to our advisors."
  },
  {
    question: "Do you work with international buyers?",
    answer:
      "Absolutely. We support remote discovery, virtual tours, and coordinated purchase guidance for domestic and international clients."
  }
];

export const awards = [
  "Top 1% Luxury Brokerage Network",
  "Certified International Property Specialist",
  "Trusted by leading mortgage and relocation partners"
];
