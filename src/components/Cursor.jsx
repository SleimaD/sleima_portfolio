"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], [data-cursor='interactive'], [data-magnetic]";
const MAGNETIC_SELECTOR = "[data-magnetic]";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(null);
  const isMountedRef = useRef(false);
  const pointerRef = useRef({ x: 0, y: 0 });
  const ringPositionRef = useRef({ x: 0, y: 0 });
  const cleanupsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMountedRef.current) return;
    isMountedRef.current = true;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouchOnly) {
      if (dotRef.current) dotRef.current.style.display = "none";
      if (ringRef.current) ringRef.current.style.display = "none";
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");
    document.body.classList.add("has-custom-cursor");

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const handlePointerMove = (event) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${event.clientX}px`;
        dotRef.current.style.top = `${event.clientY}px`;
      }
      if (!prefersReducedMotion && ringRef.current == null) {
        ringPositionRef.current.x = event.clientX;
        ringPositionRef.current.y = event.clientY;
      }
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    cleanupsRef.current.push(() => window.removeEventListener("mousemove", handlePointerMove));

    if (!prefersReducedMotion) {
      const updateRing = () => {
        const { x, y } = pointerRef.current;
        const current = ringPositionRef.current;
        current.x = lerp(current.x || x, x, 0.18);
        current.y = lerp(current.y || y, y, 0.18);
        if (ringRef.current) {
          ringRef.current.style.left = `${current.x}px`;
          ringRef.current.style.top = `${current.y}px`;
        }
        rafRef.current = requestAnimationFrame(updateRing);
      };
      rafRef.current = requestAnimationFrame(updateRing);
      cleanupsRef.current.push(() => cancelAnimationFrame(rafRef.current));
    }

    const ringActiveClass = () => ringRef.current?.classList.add("-active");
    const ringInactiveClass = () => ringRef.current?.classList.remove("-active");

    const attachInteractiveListeners = (node) => {
      const onEnter = () => ringActiveClass();
      const onLeave = () => ringInactiveClass();
      node.addEventListener("mouseenter", onEnter);
      node.addEventListener("mouseleave", onLeave);
      cleanupsRef.current.push(() => {
        node.removeEventListener("mouseenter", onEnter);
        node.removeEventListener("mouseleave", onLeave);
      });
    };

    const attachMagnetism = (node) => {
      const strength = Number.parseFloat(node.dataset.magneticStrength ?? "0.12");
      const baseTransform = node.style.transform;
      let raf = null;

      const reset = () => {
        node.style.transform = baseTransform;
        if (raf) cancelAnimationFrame(raf);
        raf = null;
      };

      const onMove = (event) => {
        if (prefersReducedMotion) return;
        if (raf) cancelAnimationFrame(raf);
        const rect = node.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        raf = requestAnimationFrame(() => {
          node.style.transform = `${baseTransform} translate3d(${offsetX * strength}px, ${offsetY * strength}px, 0)`;
        });
      };

      const onLeave = () => {
        reset();
      };

      node.addEventListener("mousemove", onMove);
      node.addEventListener("mouseleave", onLeave);
      cleanupsRef.current.push(() => {
        node.removeEventListener("mousemove", onMove);
        node.removeEventListener("mouseleave", onLeave);
        if (raf) cancelAnimationFrame(raf);
      });
    };

    document.querySelectorAll(INTERACTIVE_SELECTOR).forEach(attachInteractiveListeners);
    document.querySelectorAll(MAGNETIC_SELECTOR).forEach(attachMagnetism);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches?.(INTERACTIVE_SELECTOR)) attachInteractiveListeners(node);
          if (node.matches?.(MAGNETIC_SELECTOR)) attachMagnetism(node);
          node.querySelectorAll?.(INTERACTIVE_SELECTOR).forEach(attachInteractiveListeners);
          node.querySelectorAll?.(MAGNETIC_SELECTOR).forEach(attachMagnetism);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    cleanupsRef.current.push(() => observer.disconnect());

    return () => {
      cleanupsRef.current.forEach((cb) => cb());
      cleanupsRef.current = [];
      document.documentElement.classList.remove("has-custom-cursor");
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
