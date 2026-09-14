// src/components/about-section.tsx
"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "@/components/language-provider";
import { uiText } from "@/data/translations";


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
  const { locale } = useLanguage();
  const text = uiText[locale];

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
          {text.about}
        </p>
        <h2 className="mt-4 max-w-md font-['Space_Grotesk'] 
          text-3xl font-semibold leading-tight sm:text-4xl">
          {text.aboutTitle}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 
          text-white/65">
          {text.aboutBody}
        </p>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 
            rounded-full bg-[#4a0712] px-6 py-3 font-semibold 
            text-white transition hover:bg-[#650a1b]"
        >
          {text.getInTouch} <FiArrowUpRight />
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
            {text.whoIAm}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 
            text-white/62 sm:text-base">
            {text.aboutDetails[0]}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 
            text-white/62 sm:text-base">
            {text.aboutDetails[1]}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 
            text-white/62 sm:text-base">
            {text.aboutDetails[2]}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}