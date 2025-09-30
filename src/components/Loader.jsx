"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Loader({ onComplete, duration = 1800 }) {
  const prefersReducedMotion = useReducedMotion();
  const [isClosing, setIsClosing] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => setIsClosing(true), prefersReducedMotion ? 600 : duration);
    return () => clearTimeout(timeout);
  }, [duration, prefersReducedMotion, visible]);

  const glitchAnimation = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        opacity: [0, 1],
        filter: ["blur(12px)", "blur(0px)"],
        transition: { duration: 0.6, ease: EASE },
      };
    }

    return {
      x: [0, -1, 1, 0, 0],
      y: [0, 1, -1, 0, 0],
      opacity: [0, 0.85, 1, 0.94, 1],
      filter: ["blur(14px)", "blur(8px)", "blur(4px)", "blur(0px)", "blur(0px)"],
      transition: { duration: 1.2, ease: "easeInOut" },
    };
  }, [prefersReducedMotion]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center text-primary"
      style={{ background: "var(--loader-bg)" }}
      initial={{ opacity: 1 }}
      animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.65, ease: EASE }}
      onAnimationComplete={() => {
        if (isClosing) {
          setVisible(false);
          onComplete?.();
        }
      }}
    >
      <div className="loader-shell">
        {!prefersReducedMotion && (
          <motion.div
            className="loader-halo"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.85, 0.4], rotate: [0, 360] }}
            transition={{ duration: 2.6, ease: "linear", repeat: Infinity }}
          />
        )}

        <motion.div
          className="loader-text"
          initial={{ opacity: 0, filter: "blur(14px)" }}
          animate={glitchAnimation}
        >
          <span>SLEIMA</span>
          <span>DUCROS</span>
        </motion.div>

        {!prefersReducedMotion && (
          <motion.div
            className="loader-stripes"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.4, 0], translateX: ["-20%", "0%", "10%", "0%"] }}
            transition={{ duration: 1.3, ease: EASE, repeat: Infinity, repeatDelay: 0.4 }}
          />
        )}

        <motion.span
          className="loader-caption"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: isClosing ? 0 : 1, y: isClosing ? -4 : 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: prefersReducedMotion ? 0 : 0.45 }}
        >
          Code. Data. Solutions.
        </motion.span>
      </div>
    </motion.div>
  );
}
