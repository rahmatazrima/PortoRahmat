// src/components/navbar.tsx
"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "@/components/language-provider";
import { uiText } from "@/data/translations";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, toggleLocale } = useLanguage();
  const text = uiText[locale];
  const navLinks = [
    { href: "#about", label: text.nav.about },
    { href: "#projects", label: text.nav.projects },
    { href: "#contact", label: text.nav.contact },
  ];

  return (
    <header className="flex flex-col gap-4 rounded-[1.6rem] 
      border border-white/10 bg-white/5 px-5 py-4 
      lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center justify-between">
        <a
          href="#top"
          className="font-['Space_Grotesk'] text-lg font-semibold 
            tracking-tight text-white"
        >
          Rahmat Azrima
        </a>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={`Switch language to ${locale === "en" ? "Indonesian" : "English"}`}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 
              text-[10px] font-bold tracking-[0.18em] text-white/70 
              transition hover:bg-white/10 hover:text-white lg:hidden"
          >
            {locale.toUpperCase()}
          </button>
          <button
          type="button"
          aria-label={isMenuOpen ? text.closeMenu : text.openMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center 
            rounded-full border border-white/10 bg-white/5 text-xl 
            text-white transition hover:bg-white/10 lg:hidden"
          >
            {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`${isMenuOpen ? "flex" : "hidden"} flex-col gap-2 
          border-t border-white/10 pt-3 text-sm font-semibold text-white/72 
          lg:flex lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:pt-0 
          lg:text-sm lg:justify-end`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="rounded-xl px-3 py-2 transition hover:bg-white/5 
              hover:text-amber-200 lg:px-0 lg:py-0 lg:hover:bg-transparent"
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          onClick={toggleLocale}
          aria-label={`Switch language to ${locale === "en" ? "Indonesian" : "English"}`}
          className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 
            text-[10px] font-bold tracking-[0.18em] text-white/70 
            transition hover:bg-white/10 hover:text-white lg:inline-flex"
        >
          {locale.toUpperCase()}
        </button>
      </nav>
    </header>
  );
}