"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const inputs = ["Full name", "Email address", "Phone number", "Preferred neighborhood"];

export function ContactForm() {
  return (
    <section id="contact" className="pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/6 p-6 shadow-glass backdrop-blur-xl sm:p-8">
            <SectionHeading
              eyebrow="Contact"
              title="Schedule a private viewing or speak with an advisor."
              description="The contact section is designed to convert cleanly without feeling transactional. Pair this with a sticky mobile CTA to keep response pathways obvious."
            />
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-[0.26em] text-muted">Google Map</p>
              <div className="mt-5 h-72 rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(95,125,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />
              <p className="mt-4 text-sm leading-7 text-muted">
                Replace this map panel with your preferred embed or office location details in the
                production handoff.
              </p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 shadow-luxe backdrop-blur-xl sm:p-8"
          >
            <p className="text-sm uppercase tracking-[0.26em] text-gold">Private consultation</p>
            <div className="mt-8 grid gap-4">
              {inputs.map((label) => (
                <label key={label} className="grid gap-2 text-sm text-muted">
                  <span>{label}</span>
                  <input
                    type="text"
                    placeholder={label}
                    className="min-h-14 rounded-[1.25rem] border border-white/10 bg-black/20 px-5 text-text outline-none transition placeholder:text-muted/70 focus:border-plum/60 focus:ring-2 focus:ring-plum/20"
                  />
                </label>
              ))}
              <label className="grid gap-2 text-sm text-muted">
                <span>Tell us what you are looking for</span>
                <textarea
                  rows={5}
                  placeholder="Budget, timeline, neighborhoods, and any must-have features."
                  className="rounded-[1.25rem] border border-white/10 bg-black/20 px-5 py-4 text-text outline-none transition placeholder:text-muted/70 focus:border-plum/60 focus:ring-2 focus:ring-plum/20"
                />
              </label>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold uppercase tracking-[0.18em] text-canvas transition hover:scale-[1.01] hover:bg-emerald"
              >
                Schedule Viewing
              </button>
              <button
                type="button"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/10 bg-white/6 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-text backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10"
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
