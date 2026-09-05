// src/components/about-section.tsx
"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";


const hoverLift = {
  y: -6,
  scale: 1.01,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-6 px-2 pb-4 
        lg:grid-cols-[0.92fr_1.08fr] lg:px-6"
    >
      {/* Left: Bio */}
      <motion.div
        whileHover={hoverLift}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="rounded-[2rem] border border-amber-200/10 
          bg-white/5 p-6 backdrop-blur-xl"
      >
        <p className="text-sm uppercase tracking-[0.4em] 
          text-amber-200/90">
          About Me
        </p>
        <h2 className="mt-4 max-w-md font-['Space_Grotesk'] 
          text-3xl font-semibold leading-tight sm:text-4xl">
          I design it, then I build it.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 
          text-white/65">
          Most designs stop at the mockup. Mine don&apos;t — I turn them 
          into working, responsive front-ends myself. That means every 
          decision I make in Figma has already passed the &quot;can this 
          actually ship?&quot; test.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 
            rounded-full bg-amber-300 px-6 py-3 font-semibold 
            text-slate-950 transition hover:bg-amber-200"
        >
          Get In Touch <FiArrowUpRight />
        </a>
      </motion.div>

      {/* Right: Bio detail */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.35,
        }}
        className="rounded-[2rem] border border-amber-200/10 
          bg-white/5 p-6 backdrop-blur-xl"
      >
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-amber-100">
            Who I am
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 
            text-white/62 sm:text-base">
            I&apos;m a UI/UX designer from Banda Aceh, now finishing my 
            Informatics degree at Syiah Kuala University (Feb 2026). 
            I got into this through the design side, but I kept going 
            until I could build what I designed.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 
            text-white/62 sm:text-base">
            Interned at the Aceh Provincial Social Affairs Office, 
            where I redesigned their welfare system from paper 
            workflows into a usable digital flow. In Bangkit Academy 
            (Google, GoTo &amp; Traveloka) I built a weather-based 
            planting app alongside ML and cloud teams. And as a 
            freelance designer I&apos;ve shipped 50+ projects for clients.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 
            text-white/62 sm:text-base">
            One thing connects all of it: I take work from research 
            and wireframes all the way to working, responsive code — 
            so the design that gets approved is the one that ships.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}