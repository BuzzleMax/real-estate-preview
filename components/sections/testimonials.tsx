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
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-glass backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-gold">Google Reviews</p>
              <p className="mt-5 text-lg leading-8 text-text">“{testimonial.quote}”</p>
              <footer className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-text">{testimonial.name}</p>
                <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
