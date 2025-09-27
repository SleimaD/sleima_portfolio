"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function GlitchHeading({
  as = "h1",
  children,
  className = "",
  delay = 0,
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = useMemo(() => motion.create(as), [as]);

  return (
    <MotionTag
      className={`glitch-heading ${className}`.trim()}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: prefersReducedMotion ? 1 : 1.15, ease: EASE, delay }}
    >
      <span className="glitch-heading__main">{children}</span>
      {!prefersReducedMotion && (
        <>
          <span aria-hidden className="glitch-heading__ghost glitch-heading__ghost--cyan">
            {children}
          </span>
          <span aria-hidden className="glitch-heading__ghost glitch-heading__ghost--magenta">
            {children}
          </span>
        </>
      )}
    </MotionTag>
  );
}
