"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { PropertyCard } from "@/components/ui/property-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProperties } from "@/lib/data";

export function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured properties"
            title="A curated collection of homes with presence, privacy, and investment appeal."
            description="Every listing is selected for design quality, location value, and long-term desirability. The presentation is intentionally editorial, with room for your team to swap in real inventory without redesigning the experience."
          />
          <a
            href="#contact"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/10 bg-white/6 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-text backdrop-blur-xl transition hover:border-plum/40 hover:bg-white/10"
          >
            Request the full portfolio
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
