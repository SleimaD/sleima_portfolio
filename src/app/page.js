"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import GlitchHeading from "@/components/GlitchHeading";
import Marquee from "@/components/Marquee";
import SectionReveal from "@/components/SectionReveal";
import AboutShowcase from "@/components/AboutShowcase";
import SkillsMatrix from "@/components/SkillsMatrix";
import TerminalCard from "@/components/TerminalCard";
import ProjectsRail from "@/components/ProjectsRail";

const HERO_SUBTITLE = "Software Engineer building structured web and data systems with Python & TypeScript.";

const HERO_MARQUEE = [
  "Open to roles (Full-Stack / Frontend / Backend / Data)",
  "Based in Belgium",
  "Multilingual (FR/EN/NL)",
  "Agile/Scrum (project-based)",
  "Available for interviews",
];


const PROJECTS = [
  {
    title: "Field Intelligence Platform (FIP)",
    summary:
      "Offline-first, workflow-driven operational platform built as a PWA to simulate low-connectivity industrial constraints.",
    github: "https://github.com/SleimaD/field-platform", // mets le bon repo si différent
    tags: ["Django", "PostgreSQL", "Next.js", "PWA", "Offline-first", "Docker"],
    highlights: [
      "Designed workflow/state transitions with traceable backend rules and predictable behavior under constraints",
      "Implemented incremental sync + caching strategy for offline usage scenarios (PWA)",
      "Containerized with Docker for reproducible environments and consistent local deployment",
    ],
  },
  {
    title: "Data Pipeline & Monitoring System",
    summary:
      "End-to-end log processing pipeline with monitoring views for inspection, drill-down analysis, and anomaly flagging.",
    github: "https://github.com/SleimaD/Data-Pipeline-Dashboard",
    tags: ["Python", "Pandas", "Streamlit", "ETL", "Monitoring", "Data Quality"],
    highlights: [
      "Built ingestion → cleaning → transformation pipeline with structured anomaly checks",
      "Focused on reproducible processing runs and traceability of transformations",
      "Delivered monitoring UI for fast investigation and validation of pipeline outputs",
    ],
  },
  {
    title: "Applied AI Systems",
    summary:
      "Small AI-enabled prototypes integrating LLM/Vision APIs with attention to reliability, constraints, and controlled UX.",
    github: "https://github.com/SleimaD/ai-image-gen.git", // ou un repo “ai-prototypes” si tu en crées un
    tags: ["Flask", "Next.js", "OpenAI API", "Hugging Face", "GenAI", "API Integration"],
    highlights: [
      "Integrated AI APIs into controlled apps with structured prompts and error-handling paths",
      "Worked with real constraints (latency, token/rate limits) and validation flows",
      "Built minimal UIs to test interaction patterns and system behavior end-to-end",
    ],
  },
];

const ABOUT_CONTENT = {
  headline:
    "Software Engineer working across web, data, and system-oriented applications.",
  paragraphs: [

    "Background in full-stack development with Python and TypeScript, covering backend logic, API design, data processing, and frontend implementation.",

    "Focus on building predictable systems: clear workflows, maintainable structure, and interfaces that stay reliable under real constraints (performance, offline usage, integrations).",

    "Recent work includes an offline-first PWA platform, a data pipeline & monitoring system, and applied AI prototypes integrating OpenAI and Hugging Face APIs.",

  ],
  callouts: [
    {
      label: "Engineering Mindset",
      items: [
        "System thinking before implementation",
        "Clear workflows and predictable system behavior",
        "Designing for reliability and maintainability",
        "Reducing complexity rather than adding abstraction",
      ],
    },
    {
      label: "System Building",
      items: [
        "Backend logic and API-driven architectures",
        "Data processing and structured pipelines",
        "Modern web interfaces with React / Next.js",
        "Integrating external services and AI APIs",
      ],
    },
    {
      label: "Working Style",
      items: [
        "Analytical problem decomposition",
        "Learning quickly in unfamiliar domains",
        "Pragmatic engineering decisions",
        "Ownership from concept to working system",
      ],
    },
  ]
};

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind", "TypeScript", "React Native (basic)"],
  },
  {
    title: "Backend",
    skills: ["Django", "Flask", "FastAPI", "Supabase (BaaS)"],
  },
  {
    title: "Database",
    skills: ["SQL", "MySQL", "PostgreSQL", "Database design"],
  },
  {
    title: "Data & AI",
    skills: ["Pandas", "NumPy", "Hugging Face", "Generative AI", "LLM API Integration", "Prompt Design"],
  },
  {
    title: "Ops & Collaboration",
    skills: ["Git / GitHub", "REST APIs", "Docker", "Agile / Scrum", "Figma"],
  },
];

