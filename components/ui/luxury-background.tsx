"use client";

import { useEffect, useRef } from "react";

type LuxuryBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  lights?: ("plum" | "emerald" | "royal")[];
};

export function LuxuryBackground({
  children,
  className = "",
  lights = ["plum", "emerald", "royal"]
}: LuxuryBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Ambient Lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {lights.includes("plum") && (
          <div
            className="ambient-light ambient-plum"
            style={{
              top: "10%",
              left: "5%",
              animationDelay: "0s"
            }}
          />
        )}
        {lights.includes("emerald") && (
          <div
            className="ambient-light ambient-emerald"
            style={{
              bottom: "15%",
              right: "8%",
              animationDelay: "-3s"
            }}
          />
        )}
        {lights.includes("royal") && (
          <div
            className="ambient-light ambient-royal"
            style={{
              top: "40%",
              left: "50%",
              animationDelay: "-6s"
            }}
          />
        )}
      </div>

      {/* Luxury Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 luxury-grid opacity-30" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
