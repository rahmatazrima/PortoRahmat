// src/components/navbar.tsx
"use client";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <header className="flex flex-col gap-4 rounded-[1.6rem] 
      border border-white/10 bg-white/5 px-5 py-4 
      lg:flex-row lg:items-center lg:justify-between">
      <a
        href="#top"
        className="font-['Space_Grotesk'] text-lg font-semibold 
          tracking-tight text-white"
      >
        Rahmat Azrima
      </a>
      <nav className="flex flex-wrap items-center gap-4 text-sm 
        font-semibold text-white/72 sm:gap-6 lg:justify-end">
        <a href="#about" className="transition hover:text-amber-200">
          About Me
        </a>
        <a href="#projects" className="transition hover:text-amber-200">
          Projects
        </a>
        <a href="#contact" className="transition hover:text-amber-200">
          Contact
        </a>
      </nav>
    </header>
  );
}