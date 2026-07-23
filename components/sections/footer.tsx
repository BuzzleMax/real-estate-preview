import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="pb-10">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-6 shadow-glass backdrop-blur-xl sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-royal to-plum text-sm font-semibold text-white">
                  BM
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">BuzzleMax</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted/60">Luxury Real Estate</p>
                </div>
              </div>
              <h2 className="max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-text sm:text-3xl">
                A luxury landing page should end with confidence, clarity, and one obvious next step.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                Built for speed, responsiveness, and premium perception, this experience is ready
                to evolve into a full real estate platform while already feeling complete on day one.
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2fd0a1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-[10px] text-muted">BBB Accredited</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d4b36c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-[10px] text-muted">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5f7dff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="9" />
                    <rect x="14" y="3" width="7" height="5" />
                    <rect x="14" y="12" width="7" height="9" />
                    <rect x="3" y="16" width="7" height="5" />
                  </svg>
                  <span className="text-[10px] text-muted">Top 1% Brokerage</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted/50">Navigation</p>
                <div className="mt-5 grid gap-3 text-sm text-text/80">
                  <a href="#properties" className="transition hover:text-text">Featured Properties</a>
                  <a href="#search" className="transition hover:text-text">Property Search</a>
                  <a href="#agents" className="transition hover:text-text">Meet Our Agents</a>
                  <a href="#contact" className="transition hover:text-text">Schedule Viewing</a>
                  <a href="#faq" className="transition hover:text-text">FAQ</a>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted/50">Trust & Awards</p>
                <div className="mt-5 grid gap-3 text-sm text-text/80">
                  <p>Top 1% Luxury Brokerage Network</p>
                  <p>Certified International Property Specialist</p>
                  <p>Trusted Partners: J.P. Morgan, Sotheby&apos;s</p>
                  <p>500+ Five-Star Google Reviews</p>
                  <p>BBB Accredited A+ Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-muted/60 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 BuzzleMax Luxury Real Estate. All rights reserved.</p>
            <p>Fast, responsive, accessible, and designed for premium conversion.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
