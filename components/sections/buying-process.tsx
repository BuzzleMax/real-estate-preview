"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";

const stepIcons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-royal">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-plum">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
];

export function BuyingProcess() {
  return (
    <section id="process" className="pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Buying process"
              title="A refined journey from first inquiry to final close."
              description="The process should communicate calm expertise, not pressure. Each step removes complexity while preserving the exclusivity of the experience."
            />
            <div className="mt-8 hidden lg:block">
              <div className="relative flex items-start gap-4 pl-6">
                <div className="absolute left-[17px] top-3 h-full w-px bg-gradient-to-b from-plum/40 via-emerald/20 to-transparent" />
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted/40">Start</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-plum/60">Finish</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group grid gap-5 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-6 shadow-glass backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-card-hover sm:grid-cols-[84px_1fr]"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-xl">
                  <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-royal/10 to-plum/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{stepIcons[index]}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
