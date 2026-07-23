"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { searchFilters } from "@/lib/data";

export function PropertySearch() {
  return (
    <section className="pb-24">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/6 p-6 shadow-glass backdrop-blur-xl sm:p-8">
          <SectionHeading
            eyebrow="Property search"
            title="Search beautifully, filter quickly, and move into a conversation without friction."
            description="This search experience is designed to feel premium on both mobile and desktop, with large tap targets and a layout that keeps high-intent visitors moving."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_repeat(4,1fr)_auto]">
            {searchFilters.map((filter, index) => (
              <motion.button
                key={filter}
                type="button"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="flex min-h-16 items-center justify-between rounded-[1.5rem] border border-white/10 bg-black/20 px-5 text-left text-sm text-text transition hover:border-white/20 hover:bg-black/30"
              >
                <span className="uppercase tracking-[0.16em] text-muted">{filter}</span>
                <span className="text-muted">+</span>
              </motion.button>
            ))}
            <button
              type="button"
              className="min-h-16 rounded-[1.5rem] bg-gradient-to-r from-royal via-plum to-emerald px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:scale-[1.01]"
            >
              Search
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
