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
import { Container } from "@/components/ui/container";

function StickyMobileCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 sm:hidden">
      <a
        href="#contact"
        className="flex min-h-14 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.18em] text-canvas shadow-luxe"
      >
        Schedule Viewing
      </a>
    </div>
  );
}

function TopNav() {
  return (
    <Container className="pt-5">
      <header className="sticky top-4 z-30 rounded-full border border-white/10 bg-black/20 px-5 py-4 shadow-glass backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-sm font-semibold uppercase tracking-[0.18em] text-text">
              BM
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-muted">Luxury real estate</p>
              <p className="text-base font-semibold text-text">BuzzleMax Private Advisory</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-muted sm:text-sm">
            <a href="#properties">Properties</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Viewings</a>
            <a href="#contact">Consultation</a>
          </nav>
        </div>
      </header>
    </Container>
  );
}

export default function HomePage() {
  return (
    <main className="pb-24">
      <TopNav />
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
