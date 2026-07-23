import { Navbar } from "@/components/ui/navbar";
import { LuxuryBackground } from "@/components/ui/luxury-background";
import { BuyingProcess } from "@/components/sections/buying-process";
import { ContactForm } from "@/components/sections/contact-form";
import { FeaturedProperties } from "@/components/sections/featured-properties";
import { Footer } from "@/components/sections/footer";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { InteractiveMap } from "@/components/sections/interactive-map";
import { MeetOurAgents } from "@/components/sections/meet-our-agents";
import { PropertySearch } from "@/components/sections/property-search";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

function StickyMobileCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 sm:hidden">
      <a
        href="#contact"
        className="flex min-h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-royal via-plum to-emerald px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-luxe transition hover:scale-[1.01]"
      >
        Schedule Viewing
      </a>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen pb-24">
      <LuxuryBackground />
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <PropertySearch />
      <InteractiveMap />
      <WhyChooseUs />
      <Statistics />
      <BuyingProcess />
      <Testimonials />
      <MeetOurAgents />
      <Faq />
      <ContactForm />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
