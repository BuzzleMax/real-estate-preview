export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/6 p-10 text-center shadow-glass backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.26em] text-gold">Page not found</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-text">
          This page does not exist.
        </h1>
        <p className="mt-4 text-base leading-8 text-muted">
          Return to the homepage to continue exploring the luxury real estate experience.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold uppercase tracking-[0.18em] text-canvas transition hover:scale-[1.01] hover:bg-emerald"
        >
          Back to home
        </a>
      </div>
    </main>
  );
}
