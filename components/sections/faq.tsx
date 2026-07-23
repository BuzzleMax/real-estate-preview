"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section className="pb-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Answer key questions before hesitation has time to build."
          description="A short, elegant FAQ increases confidence, especially on mobile, where visitors often want a fast sense of how premium and responsive the service will feel."
        />
        <div className="mt-12 grid gap-4">
          {faqs.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-glass backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-text">{item.question}</h3>
              <p className="mt-3 max-w-4xl text-base leading-8 text-muted">{item.answer}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
