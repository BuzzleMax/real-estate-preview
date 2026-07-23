"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { metrics } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-hero-grid shadow-luxe">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(95,125,255,0.22),transparent_28%),linear-gradient(120deg,rgba(4,7,18,0.92),rgba(5,8,22,0.64))]" />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-black/20 via-transparent to-transparent lg:block" />
          <div className="relative grid min-h-[760px] gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-10">
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-emerald" />
                  Luxury property advisory
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-text sm:text-6xl lg:text-7xl"
                >
                  Find Your Dream Property.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg"
                >
                  Discover exceptional residences through a premium advisory experience built for
                  buyers who value discretion, speed, and beautifully curated opportunities in the
                  world’s most desirable addresses.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href="#contact"
                    className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold uppercase tracking-[0.18em] text-canvas transition hover:scale-[1.01] hover:bg-emerald hover:text-canvas"
                  >
                    Schedule Viewing
                  </a>
                  <a
                    href="#properties"
                    className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/8 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-text backdrop-blur-xl transition hover:border-white/20 hover:bg-white/12"
                  >
                    Explore Properties
                  </a>
                </motion.div>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.75rem] border border-white/10 bg-black/18 p-5 backdrop-blur-md"
                  >
                    <p className="text-3xl font-semibold tracking-[-0.04em] text-text">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-end">
              <div className="absolute left-5 top-6 z-10 max-w-[220px] rounded-[1.75rem] border border-white/10 bg-white/10 p-4 shadow-glass backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">★★★★★ Reviews</p>
                <p className="mt-3 text-sm leading-7 text-text">
                  Trusted by private buyers, investors, and relocation clients seeking a more
                  refined purchase experience.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[520px] w-full overflow-hidden rounded-[2.25rem] border border-white/10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80"
                  alt="Luxury modern property exterior"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] border border-white/10 bg-black/25 p-5 backdrop-blur-xl">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-muted">
                        Featured residence
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-text">
                        Waterfront glass estate with panoramic skyline views
                      </p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/8 px-4 py-3 text-sm text-text">
                      Private viewing slots available this week
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
