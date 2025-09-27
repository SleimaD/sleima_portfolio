"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function attachHorizontalWheel(rail) {
  if (!rail) return () => {};

  const onWheel = (e) => {
    if (rail.scrollWidth <= rail.clientWidth) return;

    const dominant = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (!dominant) return;

    const atStart = rail.scrollLeft <= 0 && dominant < 0; 
    const atEnd = Math.ceil(rail.scrollLeft + rail.clientWidth) >= rail.scrollWidth && dominant > 0; 

    if (atStart || atEnd) return;

    e.preventDefault();

    
    let factor = 1;
    if (e.deltaMode === 1) factor = 28; 
    else if (e.deltaMode === 2) factor = rail.clientWidth; 


    const distance = dominant * factor * 0.45; 
    rail.scrollBy({ left: distance, behavior: 'smooth' }); 
  };

  rail.addEventListener('wheel', onWheel, { passive: false });
  return () => rail.removeEventListener('wheel', onWheel);
}

export default function ProjectsRail({ projects = [] }) {
  const prefersReducedMotion = useReducedMotion();
  const scrollerRef = useRef(null);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    if (prefersReducedMotion) return; 

    const detach = attachHorizontalWheel(node);
    return () => detach();
  }, [prefersReducedMotion]);

  return (
    <div className="work-rail" role="region" aria-label="Featured work">
      <div
        ref={scrollerRef}
        className="work-rail__scroller no-scrollbar"
        role="list"
        data-lenis-prevent
      >
        <div className="work-rail__track">
          {projects.map((project) => (
            <div key={project.title} className="work-rail__slide" role="listitem">
              <ProjectCard
                className="work-rail__card"
                {...project}
              />
            </div>
          ))}
          <div className="work-rail__spacer" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
