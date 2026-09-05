// src/components/experience-section.tsx
"use client";
import { motion } from "framer-motion";
import { experiences, education, skills } from "@/data/portfolio";

const hoverLift = {
  y: -6,
  scale: 1.01,
};

export function ExperienceSection() {
  return (
    <section className="grid gap-6 px-2 py-4 
      lg:grid-cols-2 lg:px-6">
      {/* Experience & Education */}
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
          Experience & Education
        </p>

        {/* Experience */}
        <div className="mt-5 space-y-6">
          <div>
            <h3 className="font-semibold text-white mb-4">Experience</h3>
            <div className="space-y-5">
              {experiences.map((item) => (
                <div
                  key={item.id}
                  className="border-l border-amber-200/15 pl-4"
                >
                  <p className="text-xs uppercase 
                    tracking-[0.25em] text-white/40">
                    {item.period}
                  </p>
                  <h4 className="mt-2 font-['Space_Grotesk'] 
                    text-lg font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/55">
                    {item.company}
                  </p>
                  <p className="mt-2 text-sm leading-6 
                    text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-semibold text-white mb-4">Education</h3>
            <div className="space-y-5">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="border-l border-amber-200/15 pl-4"
                >
                  <p className="text-xs uppercase 
                    tracking-[0.25em] text-white/40">
                    {item.period}
                  </p>
                  <h4 className="mt-2 font-['Space_Grotesk'] 
                    text-lg font-semibold">
                    {item.degree}
                  </h4>
                  <p className="text-sm text-white/55">
                    {item.institution}
                  </p>
                  {item.gpa && (
                    <p className="mt-1 text-sm text-amber-100/70">
                      GPA: {item.gpa}
                    </p>
                  )}
                  {item.highlights && 
                    item.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {item.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="text-xs 
                          leading-5 text-white/60">
                          • {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills */}
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
          Technical Skills
        </p>
        <div className="mt-5 space-y-6">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-3">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full 
                      border border-amber-200/10 bg-white/5 
                      px-3 py-1 text-xs text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}