"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { awards, whyChooseUs } from "@/lib/data";

const icons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-royal">
    <rect x="3" y="3" width="7" height="9" />
    <rect x="14" y="3" width="7" height="5" />
    <rect x="14" y="12" width="7" height="9" />
    <rect x="3" y="16" width="7" height="5" />
  </svg>
];

const awardIcons = [
  <svg key="a1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9b6dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>,
  <svg key="a2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5f7dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>,
  <svg key="a3" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2fd0a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Left Panel - Awards & Trust */}
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-6 shadow-glass backdrop-blur-xl sm:p-8">
            <SectionHeading
              eyebrow="Why choose us"
              title="Luxury service is not a style choice. It is a system."
              description="From the first inquiry to the final signature, the experience is designed to feel calm, exacting, and highly responsive."
            />
            <div className="mt-10 space-y-3">
              {awards.map((award, i) => (
                <motion.div
                  key={award}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 text-sm leading-7 text-text transition hover:border-white/20 hover:bg-black/30"
                >
                  <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-plum/10">
                    {awardIcons[i]}
                  </span>
                  {award}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Panel - Why Choose Us Cards */}
          <div className="grid gap-5">
            {whyChooseUs.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 shadow-luxe transition-all duration-300 hover:border-white/20 hover:shadow-card-hover"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
                        {icons[index]}
                      </div>
                      <p className="text-2xl font-semibold tracking-[-0.03em] text-text">
                        {item.title}
                      </p>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-muted">
                      {item.description}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-gold">
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
