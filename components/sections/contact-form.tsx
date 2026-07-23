"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const inputs = [
  { label: "Full name", type: "text", placeholder: "Your full name" },
  { label: "Email address", type: "email", placeholder: "your@email.com" },
  { label: "Phone number", type: "tel", placeholder: "+1 (555) 000-0000" },
  { label: "Preferred neighborhood", type: "text", placeholder: "e.g. Tribeca, SoHo, Upper East Side" }
];

export function ContactForm() {
  return (
    <section id="contact" className="pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left panel - Info & Map */}
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-6 shadow-glass backdrop-blur-xl sm:p-8">
            <SectionHeading
              eyebrow="Contact"
              title="Schedule a private viewing or speak with an advisor."
              description="The contact section is designed to convert cleanly without feeling transactional. Pair this with a sticky mobile CTA to keep response pathways obvious."
            />
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-xs uppercase tracking-[0.26em] text-muted">Prime Locations</p>
              </div>
              <div className="h-72 rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(95,125,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] relative overflow-hidden">
                {/* Decorative map pins */}
                <div className="absolute top-[20%] left-[25%]">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-xl">
                    <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.1em] text-text">Tribeca</span>
                  </div>
                </div>
                <div className="absolute top-[40%] left-[55%]">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-xl">
                    <span className="h-2 w-2 rounded-full bg-royal animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.1em] text-text">SoHo</span>
                  </div>
                </div>
                <div className="absolute top-[60%] left-[35%]">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-xl">
                    <span className="h-2 w-2 rounded-full bg-plum animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.1em] text-text">UES</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs leading-6 text-muted/60">
                Serving New York&apos;s most prestigious neighborhoods with white-glove service.
              </p>
            </div>

            {/* Quick contact info */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted/50">Phone</p>
                <p className="mt-2 text-sm text-text">+1 (212) 555-0189</p>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted/50">Email</p>
                <p className="mt-2 text-sm text-text">concierge@buzzlemax.com</p>
              </div>
            </div>
          </div>

          {/* Right panel - Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 shadow-luxe backdrop-blur-xl sm:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-3 w-3 rounded-full bg-emerald animate-pulse" />
              <p className="text-xs uppercase tracking-[0.26em] text-gold">Private consultation</p>
            </div>
            <div className="grid gap-5">
              {inputs.map((field) => (
                <label key={field.label} className="group grid gap-2 text-sm text-muted">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted/50">{field.label}</span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="min-h-14 rounded-[1.25rem] border border-white/10 bg-black/20 px-5 text-text outline-none transition-all duration-200 placeholder:text-muted/30 focus:border-plum/60 focus:ring-2 focus:ring-plum/20 focus:bg-black/30"
                  />
                </label>
              ))}
              <label className="group grid gap-2 text-sm text-muted">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted/50">Your requirements</span>
                <textarea
                  rows={4}
                  placeholder="Budget, timeline, neighborhoods, and any must-have features..."
                  className="rounded-[1.25rem] border border-white/10 bg-black/20 px-5 py-4 text-text outline-none transition-all duration-200 placeholder:text-muted/30 focus:border-plum/60 focus:ring-2 focus:ring-plum/20 focus:bg-black/30 resize-none"
                />
              </label>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="group relative inline-flex min-h-14 flex-1 items-center justify-center overflow-hidden rounded-full text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.01]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-royal via-plum to-emerald" />
                <span className="absolute inset-0 bg-gradient-to-r from-plum to-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Viewing
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/10 bg-white/6 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-text backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                Talk to concierge
              </button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
