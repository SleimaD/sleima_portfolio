"use client";

import { useMemo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { getChildVariants } from "./SectionReveal";

export default function AboutTimeline({ items = [] }) {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const childVariants = useMemo(() => getChildVariants(prefersReducedMotion), [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-4xl">
      <div className="absolute left-[22px] top-0 h-full w-px overflow-hidden bg-[#1e1e1e]">
        <motion.div
          className="w-full bg-gradient-to-b from-[#76ffd3] via-[#8c8cff] to-transparent"
          style={{ height: prefersReducedMotion ? "100%" : progressHeight }}
        />
      </div>

      <ul className="space-y-8 pl-16">
        {items.map((item, index) => (
          <motion.li
            key={`${item.title}-${index}`}
            className="relative flex flex-col gap-2 rounded-2xl border border-[#1f1f1f] bg-[#101010]/60 p-6"
            variants={childVariants}
          >
            <span className="absolute left-[-38px] top-7 h-3 w-3 rounded-full border border-[#a6ffe3] bg-[#121212] shadow-[0_0_0_4px_rgba(118,255,211,0.18)]" />
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#7e7e7e]">{item.period}</span>
            <h3 className="text-lg font-semibold uppercase tracking-[0.22em] text-white md:text-xl">{item.title}</h3>
            <p className="text-sm leading-relaxed text-[#bdbdbd] md:text-base">{item.description}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
