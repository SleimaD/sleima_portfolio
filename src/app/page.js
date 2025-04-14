"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("sleima@icloud.com");
    toast.success("Email copied to clipboard!");
  };


  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const projects = [
    {
      title: "Hotel Royella",
      description: "Booking platform with admin dashboard. React, Django, MySQL.",
      github: "https://github.com/SleimaD/Hotel-Royella",
    },
    {
      title: "EMONAI",
      description: "AI-powered app that analyzes emotional tone in text using HuggingFace Transformers and Flask.",
      github: "https://github.com/SleimaD/emotion-analyzer",
    },
    {
      title: "Wandel",
      description: "Text-based role-playing game featuring exploration, inventory, battles and a final boss. Python OOP structure.",
      github: "https://github.com/SleimaD/ProjetPython-Sleima-CSB4",
    },
    {
      title: "Memory Game",
      description: "Simple memory card game built with JavaScript and DOM manipulation. Flip cards, match pairs, and track score.",
      github: "https://github.com/SleimaD/SLEIMA_MEMORY-GAME.git",
      demo: "https://sleimad.github.io/SLEIMA_MEMORY-GAME/",
    },
  ];

  return (
    <>
      <Navbar />
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        toastStyle={{
          background: "#1c1c1c",
          color: "#ccc",
          fontSize: "0.85rem",
          boxShadow: "none",
          border: "1px solid #333",
          borderRadius: "6px",
        }}
      />

      {/* HERO SECTION */}
      <section className="hero-layout relative w-full min-h-screen flex items-center justify-center text-white px-6 ">
        <div className="max-w-7xl w-full flex flex-nowrap justify-between items-start gap-10">
          {/* Left side - Name and Email */}
          <div className="hero-left flex flex-col gap-2">
            <h1 className="text-[clamp(15.5rem,8vw,6rem)] font-extrabold leading-[1] text-[#bafccd] tracking-tight uppercase">
              SLEIMA<br />DUCROS
            </h1>
            <p className="text-base font-medium flex items-center gap-2 myemail">
              sleima@icloud.com
              <button
                onClick={copyToClipboard}
                className="text-gray-500 hover:text-black transition"
                aria-label="Copy email"
              >
                <FaRegCopy />
              </button>
            </p>
          </div>

          {/* Right side - Description */}
          <div className="hero-right max-w-md text-base mt-5  leading-relaxed">
            <p>
              Hello, I am a Full Stack developer — passionate about building smart, human-focused web tools.
            </p>
          </div>
        </div>
      </section>
      {/* END HERO SECTION */}

      {/* WORK SECTION */}
      <div className="min-h-screen  text-white overflow-hidden">
        <section
          id="projects"
          className="min-h-screen px-40 py-32 text-white bg-[#0f0f0f] border-t-[5px] border-b-[5px] border-[#131313] font-mono tracking-tight"
        >
          <h2 className="text-[clamp(4rem,10vw,10rem)] font-black uppercase text-center leading-[0.85] mb-24  border-[#2a2a2a] pb-4">
            Work
          </h2>
          <div className="grid grid-cols-2 gap-px bg-[#1c1c1c] border border-[#333]">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2, delay: idx * 0.10, ease: "easeOut" }}
                className="flex flex-col justify-between border border-[#333] bg-[#0f0f0f] p-5 gap-4 hover:bg-[#161616] transition"
              >
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase font-semibold tracking-wider">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-70"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-24">
            <a
              href="https://github.com/SleimaD?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[#444] hover:border-white hover:text-white uppercase font-semibold tracking-widest transition"
            >
              View All on GitHub
            </a>
          </div>
        </section>
        {/* END WORK SECTION */}

        {/* CONTACT SECTION */}
        <section id="contact" className="text-center space-y-4 mb-10 flex flex-col justify-center items-center gap-4 relative z-0 mt-16 ">
          <motion.h2
            className="text-5xl font-black uppercase "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Interested in collaborating or have any questions?
          </motion.p>
          <a
            href="mailto:sleima@icloud.com"
            className="inline-block border border-white px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            Send Email
          </a>
        </section>
      </div>

      {/* Scroll-to-top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 text-[5rem] p-3 text-[#d2f4de] hover:text-gray-400 transition"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}