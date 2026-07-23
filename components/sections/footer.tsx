import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="pb-10">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/6 p-6 shadow-glass backdrop-blur-xl sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-gold">Premium footer</p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-text sm:text-4xl">
                A luxury landing page should end with confidence, clarity, and one obvious next step.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                Built for speed, responsiveness, and premium perception, this experience is ready
                to evolve into a full real estate platform while already feeling complete on day one.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted">Navigation</p>
                <div className="mt-4 grid gap-3 text-sm text-text">
                  <a href="#properties">Featured Properties</a>
                  <a href="#contact">Schedule Viewing</a>
                  <a href="#contact">Contact</a>
                  <a href="#contact">Private Consultation</a>
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted">Trust</p>
                <div className="mt-4 grid gap-3 text-sm text-text">
                  <p>Google Reviews</p>
                  <p>Awards & Certifications</p>
                  <p>Trusted Partners</p>
                  <p>Client Success Stories</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 BuzzleMax Luxury Real Estate.</p>
            <p>Fast, responsive, accessible, and designed for premium conversion.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
