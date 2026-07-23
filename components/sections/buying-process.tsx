"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";

export function BuyingProcess() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Buying process"
              title="A refined journey from first inquiry to final close."
              description="The process should communicate calm expertise, not pressure. Each step removes complexity while preserving the exclusivity of the experience."
            />
          </div>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-glass backdrop-blur-xl sm:grid-cols-[84px_1fr]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/25 text-xl font-semibold text-text">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-text">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
