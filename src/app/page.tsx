// src/app/page.tsx
"use client";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden 
      bg-[#130707] text-white">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[28rem] 
          bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_55%)]" />
        <div className="absolute left-[-8%] top-[8%] h-[26rem] 
          w-[26rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[18%] h-[24rem] 
          w-[24rem] rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[16%] h-[20rem] 
          w-[20rem] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-[1500px] px-4 
        py-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 
          bg-black/30 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.5)] 
          backdrop-blur-2xl lg:p-4">
          
          {/* Navbar */}
          <Navbar />

          {/* Sections */}
          <Hero />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}