"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function AboutShowcase({ content }) {
  const prefersReducedMotion = useReducedMotion();
  const [spotlight, setSpotlight] = useState({ active: false, x: "50%", y: "50%" });

  if (!content) return null;

  const { headline, paragraphs = [], callouts = [] } = content;

  const handleMove = (event) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = `${((event.clientX - rect.left) / rect.width) * 100}%`;
    const y = `${((event.clientY - rect.top) / rect.height) * 100}%`;
    setSpotlight({ active: true, x, y });
  };

  const handleLeave = () => {
    if (prefersReducedMotion) return;
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  return (
    <div className="about-showcase grid gap-8 rounded-[32px] border border-base bg-surface p-6 shadow-soft backdrop-blur sm:gap-10 sm:p-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-12 lg:p-10">
      <motion.div
        className="relative overflow-hidden rounded-[26px] border border-base bg-surface-solid p-6 sm:p-8"
        data-spotlight={spotlight.active ? "true" : "false"}
        style={{ "--about-x": spotlight.x, "--about-y": spotlight.y }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-[0.22,1,0.36,1] [background:radial-gradient(circle_at_var(--about-x,50%)_var(--about-y,50%),var(--color-accent-soft),transparent_68%)]" data-active={spotlight.active ? "true" : "false"} />
        <div className="relative space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-muted">Signature</p>
          <h3 className="text-title text-2xl leading-snug md:text-3xl">
            {headline}
          </h3>
          <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">
            {paragraphs.map((paragraph, index) => (
              <p key={`about-paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid gap-5 sm:gap-6">
        {callouts.map((callout, index) => (
          <motion.div
            key={`${callout.label}-${index}`}
            className="about-pill group relative overflow-hidden rounded-[22px] border border-base bg-surface-soft px-5 py-5 sm:px-6 sm:py-6"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE, delay: Math.min(index * 0.08, 0.4) }}
          >
            <div className="absolute inset-0 translate-y-full bg-[radial-gradient(circle_at_top,var(--color-accent-soft),transparent_60%)] opacity-0 transition duration-500 ease-[0.22,1,0.36,1] group-hover:translate-y-0 group-hover:opacity-100" />
            <div className="relative space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.45em] text-muted">
                {callout.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {callout.items?.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-base bg-transparent px-3 py-2 text-[0.7rem] uppercase tracking-[0.32em] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
