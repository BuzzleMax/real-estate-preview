"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Property } from "@/lib/data";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-luxe backdrop-blur-xl"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white backdrop-blur-md">
          {property.badge}
        </div>
        <button
          type="button"
          aria-label={`Save ${property.title}`}
          className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/25 p-3 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/40"
        >
          ♡
        </button>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">{property.location}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-text">
              {property.title}
            </h3>
          </div>
          <p className="text-lg font-semibold text-gold">{property.price}</p>
        </div>

        <div className="grid grid-cols-3 gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm text-muted">
          <div>
            <p className="text-text">{property.bedrooms}</p>
            <p>Bedrooms</p>
          </div>
          <div>
            <p className="text-text">{property.bathrooms}</p>
            <p>Bathrooms</p>
          </div>
          <div>
            <p className="text-text">{property.area}</p>
            <p>Area</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
