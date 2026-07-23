"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { metrics } from "@/lib/data";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-0 sm:pt-4">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: imageY, opacity, scale }}
        className="absolute inset-0 -top-20 -bottom-20 -left-10 -right-10"
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury property background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/85 via-canvas/60 to-canvas" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(155,109,255,0.12),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(47,208,161,0.08),transparent_40%)]" />
      </motion.div>

      <Container className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
        <div className="relative">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] text-muted backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Luxury property advisory &mdash; NYC&apos;s finest residences
          </motion.div>

          {/* Main heading */}
          <motion.div className="mt-10 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl font-semibold"
            >
              <span className="gradient-text-plum">Discover</span> Your
              <br />
              <span className="gradient-text-gold">Dream Property</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg sm:leading-9"
            >
              Discover exceptional residences through a premium advisory experience built for
              buyers who value discretion, speed, and beautifully curated opportunities in the
              world&apos;s most desirable addresses.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-full px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-royal via-plum to-emerald" />
              <span className="absolute inset-0 bg-gradient-to-r from-royal to-plum opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Schedule Viewing</span>
              <span className="relative z-10 ml-2">&rarr;</span>
            </a>
            <a
              href="#properties"
              className="group inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/8 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-text backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/12 hover:scale-[1.01]"
            >
              Explore Properties
              <span className="ml-2 text-muted transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </motion.div>

          {/* Trust badges row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <div className="flex text-gold text-sm tracking-wider">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <span className="text-xs text-muted">500+ Google Reviews</span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald/20">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2fd0a1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-xs text-muted">BBB Accredited A+</span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-plum/20">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9b6dff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <span className="text-xs text-muted">18+ Years Experience</span>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                className="group relative rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-b from-plum/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="relative z-10 text-3xl font-semibold tracking-[-0.04em] gradient-text-gold">
                  {metric.value}
                </p>
                <p className="relative z-10 mt-2 text-sm uppercase tracking-[0.22em] text-muted/70">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute right-[10%] top-[25%] z-10 hidden lg:block"
      >
        <div className="h-64 w-64 rounded-full border border-white/5 bg-gradient-to-br from-plum/10 to-emerald/5 blur-3xl" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute left-[5%] top-[60%] z-10 hidden lg:block"
      >
        <div className="h-48 w-48 rounded-full bg-gradient-to-br from-royal/10 to-transparent blur-3xl" />
      </motion.div>
    </section>
  );
}
