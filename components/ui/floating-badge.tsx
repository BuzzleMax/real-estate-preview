"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FloatingBadge() {
  return (
    <motion.div
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className="fixed left-0 top-1/2 z-50 -translate-y-1/2"
    >
      <motion.div
        whileHover={{ x: 8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="https://buzzlemax.site"
          target="_blank"
          rel="noreferrer"
          aria-label="Made by BuzzleMax"
          className="group ml-[-18px] flex h-48 w-14 items-center justify-center rounded-r-full border border-white/15 bg-gradient-to-r from-white/12 to-white/6 text-[11px] font-medium uppercase tracking-[0.3em] text-white shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-plum/50 hover:bg-gradient-to-r from-plum/20 to-white/8"
        >
          {/* Glow effect */}
          <span className="absolute -inset-3 -z-10 rounded-full bg-plum/30 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
          {/* Purple accent line */}
          <span className="absolute inset-y-6 right-1.5 w-0.5 rounded-full bg-gradient-to-b from-transparent via-plum via-50% to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_12px_rgba(155,109,255,0.6)]" />
          {/* Shimmer overlay */}
          <span className="absolute inset-0 rounded-r-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <span className="relative -rotate-180 [writing-mode:vertical-rl] tracking-[0.35em] leading-loose">
            Made by BuzzleMax
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
