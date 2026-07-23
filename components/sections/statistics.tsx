"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/ui/counter";
import { stats } from "@/lib/data";

// Parse numeric value from stat strings like "1,250+" -> 1250
function parseStatValue(value: string): number {
  return parseInt(value.replace(/[^0-9]/g, ""), 10);
}

// Get the suffix from stat strings like "1,250+" -> "+"
function getStatSuffix(value: string): string {
  const match = value.match(/[^0-9,]+/);
  return match ? match[0] : "";
}

// Check if value has a percentage
function isPercent(value: string): boolean {
  return value.includes("%");
}

export function Statistics() {
  return (
    <section className="pb-24">
      <Container>
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-6 shadow-glass backdrop-blur-xl sm:p-8">
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
                className="group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-black/30 to-black/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-black/40"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-plum/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="relative z-10 text-4xl font-semibold tracking-[-0.05em] gradient-text-gold">
                  <Counter
                    from={0}
                    to={parseStatValue(stat.value)}
                    suffix={getStatSuffix(stat.value)}
                    duration={2.5}
                  />
                </p>
                <p className="relative z-10 mt-3 text-sm uppercase tracking-[0.22em] text-muted/70">
                  {stat.label}
                </p>
                {/* Decorative line on hover */}
                <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-plum to-emerald transition-all duration-500 group-hover:w-1/3" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
