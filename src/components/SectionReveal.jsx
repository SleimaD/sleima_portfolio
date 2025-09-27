"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export function getChildVariants(prefersReducedMotion) {
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }
  return {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
}

export default function SectionReveal({
  as = "section",
  delay = 0,
  staggerChildren = 0.14,
  className,
  children,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = useMemo(() => motion.create(as), [as]);

  const containerVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.35, ease: EASE, delay },
        },
      }
    : {
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            ease: EASE,
            delay,
            staggerChildren,
          },
        },
      };

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
