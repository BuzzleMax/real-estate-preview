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
      <motion.div whileHover={{ x: 6 }} transition={{ duration: 0.25 }}>
        <Link
          href="https://buzzlemax.site"
          target="_blank"
          rel="noreferrer"
          aria-label="Made by BuzzleMax"
          className="group ml-[-18px] flex h-44 w-12 items-center justify-center rounded-r-full border border-white/15 bg-white/10 text-[11px] font-medium uppercase tracking-[0.26em] text-white shadow-glass backdrop-blur-xl transition-all duration-300 hover:border-plum/50 hover:bg-white/14"
        >
          <span className="absolute inset-y-4 right-1 w-px bg-gradient-to-b from-transparent via-plum/80 to-transparent opacity-90" />
          <span className="absolute -inset-2 -z-10 rounded-full bg-plum/25 blur-xl transition duration-300 group-hover:bg-plum/35" />
          <span className="-rotate-180 [writing-mode:vertical-rl]">Made by BuzzleMax</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
