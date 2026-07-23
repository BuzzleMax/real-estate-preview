"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Property } from "@/lib/data";

type PropertyCardProps = {
  property: Property;
  index?: number;
};

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-luxe backdrop-blur-xl transition-all duration-500 hover:shadow-card-hover hover:border-white/15"
    >
      {/* Featured Ribbon */}
      {property.featured && (
        <div className="absolute left-0 top-8 z-20">
          <div className="relative">
            <div className="bg-gradient-to-r from-gold to-amber-400 px-5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black shadow-lg">
              Featured
            </div>
            <div className="absolute -bottom-2 left-0 border-l-[12px] border-r-[12px] border-t-[8px] border-l-transparent border-r-transparent border-t-gold/70" />
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/30 to-transparent" />

        {/* Badge */}
        <div className="absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-md">
          {property.badge}
        </div>

        {/* Favorite Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setIsFavorited(!isFavorited)}
          type="button"
          aria-label={`Save ${property.title}`}
          className="absolute right-5 top-5 z-10 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/50 hover:scale-105"
        >
          <motion.svg
            animate={{ scale: isFavorited ? [1, 1.3, 1] : 1 }}
            transition={{ duration: 0.3 }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={isFavorited ? "#ff4b6e" : "none"}
            stroke={isFavorited ? "#ff4b6e" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </motion.svg>
        </motion.button>

        {/* Agent Badge */}
        {property.agent && (
          <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-royal to-plum" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/80">
              {property.agent}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-[0.28em] text-muted/70">{property.location}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-text truncate">
              {property.title}
            </h3>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-semibold gradient-text-gold whitespace-nowrap"
          >
            {property.price}
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-2 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
          {[
            { label: "Bedrooms", value: property.bedrooms, icon: "🛏" },
            { label: "Bathrooms", value: property.bathrooms, icon: "🚿" },
            { label: "Area", value: property.area, icon: "📐" }
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-lg font-semibold text-text">{item.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Year Built */}
        {property.yearBuilt && (
          <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <span className="text-xs text-muted/50">Year built</span>
            <span className="text-sm font-medium text-text">{property.yearBuilt}</span>
          </div>
        )}
      </div>
    </motion.article>
  );
}
