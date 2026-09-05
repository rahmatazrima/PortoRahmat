// src/components/projects-section.tsx
"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects, profile } from "@/data/portfolio";

const hoverLift = {
  y: -6,
  scale: 1.01,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="px-2 py-4 lg:px-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 
        sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] 
            text-amber-200/90">
            Projects
          </p>
          <h2 className="mt-3 font-['Space_Grotesk'] text-3xl 
            font-semibold sm:text-4xl">
            Work I&apos;ve shipped
          </h2>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm 
            font-semibold text-white/65 transition hover:text-white"
        >
          View GitHub <FiArrowUpRight />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            whileHover={hoverLift}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            className={`grid gap-5 rounded-[2rem] 
              border border-amber-200/10 bg-white/5 p-5 
              backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] 
              lg:items-center ${
                index % 2 === 1 
                  ? "lg:[grid-template-columns:1.05fr_0.95fr]" 
                  : ""
              }`}
          >
            {/* Content */}
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <p className="text-xs uppercase tracking-[0.4em] 
                text-white/35">
                0{index + 1} / 0{projects.length}
              </p>
              <h3 className="mt-3 max-w-xl 
                font-['Space_Grotesk'] text-2xl font-semibold 
                sm:text-4xl">
                {project.name}
              </h3>
              <p className="mt-3 text-sm uppercase 
                tracking-[0.3em] text-amber-200/80">
                {project.type}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 
                text-white/60 sm:text-base">
                {project.description}
              </p>
              
              {/* Details */}
              {project.details && project.details.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm 
                  text-white/60">
                  {project.details.slice(0, 2).map((detail, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-amber-200">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full 
                      border border-amber-200/10 bg-black/20 
                      px-4 py-2 text-xs text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className={`${index % 2 === 1 ? "lg:order-1" : ""} 
              relative overflow-hidden rounded-[1.5rem] 
              border border-amber-200/10 
              bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.22))] 
              p-3`}>
              <div className="aspect-[1.35] rounded-[1.25rem] 
                bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04)),linear-gradient(180deg,#171824,#090a10)] 
                p-4">
                <div className="h-full rounded-[1rem] 
                  border border-amber-200/10 
                  bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.25),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.15))]" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}