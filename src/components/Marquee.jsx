"use client";

import { useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function Marquee({ items = [], duration = 20 }) {
  const prefersReducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  const sequence = useMemo(() => {
    if (!items.length) return [];
    return [...items, ...items, ...items];
  }, [items]);

  const pause = prefersReducedMotion ? true : isPaused;

  return (
    <div
      className="marquee mt-6 sm:mt-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      data-paused={pause}
      style={{ "--marquee-duration": `${duration}s` }}
    >
      <div className="marquee-track" aria-hidden="true">
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
