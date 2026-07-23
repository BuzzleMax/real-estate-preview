"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/lib/data";

export function Statistics() {
  return (
    <section className="pb-24">
      <Container>
        <div className="rounded-[2.5rem] border border-white/10 bg-white/6 p-6 shadow-glass backdrop-blur-xl sm:p-8">
          <SectionHeading
            eyebrow="Statistics"
            title="Measured results that reinforce trust without overwhelming the page."
            description="Use this section to reassure visitors that they are dealing with an experienced team, while preserving the restraint expected of a premium brand."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[2rem] border border-white/10 bg-black/20 p-6 text-center"
              >
                <p className="text-4xl font-semibold tracking-[-0.05em] text-text">{stat.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
