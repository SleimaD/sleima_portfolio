"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

function ProjectCard({
  title,
  summary,
  github,
  demo,
  tags = [],
  highlights = [],
  className = "",
}) {
  const prefersReducedMotion = useReducedMotion();

  const primaryLink = github ?? demo ?? "";
  const hasLink = Boolean(primaryLink);

  const handleActivate = () => {
    if (!primaryLink) return;
    if (typeof window === "undefined") return;
    if (primaryLink.startsWith("http")) {
      window.open(primaryLink, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = primaryLink;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleActivate();
    }
  };

  return (
    <motion.article
      className={`group relative shrink-0 w-full md:w-[640px] snap-start rounded-[24px] border border-base bg-surface px-5 pb-7 pt-6 text-left text-primary shadow-inner  shadow-[#c5c2bc64] transition-transform duration-500 ease-[0.22,1,0.36,1] sm:px-6 sm:pb-8 sm:pt-7 ${hasLink ? "cursor-pointer" : ""} ${className}`.trim()}
      whileHover={prefersReducedMotion ? { scale: 1.01 } : { scale: 1.04 }}
      transition={{ duration: 0.35, ease: EASE }}
      role="listitem"
      tabIndex={hasLink ? 0 : undefined}
      aria-label={hasLink ? `Open ${title} project` : title}
      onClick={hasLink ? handleActivate : undefined}
      onKeyDown={hasLink ? handleKeyDown : undefined}
    >
      <header className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--project-dot-1)" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--project-dot-2)" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--project-dot-3)" }} />
        </div>
        <span className="font-mono">{title?.toLowerCase().replace(/\s+/g, "-")}</span>
      </header>

      <div className="absolute right-6 top-6 flex items-center gap-5 text-[10px] uppercase tracking-[0.32em] text-muted">
        {github && (
          <span className="relative text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-[0.22,1,0.36,1] group-hover:after:scale-x-100">
            Repo
          </span>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-[0.22,1,0.36,1] hover:after:scale-x-100 focus-visible:after:scale-x-100 focus:outline-none"
            data-magnetic
            onClick={(event) => event.stopPropagation()}
          >
            Live
          </a>
        )}
      </div>

      <div className="project-mock mt-7 h-48 overflow-hidden rounded-2xl border border-strong">
        <div className="project-mock__layer project-mock__layer--bar" />
        <div className="project-mock__layer project-mock__layer--panel" />
        <div className="project-mock__layer project-mock__layer--sidebar" />
        <div className="project-mock__layer project-mock__layer--footer" />
        <div className="project-mock__layer project-mock__layer--chips">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <motion.h3
          className="text-title text-2xl font-semibold uppercase tracking-[0.32em] md:text-[1.6rem]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {title}
        </motion.h3>
        {summary && (
          <p className="text-sm leading-relaxed text-muted md:text-base">
            {summary}
          </p>
        )}
        {!!highlights?.length && (
          <ul className="space-y-2 text-sm text-muted">
            {highlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
        {!!tags?.length && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-base bg-surface-soft px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-muted transition-transform duration-200 ease-out group-hover:-translate-y-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default memo(ProjectCard);
