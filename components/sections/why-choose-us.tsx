"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { awards, whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/6 p-6 shadow-glass backdrop-blur-xl sm:p-8">
            <SectionHeading
              eyebrow="Why choose us"
              title="Luxury service is not a style choice. It is a system."
              description="From the first inquiry to the final signature, the experience is designed to feel calm, exacting, and highly responsive."
            />
            <div className="mt-10 space-y-4">
              {awards.map((award) => (
                <div
                  key={award}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 text-sm leading-7 text-text"
                >
                  {award}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {whyChooseUs.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 shadow-luxe"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-2xl font-semibold tracking-[-0.03em] text-text">
                      {item.title}
                    </p>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                      {item.description}
                    </p>
                  </div>
                  <div className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-gold">
                    Premium
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
