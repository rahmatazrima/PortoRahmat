// src/components/about-section.tsx
"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { stats } from "@/data/portfolio";

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
          Creativity is my passion.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 
          text-white/65">
          Saya passionate merancang halaman yang clean, elegan, 
          dengan ritme visual kuat. Setiap detail diarahkan 
          untuk terasa premium tanpa kehilangan keterbacaan.
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

      {/* Right: Stats & Focus */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.35,
        }}
        className="grid gap-4"
      >
        {/* Focus */}
        <motion.div
          variants={fadeUp}
          whileHover={hoverLift}
          className="rounded-[2rem] border border-amber-200/10 
            bg-white/5 p-6 backdrop-blur-xl"
        >
          <h3 className="text-lg font-semibold text-amber-100">Focus</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 
            text-white/62 sm:text-base">
            Menggabungkan design thinking, visual modern, 
            dan implementasi front-end responsive.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          whileHover={hoverLift}
          className="grid gap-4 sm:grid-cols-3"
        >
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-[2rem] border border-amber-200/10 
                bg-white/5 p-5 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.35em] 
                text-white/40">
                {label}
              </p>
              <p className="mt-3 font-['Space_Grotesk'] text-3xl 
                font-semibold text-white">
                {value}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}