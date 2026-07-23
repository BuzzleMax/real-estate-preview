"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const districts = [
  { name: "Tribeca", homes: "28 listings", x: "18%", y: "30%" },
  { name: "SoHo", homes: "14 listings", x: "36%", y: "48%" },
  { name: "Upper East Side", homes: "33 listings", x: "68%", y: "24%" },
  { name: "Brooklyn Heights", homes: "19 listings", x: "58%", y: "70%" }
];

export function InteractiveMap() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/6 p-6 shadow-glass backdrop-blur-xl sm:p-8">
            <SectionHeading
              eyebrow="Interactive map"
              title="Guide buyers by neighborhood, not just by filters."
              description="Map-led discovery gives the experience a confident editorial feel while helping visitors understand context, prestige, and proximity faster."
            />
            <div className="mt-10 grid gap-4">
              {districts.map((district) => (
                <div
                  key={district.name}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-text">{district.name}</p>
                      <p className="mt-2 text-sm text-muted">{district.homes}</p>
                    </div>
                    <div className="rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald">
                      Explore
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(95,125,255,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-luxe sm:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
            <div className="relative h-[420px] rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(47,208,161,0.08),transparent_34%),linear-gradient(180deg,rgba(5,8,22,0.8),rgba(5,8,22,0.4))]">
              {districts.map((district, index) => (
                <motion.div
                  key={district.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="absolute"
                  style={{ left: district.x, top: district.y }}
                >
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-plum/30 blur-xl" />
                    <div className="relative rounded-full border border-white/12 bg-white/12 px-4 py-3 text-xs uppercase tracking-[0.2em] text-text backdrop-blur-xl">
                      {district.name}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="absolute bottom-6 left-6 max-w-sm rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.24em] text-muted">Map intelligence</p>
                <p className="mt-3 text-sm leading-7 text-text">
                  Pair this with live inventory feeds later, or keep it editorial for a cleaner
                  first launch with stronger performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
