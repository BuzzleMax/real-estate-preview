"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="pb-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Client success stories that feel personal, credible, and polished."
          description="Testimonials should read like informed recommendations from discerning buyers, not generic praise. The design keeps them premium by giving each quote space to breathe."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-6 shadow-glass backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-card-hover"
            >
              {/* Quote mark decoration */}
              <div className="absolute -top-3 -left-2 text-6xl leading-none text-plum/20 font-serif select-none">
                &ldquo;
              </div>

              {/* Star rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill={i < (testimonial.rating || 5) ? "#d4b36c" : "none"}
                    stroke="#d4b36c"
                    strokeWidth="1.5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="relative z-10 text-base leading-8 text-text/90 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-royal/40 via-plum/30 to-emerald/20 flex items-center justify-center text-sm font-semibold text-text">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">{testimonial.name}</p>
                    <p className="mt-0.5 text-xs text-muted/70">{testimonial.role}</p>
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Google Reviews aggregate badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
            <div className="flex text-gold text-sm tracking-wider">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <span className="text-sm text-muted">5.0 average rating from 500+ Google Reviews</span>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-xs uppercase tracking-[0.2em] text-emerald">Verified</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
