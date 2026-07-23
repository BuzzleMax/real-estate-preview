"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Properties", href: "#properties" },
  { label: "Search", href: "#search" },
  { label: "Why Us", href: "#why-us" },
  { label: "Agents", href: "#agents" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Update active section based on scroll position
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 sm:pt-5"
      >
        <motion.nav
          className={`flex items-center justify-between rounded-full border px-4 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border-white/10 bg-black/60 shadow-glass backdrop-blur-2xl"
              : "border-white/8 bg-black/30 shadow-lg backdrop-blur-xl"
          }`}
          style={{
            width: "min(92vw, 1200px)",
            minHeight: scrolled ? "56px" : "64px"
          }}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-royal via-plum to-emerald sm:h-10 sm:w-10">
              <span className="relative z-10 text-xs font-bold tracking-wider text-white sm:text-sm">
                BM
              </span>
              <div className="absolute inset-0 rounded-full bg-plum/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] uppercase tracking-[0.28em] text-muted/70">
                Luxury Real Estate
              </p>
              <p className="text-sm font-semibold tracking-tight text-text">
                BuzzleMax
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                    isActive
                      ? "text-text"
                      : "text-muted/70 hover:text-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-white/8"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-royal via-plum to-emerald px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-plum/20 transition-all duration-300 hover:shadow-xl hover:shadow-plum/30 hover:scale-[1.02] sm:inline-flex"
            >
              Schedule Viewing
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 backdrop-blur-xl transition hover:bg-white/12 md:hidden"
            >
              <div className="flex w-5 flex-col items-center gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="h-px w-5 bg-text"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="h-px w-5 bg-text"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="h-px w-5 bg-text"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-end justify-center bg-black/70 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-lg rounded-t-[2.5rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-8 pb-12 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-center gap-4 rounded-2xl px-5 py-4 text-left text-lg font-medium text-text transition hover:bg-white/8"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-mono text-muted">
                      0{i + 1}
                    </span>
                    <span>{link.label}</span>
                    <span className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-royal via-plum to-emerald text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-plum/20"
                >
                  Schedule Viewing
                </a>
                <p className="mt-4 text-center text-xs text-muted/50">
                  BuzzleMax Luxury Real Estate
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
