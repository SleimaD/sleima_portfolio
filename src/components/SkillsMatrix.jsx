"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function SkillsMatrix({ groups = [] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="skills-matrix grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, index) => (
        <motion.div
          key={group.title}
          className="skills-card relative overflow-hidden rounded-[24px] border border-base bg-surface p-5 shadow-soft sm:p-6"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE, delay: Math.min(index * 0.08, 0.32) }}
        >
          <h3 className="mb-4 text-xs font-mono uppercase tracking-[0.4em] text-muted">
            {group.title}
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            {group.skills?.map((skill) => (
              <li
                key={skill}
                className="skills-chip flex items-center justify-between rounded-full border border-base bg-surface-soft px-4 py-2 text-[0.75rem] uppercase tracking-[0.28em] text-title"
              >
                {skill}
                <span className="h-1.5 w-1.5 rounded-full the-dot" style={{ background: "var(--accent-aux)" }} />
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
