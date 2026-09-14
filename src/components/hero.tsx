// src/components/hero.tsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiX,
} from "react-icons/fi";
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
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const whatsappLink = `https://wa.me/${profile.phone.replace(/[^\d]/g, "")}`;

  useEffect(() => {
    if (!isResumeOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsResumeOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isResumeOpen]);

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
              bg-[#4a0712] px-6 py-3 font-semibold text-white 
              transition hover:-translate-y-0.5 hover:bg-[#650a1b]"
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
        <div
          className="absolute inset-0 mx-auto h-[22rem] w-[19rem] 
          rounded-full bg-amber-500/25 blur-3xl 
          sm:h-[28rem] sm:w-[24rem] lg:h-[35rem] lg:w-[30rem]"
        />
        <div className="relative w-full max-w-[32rem] overflow-hidden 
          rounded-[2.8rem] border border-white/10 
          bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.42))] 
          p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)] 
          sm:max-w-[38rem] lg:max-w-[42rem]"
        >
          <div
            className="absolute inset-0 opacity-35 
            [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] 
            [background-size:36px_36px]"
          />
          <div
            className="relative flex h-[26rem] items-end justify-center 
            rounded-[2.1rem] 
            bg-[radial-gradient(circle_at_50%_28%,rgba(251,191,36,0.42),transparent_36%),radial-gradient(circle_at_50%_54%,rgba(190,18,60,0.2),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] 
            sm:h-[40rem] lg:h-[47rem]"
          >
            <div
              className="absolute left-4 top-4 z-10 rounded-full 
              border border-amber-200/15 bg-black/30 px-3 py-2 
              text-[10px] uppercase tracking-[0.18em] 
              text-amber-100/85 backdrop-blur-md sm:left-5 sm:top-5 
              sm:px-4 sm:text-xs sm:tracking-[0.35em]"
            >
              UI/UX Designer
            </div>
            <div
              className="absolute left-4 top-14 z-10 rounded-full 
              border border-amber-200/15 bg-black/30 px-3 py-2 
              text-[10px] uppercase tracking-[0.18em] 
              text-amber-100/85 backdrop-blur-md sm:left-5 sm:top-16 
              sm:px-4 sm:text-xs sm:tracking-[0.35em]"
            >
              Front-End Dev
            </div>
            <div
              className="absolute right-4 top-4 z-10 rounded-full 
              border border-amber-200/15 bg-black/30 px-3 py-2 
              text-[10px] uppercase tracking-[0.18em] 
              text-amber-100/85 backdrop-blur-md sm:right-5 sm:top-5 
              sm:px-4 sm:text-xs sm:tracking-[0.35em]"
            >
              Next.js / TS
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-[2.1rem]">
              <img
                src="/images/matt.png"
                alt="Foto Rahmat Azrima"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute inset-x-0 bottom-0 h-28 
              bg-gradient-to-t from-black/60 to-transparent"
            />
          </div>
        </div>
      </motion.div>

      {/* Right: Social Links */}
      <motion.aside
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-full flex-row items-center justify-center gap-6 
          lg:w-auto lg:flex-col lg:items-end lg:justify-self-end"
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
              aria-label={item.label}
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
          aria-label="WhatsApp"
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
        <motion.button
          type="button"
          variants={fadeUp}
          onClick={() => setIsResumeOpen(true)}
          aria-haspopup="dialog"
          className="inline-flex basis-full justify-center rounded-full 
            border border-amber-200/10 bg-white/5 px-4 py-2 
            text-xs uppercase tracking-[0.35em] text-amber-100/55 
            backdrop-blur-md transition hover:bg-white/10 
            lg:basis-auto lg:rotate-90"
        >
          Resume
        </motion.button>
      </motion.aside>

      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center 
              bg-black/75 p-3 backdrop-blur-sm sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsResumeOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              className="flex h-[min(92vh,56rem)] w-full max-w-5xl 
                flex-col overflow-hidden rounded-2xl border border-white/15 
                bg-[#171313] shadow-2xl"
            >
              <div className="flex shrink-0 items-center justify-between 
                gap-3 border-b border-white/10 bg-[#211b1c] px-4 py-3 
                sm:px-5"
              >
                <h2
                  id="resume-dialog-title"
                  className="truncate font-['Space_Grotesk'] text-sm 
                    font-semibold text-white sm:text-base"
                >
                  Curriculum Vitae
                </h2>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href="/ResumeRahmatAzrima.pdf"
                    download
                    aria-label="Download resume"
                    title="Download resume"
                    className="inline-flex h-9 w-9 items-center justify-center 
                      rounded-full text-amber-100/75 transition 
                      hover:bg-white/10 hover:text-white"
                  >
                    <FiDownload aria-hidden="true" />
                  </a>
                  <a
                    href="/ResumeRahmatAzrima.pdf"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open resume in a new tab"
                    title="Open resume in a new tab"
                    className="inline-flex h-9 w-9 items-center justify-center 
                      rounded-full text-amber-100/75 transition 
                      hover:bg-white/10 hover:text-white"
                  >
                    <FiExternalLink aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(false)}
                    aria-label="Close resume"
                    className="inline-flex h-9 w-9 items-center justify-center 
                      rounded-full text-white/60 transition hover:bg-white/10 
                      hover:text-white"
                  >
                    <FiX aria-hidden="true" />
                  </button>
                </div>
              </div>
              <iframe
                src="/ResumeRahmatAzrima.pdf#view=FitH"
                title="Rahmat Azrima Curriculum Vitae"
                className="min-h-0 flex-1 bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
