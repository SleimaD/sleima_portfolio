"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const DEFAULT_LINES = [
  { type: "command", text: "$ whoami" },
  { type: "output", text: "Sleima Ducros" },
  { type: "command", text: "$ mission" },
  { type: "output", text: "Engineering full-stack and AI-driven solutions that are scalable, reliable, and insight-driven." },
  { type: "command", text: "$ status" },
  { type: "output", text: "Open for collabs." },
];

export default function TerminalCard({ links = {}, lines = DEFAULT_LINES }) {
  const prefersReducedMotion = useReducedMotion();
  const { email, github, linkedin } = links;

  return (
    <motion.div
      className="terminal-card relative mx-auto max-w-5xl rounded-[28px] border border-base bg-surface p-6 text-left text-muted shadow-soft backdrop-blur sm:p-8"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div className="flex items-center justify-between pb-5 text-muted sm:pb-6">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--project-dot-1)" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--project-dot-2)" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--project-dot-3)" }} />
        </div>
        <span className="text-xs uppercase tracking-[0.3em]">terminal</span>
      </div>

      <div className="space-y-2 font-mono text-sm leading-relaxed text-title md:text-base">
        {lines.map((line, index) => (
          <span
            key={`${line.text}-${index}`}
            className={`terminal-line terminal-line--${line.type}`}
            data-animate={prefersReducedMotion ? "false" : "true"}
            style={{ "--delay": `${index * 120}ms`, "--chars": line.text.length }}
          >
            {line.text}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3 text-xs uppercase tracking-[0.32em] text-secondary sm:gap-4">
        {email && (
          <a
            href={`mailto:${email}`}
            className="link-pill"
            data-magnetic
          >
            Email
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-pill"
            data-magnetic
          >
            GitHub
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-pill"
            data-magnetic
          >
            LinkedIn
          </a>
        )}
      </div>
    </motion.div>
  );
}
