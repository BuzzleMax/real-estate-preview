"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { PropertyCard } from "@/components/ui/property-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProperties, propertyTypes } from "@/lib/data";

export function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState("All Properties");

  const filteredProperties =
    activeFilter === "All Properties"
      ? featuredProperties
      : featuredProperties.filter((p) => p.badge.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="properties" className="relative py-24 sm:py-28">
      {/* Premium ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-plum/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald/5 blur-3xl" />
      </div>

      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured properties"
            title="A curated collection of homes with presence, privacy, and investment appeal."
            description="Every listing is selected for design quality, location value, and long-term desirability. The presentation is intentionally editorial, with room for your team to swap in real inventory without redesigning the experience."
          />
          <a
            href="#contact"
            className="group inline-flex min-h-14 items-center justify-center rounded-full border border-white/10 bg-white/6 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-text backdrop-blur-xl transition-all duration-300 hover:border-plum/40 hover:bg-white/10 hover:scale-[1.01]"
          >
            Request the full portfolio
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`relative rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                activeFilter === type
                  ? "text-white"
                  : "text-muted/60 hover:text-text hover:bg-white/5"
              }`}
            >
              {activeFilter === type && (
                <motion.span
                  layoutId="property-filter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-royal/80 to-plum/80"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{type}</span>
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-muted transition hover:text-text"
          >
            <span className="h-px w-8 bg-muted/30" />
            View All Properties
            <span className="h-px w-8 bg-muted/30" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
