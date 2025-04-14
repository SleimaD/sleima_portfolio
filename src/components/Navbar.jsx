"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 w-full px-8 py-6 z-50">
      <nav className="flex justify-end items-center space-x-10 text-sm tracking-wide text-white font-space-grotesk" >
        <a href="#projects" className="hover:text-gray-500 transition">Work</a>
        <a href="#contact" className="hover:text-gray-500 transition">Contact</a>
        <a
          href="/CV-SleimaDucros.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="  hover:text-gray-500 transition"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}