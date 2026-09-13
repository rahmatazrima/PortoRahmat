// src/components/contact-section.tsx
"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const hoverLift = {
  y: -6,
  scale: 1.01,
};

export function ContactSection() {
  const whatsappLink = `https://wa.me/${profile.phone.replace(
    /[^\d]/g,
    ""
  )}`;

  return (
    <section id="contact" className="px-2 pb-4 lg:px-6">
      <motion.div
        whileHover={hoverLift}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="rounded-[2rem] 
          border border-amber-200/10 
          bg-gradient-to-br from-amber-500/18 via-white/5 
          to-rose-500/10 p-6 backdrop-blur-xl 
          sm:p-8 lg:p-10"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] 
          lg:items-end">
          {/* Text */}
          <div>
            <p className="text-sm uppercase tracking-[0.4em] 
              text-amber-200/90">
              Contact
            </p>
            <h3 className="mt-4 max-w-2xl 
              font-['Space_Grotesk'] text-3xl font-semibold 
              leading-tight sm:text-4xl">
              Have a project in mind?
            </h3>
            <p className="mt-4 max-w-xl text-white/68">
              Open to freelance work — product UI, landing pages, 
              or a full build from design to working code. 
              Tell me what you&apos;re trying to make.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 
                rounded-full bg-[#4a0712] px-5 py-3 
                font-semibold text-white 
                transition hover:bg-[#650a1b]"
            >
              <FiMail /> Email
            </a>
            <a
              href={whatsappLink}
              className="inline-flex items-center gap-2 
                rounded-full border border-white/15 
                bg-white/5 px-5 py-3 font-semibold 
                text-white transition hover:bg-white/10"
            >
              <FiPhone /> WhatsApp
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 
                rounded-full border border-white/15 
                bg-white/5 px-5 py-3 font-semibold 
                text-white transition hover:bg-white/10"
            >
              LinkedIn <FiArrowUpRight />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}