const CONTACT_LINKS = {
  email: "sleima@icloud.com",
  github: "https://github.com/SleimaD",
  linkedin: "https://www.linkedin.com/in/sleima-ducros/",
};

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [showTopButton, setShowTopButton] = useState(false);
  const [, setLoaderDone] = useState(false);
  const [spotlight, setSpotlight] = useState({ active: false, x: "50%", y: "50%" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => setShowTopButton(window.scrollY > 480);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTACT_LINKS.email);
    toast.success("Email copied 👍", { autoClose: 1600 });
  };

  const handleSubtitleMove = (event) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = `${((event.clientX - rect.left) / rect.width) * 100}%`;
    const y = `${((event.clientY - rect.top) / rect.height) * 100}%`;
    setSpotlight({ active: true, x, y });
  };

  const disableSpotlight = () => {
    if (prefersReducedMotion) return;
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  return (
    <>
      <Loader onComplete={() => setLoaderDone(true)} />
      <SmoothScroll />
      <Navbar />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        toastStyle={{
          background: "var(--color-surface-solid)",
          color: "var(--color-text-primary)",
          borderRadius: "10px",
          border: "1px solid var(--color-border)",
          fontSize: "0.85rem",
          boxShadow: "var(--shadow-soft)",
        }}
      />

      <main className="relative mx-auto max-w-[1200px] px-4 pb-24 pt-24 text-primary mt-[-1.5rem] sm:px-6 sm:pb-28 sm:pt-28 sm:mt-[-2.5rem] md:px-10 md:pb-32 md:pt-32 md:mt-[-3.5rem] lg:mt-[-4rem]">
        <section className="hero-section flex min-h-[70vh] flex-col justify-center gap-8 sm:min-h-[75vh] sm:gap-10 md:min-h-[80vh] md:gap-12">
          <div className="space-y-6">
            <GlitchHeading className="text-title text-[clamp(3.8rem,12vw,8.5rem)] leading-[0.80] uppercase">
              Sleima Ducros
            </GlitchHeading>

            <motion.p
              className="hero-subtitle max-w-none text-base text-muted sm:max-w-xl sm:text-lg"
              data-spotlight={spotlight.active ? "true" : "false"}
              style={{ "--spotlight-x": spotlight.x, "--spotlight-y": spotlight.y }}
              onMouseMove={handleSubtitleMove}
              onMouseLeave={disableSpotlight}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {HERO_SUBTITLE}
              <span className="mt-3 block text-sm uppercase tracking-[0.45em] text-muted">
                 Python | TypeScript | React/Next.js | SQL | Applied AI
              </span>
            </motion.p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[0.68rem] uppercase tracking-[0.28em] text-muted sm:gap-6 sm:text-sm sm:tracking-[0.35em]">
            <button
              type="button"
              onClick={copyToClipboard}
              className="rounded-full border border-base bg-transparent px-5 py-3 font-mono tracking-[0.25em] text-title transition hover:border-strong hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] cta-button"
              data-magnetic
            >
              <span className="inline-flex items-center gap-2 cursor-pointer">
                {CONTACT_LINKS.email}
                <FaRegCopy />
              </span>
            </button>

            <div className="flex flex-wrap items-center gap-4">
              {/* <a href="  projects" className="cta-button" data-magnetic>
                View projects
              </a> */}
              <a href="#contact" className="cta-button" data-magnetic>
                Let’s collaborate
              </a>
            </div>
          </div>

          <Marquee items={HERO_MARQUEE} duration={24} />
        </section>

        <SectionReveal as="section" id="projects" className="mt-24 space-y-6 md:mt-32">
          <header className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.5em] text-muted">
              Featured work
            </p>
            <h2 className="text-title text-[clamp(2.6rem,8vw,5rem)] uppercase tracking-[0.28em]">
              Selected projects & repos
            </h2>
          </header>
          <ProjectsRail projects={PROJECTS} />
        </SectionReveal>

        <SectionReveal as="section" id="about" className="mt-24 space-y-10 md:mt-32">
          <header className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.5em] text-muted">
              About
            </p>
            <h2 className="text-title text-[clamp(2.2rem,7vw,4rem)] uppercase tracking-[0.3em]">
              Behind the Code 
            </h2>
          </header>
          <AboutShowcase content={ABOUT_CONTENT} />
        </SectionReveal>

        <SectionReveal as="section" id="skills" className="mt-24 space-y-10 md:mt-32">
          <header className="space-y-3 text-center">
            <p className="text-xs font-mono uppercase tracking-[0.5em] text-muted">
              Skills
            </p>
            <h2 className="text-title text-[clamp(2rem,6vw,3.5rem)] uppercase tracking-[0.3em]">
              Tech Stack
            </h2>
          </header>
          <SkillsMatrix groups={SKILL_GROUPS} />
        </SectionReveal>

        <SectionReveal as="section" id="contact" className="mt-24 space-y-8 md:mt-32">
          <header className="space-y-3 text-center">
            <p className="text-xs font-mono uppercase tracking-[0.5em] text-muted">
              Contact
            </p>
            <h2 className="text-title text-[clamp(2.2rem,6.5vw,3.5rem)] uppercase tracking-[0.3em]">
              Let’s build together
            </h2>
          </header>
          <TerminalCard links={CONTACT_LINKS} />
        </SectionReveal>
      </main>

      {showTopButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-base bg-surface text-xl text-accent shadow-soft transition hover:border-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:bottom-6 sm:right-6"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
