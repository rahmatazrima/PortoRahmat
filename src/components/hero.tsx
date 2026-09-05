// src/components/hero.tsx
"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, 
  FiPhone } from "react-icons/fi";
import Image from "next/image";
import { profile } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const hoverLift = {
  y: -6,
  scale: 1.01,
};

export function Hero() {
  const whatsappLink = `https://wa.me/${profile.phone.replace(
    /[^\d]/g,
    ""
  )}`;

  const socialLinks = [
    { label: "LinkedIn", href: profile.linkedin, icon: FiLinkedin },
    { label: "GitHub", href: profile.github, icon: FiGithub },
    { label: "Email", href: `mailto:${profile.email}`, icon: FiMail },
  ];

  return (
    <section
      id="top"
      className="grid gap-8 px-2 py-8 lg:grid-cols-[1fr_0.95fr_0.28fr] 
        lg:items-center lg:px-6 lg:py-14 xl:gap-10"
    >
      {/* Left: Intro */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-5"
      >
        <motion.h3
          variants={fadeUp}
          className="text-lg font-medium text-amber-200/90 sm:text-2xl"
        >
          Hello, I&apos;m
        </motion.h3>
        <motion.h1
          variants={fadeUp}
          className="max-w-xl font-['Space_Grotesk'] text-5xl 
            font-bold leading-[0.88] tracking-tight text-white 
            sm:text-7xl lg:text-8xl"
        >
          Rahmat
          <span className="block text-amber-100">Azrima</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="max-w-lg text-base leading-7 text-white/66 
            sm:text-lg"
        >
          {profile.headline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full 
              bg-amber-300 px-6 py-3 font-semibold text-slate-950 
              transition hover:-translate-y-0.5 hover:bg-amber-200"
          >
            View Projects <FiArrowUpRight />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full 
              border border-amber-200/15 bg-white/5 px-6 py-3 
              font-semibold text-white transition 
              hover:-translate-y-0.5 hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 pt-4 text-sm text-white/60"
        >
          <span className="h-px w-12 bg-amber-200/25" />
          Open for freelance & collaboration
        </motion.div>
      </motion.div>

      {/* Center: Image */}
      <motion.div
        variants={fadeScale}
        initial="hidden"
        animate="show"
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 16,
        }}
        className="relative flex items-end justify-center"
      >
        <div className="absolute inset-0 mx-auto h-[26rem] w-[22rem] 
          rounded-full bg-amber-500/25 blur-3xl 
          sm:h-[34rem] sm:w-[28rem] lg:h-[42rem] lg:w-[34rem]" />
        <div className="relative w-full max-w-[26rem] overflow-hidden 
          rounded-[2.8rem] border border-white/10 
          bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.42))] 
          p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)] 
          sm:max-w-[31rem] lg:max-w-[35rem]">
          <div className="absolute inset-0 opacity-35 
            [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] 
            [background-size:36px_36px]" />
          <div className="relative flex h-[30rem] items-end justify-center 
            rounded-[2.1rem] 
            bg-[radial-gradient(circle_at_50%_28%,rgba(251,191,36,0.42),transparent_36%),radial-gradient(circle_at_50%_54%,rgba(190,18,60,0.2),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] 
            sm:h-[38rem] lg:h-[46rem]">
            <div className="absolute left-5 top-5 rounded-full 
              border border-amber-200/15 bg-black/30 px-4 py-2 
              text-[10px] uppercase tracking-[0.35em] 
              text-amber-100/85 backdrop-blur-md sm:text-xs">
              UI/UX Designer
            </div>
            <div className="absolute left-5 top-16 rounded-full 
              border border-amber-200/15 bg-black/30 px-4 py-2 
              text-[10px] uppercase tracking-[0.35em] 
              text-amber-100/85 backdrop-blur-md sm:text-xs">
              Front-End Dev
            </div>
            <div className="absolute right-5 top-5 rounded-full 
              border border-amber-200/15 bg-black/30 px-4 py-2 
              text-[10px] uppercase tracking-[0.35em] 
              text-amber-100/85 backdrop-blur-md sm:text-xs">
              Next.js / TS
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-[28rem] w-[18rem] 
                sm:h-[34rem] sm:w-[22rem] lg:h-[42rem] lg:w-[26rem]"
            >
              <Image
                src="/images/matt.png"
                alt="Foto Rahmat Azrima"
                fill
                priority
                sizes="(max-width: 640px) 288px, 
                  (max-width: 1024px) 352px, 416px"
                className="object-contain object-bottom 
                  drop-shadow-[0_0_55px_rgba(251,191,36,0.28)]"
              />
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 h-28 
              bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Right: Social Links */}
      <motion.aside
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-start gap-4 
          lg:items-end lg:justify-self-end"
      >
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.label}
              variants={fadeUp}
              whileHover={hoverLift}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold text-amber-100/85 
                transition hover:text-white"
            >
              <Icon />
            </motion.a>
          );
        })}
        <motion.a
          variants={fadeUp}
          whileHover={hoverLift}
          href={whatsappLink}
          className="text-lg font-semibold text-amber-100/85 
            transition hover:text-white"
        >
          <FiPhone />
        </motion.a>
        <motion.div
          variants={fadeUp}
          className="hidden h-28 w-px 
            bg-gradient-to-b from-transparent via-amber-100/20 
            to-transparent lg:block"
        />
        <motion.a
          variants={fadeUp}
          href="#about"
          className="hidden rotate-90 rounded-full 
            border border-amber-200/10 bg-white/5 px-4 py-2 
            text-xs uppercase tracking-[0.35em] text-amber-100/55 
            backdrop-blur-md transition hover:bg-white/10 lg:inline-flex"
        >
          Resume
        </motion.a>
      </motion.aside>
    </section>
  );
}