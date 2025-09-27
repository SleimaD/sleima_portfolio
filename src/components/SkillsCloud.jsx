"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function SkillsCloud({ tags = [] }) {
  const prefersReducedMotion = useReducedMotion();

  const columns = useMemo(() => {
    if (tags.length <= 10) return 2;
    if (tags.length <= 20) return 3;
    return 4;
  }, [tags.length]);

  return (
    <div
      className="skills-cloud mx-auto grid max-w-5xl gap-4"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 2 ? "140px" : "160px"}, 1fr))` }}
      role="list"
      aria-label="Skills cloud"
    >
      {tags.map((tag, index) => (
        <motion.span
          key={tag}
          className="relative inline-flex items-center justify-center rounded-full border border-base bg-transparent px-5 py-3 text-sm uppercase tracking-[0.3em] text-muted transition duration-200 ease-out hover:border-strong hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          role="listitem"
          whileHover={prefersReducedMotion ? { scale: 1.02 } : { scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: EASE, delay: Math.min(index * 0.04, 0.4) }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}
