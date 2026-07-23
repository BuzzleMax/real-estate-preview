"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { neighborhoods, budgetRanges, propertyTypes } from "@/lib/data";

const filterConfig = [
  {
    label: "City",
    key: "city",
    options: neighborhoods,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    label: "Budget",
    key: "budget",
    options: budgetRanges,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    label: "Bedrooms",
    key: "bedrooms",
    options: ["Any", "1", "2", "3", "4", "5+"],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
        <path d="M21 7H3l2-4h14l2 4z" />
      </svg>
    )
  },
  {
    label: "Bathrooms",
    key: "bathrooms",
    options: ["Any", "1", "2", "3", "4+"],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z" />
        <path d="M6 12V5a2 2 0 0 1 2-2h3v2.25" />
      </svg>
    )
  },
  {
    label: "Property Type",
    key: "propertyType",
    options: propertyTypes,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
];

export function PropertySearch() {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({
    city: "All Neighborhoods",
    budget: "Any Budget",
    bedrooms: "Any",
    bathrooms: "Any",
    propertyType: "All Properties"
  });

  const toggleFilter = (key: string) => {
    setOpenFilter(openFilter === key ? null : key);
  };

  const selectOption = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setOpenFilter(null);
  };

  return (
    <section id="search" className="pb-24">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-6 shadow-glass backdrop-blur-xl sm:p-8">
          <SectionHeading
            eyebrow="Property search"
            title="AI-Powered property discovery for the discerning buyer."
            description="Our intelligent search engine learns your preferences across neighborhoods, budgets, and property types. Large tap targets and a glass interface keep high-intent visitors moving effortlessly."
          />

          {/* Search Filters */}
          <div className="mt-10">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {filterConfig.map((filter) => (
                <div key={filter.key} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleFilter(filter.key)}
                    className={`flex min-h-14 w-full items-center justify-between gap-3 rounded-[1.25rem] border px-4 text-left text-sm transition-all duration-200 ${
                      openFilter === filter.key
                        ? "border-plum/50 bg-plum/10 shadow-lg shadow-plum/10"
                        : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-black/30"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="shrink-0 text-muted/60">{filter.icon}</span>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted/50">
                          {filter.label}
                        </p>
                        <p className="truncate text-sm font-medium text-text">
                          {filters[filter.key]}
                        </p>
                      </div>
                    </div>
                    <motion.svg
                      animate={{ rotate: openFilter === filter.key ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-muted/60"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </motion.svg>
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {openFilter === filter.key && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-surface/95 shadow-2xl backdrop-blur-2xl"
                      >
                        <div className="max-h-56 overflow-y-auto p-2">
                          {filter.options.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => selectOption(filter.key, option)}
                              className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm transition ${
                                filters[filter.key] === option
                                  ? "bg-plum/20 text-text"
                                  : "text-muted hover:bg-white/5 hover:text-text"
                              }`}
                            >
                              {filters[filter.key] === option && (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mr-3 shrink-0 text-plum"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                              <span className={filters[filter.key] === option ? "" : "ml-7"}>
                                {option}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Search Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <button
                type="button"
                className="group relative w-full overflow-hidden rounded-[1.25rem] bg-gradient-to-r from-royal via-plum to-emerald px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-plum/20 transition-all duration-300 hover:shadow-xl hover:shadow-plum/30 hover:scale-[1.005]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-plum to-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Search Properties
                  <span className="text-white/60">&middot;</span>
                  <span className="text-xs font-normal normal-case tracking-normal text-white/80">
                    {filters.city} &mdash; {filters.budget}
                  </span>
                </span>
              </button>
            </motion.div>

            {/* Active filters display */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-4 flex flex-wrap items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted/40">Active filters:</span>
              {Object.entries(filters).map(([key, value]) => (
                value &&
                value !== "Any" &&
                value !== "All Neighborhoods" &&
                value !== "Any Budget" &&
                value !== "All Properties" && (
                  <span
                    key={key}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-muted"
                  >
                    {value}
                    <button
                      type="button"
                      onClick={() =>
                        selectOption(
                          key,
                          key === "city"
                            ? "All Neighborhoods"
                            : key === "budget"
                            ? "Any Budget"
                            : key === "propertyType"
                            ? "All Properties"
                            : "Any"
                        )
                      }
                      className="text-muted/40 hover:text-text transition"
                    >
                      &times;
                    </button>
                  </span>
                )
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
