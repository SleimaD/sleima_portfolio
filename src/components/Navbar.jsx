"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "/SleimaDucros.CV.pdf", label: "Resume", external: true },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen || typeof document === "undefined") return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen || typeof document === "undefined") return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  const ThemeToggleButton = ({ className = "" }) => (
    <button
      type="button"
      onClick={toggleTheme}
      className={`nav-link flex items-center gap-2 lowercase ${className}`}
      data-magnetic
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? "dark" : "light"}
      <span className="relative block h-2.5 w-2.5 rounded-full border border-current">
        <span
          className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-current transition-transform duration-300 ease-[0.22,1,0.36,1]"
          style={{ transform: `translateX(${isDark ? "0" : "3px"})` }}
        />
      </span>
    </button>
  );

  const menuId = "mobile-nav-menu";

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm md:hidden"
          style={{
            background: isDark ? "rgba(12, 12, 12, 0.6)" : "rgba(248, 246, 242, 0.85)",
          }}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <header className="pointer-events-none flex w-full justify-end px-4 pt-5 sm:px-6 sm:pt-6 md:px-10">
        <nav className="nav-shell pointer-events-auto relative z-50 flex w-full flex-col items-stretch justify-center gap-y-3 rounded-[32px] bg-transparent px-5 py-3 text-[0.52rem] uppercase tracking-[0.25em] text-nav-foreground backdrop-blur md:w-auto md:flex-row md:flex-nowrap md:items-center md:justify-center md:rounded-full md:text-[0.65rem] md:tracking-[0.35em]">
          <div className="flex items-center justify-between md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center gap-3 uppercase tracking-[0.35em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-controls={menuId}
            >
              <span>{isMenuOpen ? "Close" : "Menu"}</span>
              <span className="relative flex h-3.5 w-4 items-center justify-center">
                <span
                  className={`absolute block h-[1.5px] w-full bg-current transition-transform duration-300 ease-[0.22,1,0.36,1] ${
                    isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`absolute block h-[1.5px] w-full bg-current transition-opacity duration-200 ease-[0.22,1,0.36,1] ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-[1.5px] w-full bg-current transition-transform duration-300 ease-[0.22,1,0.36,1] ${
                    isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1"
                  }`}
                />
              </span>
            </button>
            <ThemeToggleButton className="tracking-[0.18em] text-[0.65rem]" />
          </div>

          <div className="hidden w-full flex-wrap items-center justify-center gap-4 sm:w-auto sm:flex-nowrap sm:justify-center sm:gap-5 md:flex md:justify-center md:gap-6">
            {NAV_LINKS.map(({ href, label, external }) => (
              <a
                key={label}
                href={href}
                className="nav-link"
                data-magnetic
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <ThemeToggleButton className="hidden md:inline-flex" />
          </div>

          <div
            id={menuId}
            className={`md:hidden ${
              isMenuOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            } absolute left-1/2 top-full z-50 mt-3 w-[calc(100vw-2.5rem)] max-w-sm -translate-x-1/2 rounded-[26px] border border-base bg-surface shadow-soft transition-all duration-300 ease-[0.22,1,0.36,1] ${
              isMenuOpen ? "translate-y-0" : "-translate-y-2"
            }`}
          >
            <div className="flex flex-col gap-1 px-5 py-5 text-[0.65rem] uppercase tracking-[0.25em]">
              {NAV_LINKS.map(({ href, label, external }) => (
                <a
                  key={`mobile-${label}`}
                  href={href}
                  className="nav-link w-full justify-between text-[0.65rem] tracking-[0.28em]"
                  data-magnetic
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
