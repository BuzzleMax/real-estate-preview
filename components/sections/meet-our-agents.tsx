"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { agents } from "@/lib/data";

export function MeetOurAgents() {
  return (
    <section className="pb-24">
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
                className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-glass backdrop-blur-xl sm:grid-cols-[120px_1fr]"
              >
                <div className="h-[120px] rounded-[1.75rem] bg-gradient-to-br from-royal/40 via-plum/30 to-emerald/20" />
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-text">{agent.name}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-gold">{agent.role}</p>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-muted">{agent.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
