"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${alignment}`}
    >
      <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald/80">
        <span className="h-px w-6 bg-emerald/40" />
        {eyebrow}
        <span className="h-px w-6 bg-emerald/40" />
      </p>
      <h2 className="heading-lg font-semibold gradient-text-plum">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p>
    </motion.div>
  );
}
