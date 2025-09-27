"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";


export default function SmoothScroll() {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const mediaQueryRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    mediaQueryRef.current = window.matchMedia("(prefers-reduced-motion: reduce)");

    const isTouchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (mediaQueryRef.current.matches || isTouchOnly) {
      document.documentElement.style.scrollBehavior = "auto";
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08,
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    const handlePreferenceChange = (event) => {
      if (event.matches) {
        cancelAnimationFrame(rafRef.current);
        lenisRef.current?.destroy();
        lenisRef.current = null;
      } else if (!lenisRef.current) {
        const nextLenis = new Lenis({
          duration: 1.1,
          smoothWheel: true,
          smoothTouch: false,
          lerp: 0.08,
        });
        lenisRef.current = nextLenis;
        const resume = (time) => {
          lenisRef.current?.raf(time);
          rafRef.current = requestAnimationFrame(resume);
        };
        rafRef.current = requestAnimationFrame(resume);
      }
    };

    mediaQueryRef.current.addEventListener("change", handlePreferenceChange);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      mediaQueryRef.current?.removeEventListener("change", handlePreferenceChange);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}
