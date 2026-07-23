"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { agents } from "@/lib/data";

export function MeetOurAgents() {
  return (
    <section id="agents" className="pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Meet our agents"
            title="A visible team adds warmth, credibility, and a sense of direct access."
            description="This section balances authority with hospitality. Swap in approved photography later, but keep the layout intact so the brand feels consistent across every viewport."
          />

          <div className="grid gap-5">
            {agents.map((agent, index) => (
              <motion.article
                key={agent.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group grid gap-5 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-6 shadow-glass backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-card-hover sm:grid-cols-[100px_1fr]"
              >
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-royal/40 via-plum/30 to-emerald/20">
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-text/40">
                    {agent.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <p className="text-xl font-semibold tracking-[-0.02em] text-text">
                        {agent.name}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-gold">
                        {agent.role}
                      </p>
                    </div>
                    {/* Rating badge */}
                    {agent.rating && (
                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#d4b36c" stroke="#d4b36c" strokeWidth="1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span className="text-xs text-gold">{agent.rating}</span>
                      </div>
                    )}
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                    {agent.bio}
                  </p>
                  {/* Specialties tags */}
                  {agent.specialties && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {agent.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-muted/60"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
