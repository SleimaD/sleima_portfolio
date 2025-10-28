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

const HERO_SUBTITLE = "Full-Stack Developer building reliable, data-driven web apps.";

const HERO_MARQUEE = [
  "Portfolio 2025",
  "Open to collaboration",
  "Based in Belgium",
  "Multilingual (FR/EN/NL) ",
  "Agile/Scrum Experience",
];

const PROJECTS = [
  {
    title: "Data Pipeline & Monitoring Dashboard",
    summary:
      "End-to-end data pipeline built with Python and Streamlit to process, clean, and visualize web server logs in real time.",
    github: "https://github.com/SleimaD/Data-Pipeline-Dashboard",
    tags: ["Python", "Pandas", "Streamlit", "Altair", "ETL", "Monitoring"],
    highlights: [
      "Built and deployed an end-to-end data pipeline for real-time log visualization and anomaly detection",
      "Processed thousands of log entries across test runs to ensure reliability and clarity of insights",
      "Designed for scalability and reusability as a lightweight internal tool",
    ],
  },
  {
    title: "AI Image Generator",
    summary:
      "Prompt-to-image generator featuring user authentication, data persistence, and an intuitive UI — powered by Next.js and Supabase.",
    github: "https://github.com/SleimaD/ai-image-gen.git",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "AI"],
    highlights: [
      "Integrated Supabase for user authentication and image storage",
      "Built a Next.js pipeline handling prompt-based image generation",
      "Deployed a smooth, modern interface for real-time AI interactions",
    ],
  },
  {
    title: "Hotel Royella",
    summary:
      "Full-stack hotel management system with search, booking, and admin automation - built with React, Django, and MySQL.",
    github: "https://github.com/SleimaD/Royella_SleimaDucros.git",
    tags: ["React", "Python (Django)", "MySQL", "REST API", "Full-Stack"],
    highlights: [
      "Developed booking flows with CRUD and role-based permissions",
      "Automated admin dashboards for client and staff management",
      "Implemented search and validation logic for realistic test scenarios",
    ],
  },
  {
    title: "SimpleChat AI",
    summary:
      "AI-powered chatbot developed for DevChallenge.io using JavaScript and REST APIs.",
    github: "https://github.com/SleimaD/simplechat.ai.git",
    tags: ["JavaScript", "APIs", "AI", "Frontend"],
    highlights: [
      "Implemented real-time prompt handling and response generation",
      "Created a clean, responsive interface for conversational UX",
    ],
  },
];


const ABOUT_CONTENT = {
  headline:
    "Full-Stack Developer focused on building clean, reliable, and user-friendly web applications.",
  paragraphs: [

    "My main stack is Python and Next.js (React), supported by Supabase, Streamlit, and lightweight AI tools (OpenAI, Hugging Face). I like connecting logic, design, and data to turn ideas into something people can actually use.", 
    

    "With a background in Business Informatics and hands-on training through MolenGeek and IBM’s AI Developer program, I work where clarity, structure, and learning meet real-world impact. I care about building things that are purposeful, efficient, and made to last.",

  ],
  callouts: [
    {
      label: "Strong suits",
      items: ["Analytical problem-solving", "Product-focused mindset ", "Rapid learning & adaptability"],
    },
    {
      label: "Toolbox",
      items: ["Github/Git", "React, Next.js", "Python/Django", "MySQL", "AI & NLP (Hugging Face, Pandas) "],
    },
    {
      label: "Mindset",
      items: ["Solution-oriented mindset", "Growth & Adaptability ", "Collaboration & initiative", "Resilience & ownership"],
    },
  ],
};

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind", "TypeScript", "React Native"],
  },
  {
    title: "Backend",
    skills: ["Django", "Flask", "FastAPI", "Supabase (BaaS)"],
  },
  {
    title: "Database",
    skills: ["SQL", "MySQL", "PostgreSQL", "DBeaver"],
  },
  {
    title: "Data & AI",
    skills: ["Hugging Face", "Generative AI", "NLP", "Prompt Engineering", "Pandas", "NumPy"],
  },
  {
    title: "Ops & Collaboration",
    skills: ["Git/GitHub", "REST APIs", "Agile / Scrum", "Docker (basics)", "Figma"],
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
                 Python | React, Next.js | SQL | AI Integration
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
