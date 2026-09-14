import type { Locale } from "@/components/language-provider";
import { education, experiences, projects, skills } from "@/data/portfolio";

export const uiText = {
  en: {
    nav: { about: "About Me", projects: "Projects", contact: "Contact" },
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    hello: "Hello, I'm",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    availability: "Open for freelance & collaboration",
    about: "About Me",
    aboutTitle: "I design it, then I build it.",
    aboutBody: "Most designs stop at the mockup. Mine don't — I turn them into working, responsive front-ends myself. That means every decision I make in Figma has already passed the \"can this actually ship?\" test.",
    getInTouch: "Get In Touch",
    whoIAm: "Who I am",
    aboutDetails: [
      "I'm a UI/UX designer from Banda Aceh, now finishing my Informatics degree at Syiah Kuala University (Feb 2026). I got into this through the design side, but I kept going until I could build what I designed.",
      "Interned at the Aceh Provincial Social Affairs Office, where I redesigned their welfare system from paper workflows into a usable digital flow. In Bangkit Academy (Google, GoTo & Traveloka) I built a weather-based planting app alongside ML and cloud teams. And as a freelance designer I've shipped 50+ projects for clients.",
      "One thing connects all of it: I take work from research and wireframes all the way to working, responsive code — so the design that gets approved is the one that ships.",
    ],
    projectsLabel: "Projects",
    projectsTitle: "Work I've shipped",
    viewGithub: "View GitHub",
    experienceEducation: "Experience & Education",
    experience: "Experience",
    education: "Education",
    technicalSkills: "Technical Skills",
    contact: "Contact",
    contactTitle: "Have a project in mind?",
    contactBody: "Open to freelance work — product UI, landing pages, or a full build from design to working code. Tell me what you're trying to make.",
    email: "Email",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    resume: "Resume",
    resumeTitle: "Curriculum Vitae",
    downloadResume: "Download resume",
    openResume: "Open resume in a new tab",
    closeResume: "Close resume",
    preview: "preview",
    gpa: "GPA",
  },
  id: {
    nav: { about: "Tentang Saya", projects: "Proyek", contact: "Kontak" },
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    hello: "Halo, saya",
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    availability: "Terbuka untuk freelance & kolaborasi",
    about: "Tentang Saya",
    aboutTitle: "Saya merancangnya, lalu membangunnya.",
    aboutBody: "Kebanyakan desain berhenti di mockup. Desain saya tidak — saya mengubahnya menjadi front-end responsif yang benar-benar berjalan. Setiap keputusan yang saya buat di Figma sudah melewati pertanyaan: \"bisakah ini benar-benar dipublikasikan?\"",
    getInTouch: "Hubungi Saya",
    whoIAm: "Tentang Saya",
    aboutDetails: [
      "Saya desainer UI/UX dari Banda Aceh yang sedang menyelesaikan studi Informatika di Universitas Syiah Kuala (Feb 2026). Saya memulai dari sisi desain, lalu terus belajar hingga bisa membangun apa yang saya rancang.",
      "Saya pernah magang di Dinas Sosial Provinsi Aceh dan mendesain ulang sistem kesejahteraan dari alur kerja berbasis kertas menjadi alur digital yang mudah digunakan. Di Bangkit Academy (Google, GoTo & Traveloka), saya membangun aplikasi waktu tanam berbasis cuaca bersama tim ML dan cloud. Sebagai desainer freelance, saya telah menyelesaikan lebih dari 50 proyek untuk klien.",
      "Satu hal menghubungkan semuanya: saya membawa pekerjaan dari riset dan wireframe hingga menjadi kode responsif yang berjalan — sehingga desain yang disetujui adalah desain yang benar-benar dirilis.",
    ],
    projectsLabel: "Proyek",
    projectsTitle: "Karya yang saya buat",
    viewGithub: "Lihat GitHub",
    experienceEducation: "Pengalaman & Pendidikan",
    experience: "Pengalaman",
    education: "Pendidikan",
    technicalSkills: "Keahlian Teknis",
    contact: "Kontak",
    contactTitle: "Punya proyek yang ingin dibuat?",
    contactBody: "Terbuka untuk pekerjaan freelance — UI produk, landing page, atau membangun produk lengkap dari desain hingga kode yang berjalan. Ceritakan kebutuhan Anda.",
    email: "Email",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    resume: "Resume",
    resumeTitle: "Curriculum Vitae",
    downloadResume: "Unduh resume",
    openResume: "Buka resume di tab baru",
    closeResume: "Tutup resume",
    preview: "pratinjau",
    gpa: "IPK",
  },
} as const;

const projectContent = {
  en: {
    bukhari: {
      type: "Full Stack Web Application",
      description: "An online booking system for a mobile phone repair shop — pick a service, book a slot, done.",
      details: ["Designed the UX in Figma, then built the app with Next.js and TypeScript", "Responsive UI from the design system, implemented in Tailwind CSS"],
    },
    ppks: {
      type: "UI/UX Design Project",
      description: "Redesigned a government social-welfare system so officers can actually use it.",
      details: ["Mapped real user flows, then wireframes and high-fidelity prototypes in Figma", "Turned stakeholder requirements into a clear, usable interface"],
    },
    bootani: {
      type: "Weather-Based Crop Planting Prediction Mobile App",
      description: "A mobile app that tells farmers when to plant, based on weather data.",
      details: ["Worked in a multidisciplinary team — mobile, ML and cloud", "Turned complex agriculture data into simple flows and wireframes"],
    },
  },
  id: {
    bukhari: {
      type: "Aplikasi Web Full Stack",
      description: "Sistem booking online untuk tempat servis ponsel — pilih layanan, pilih jadwal, selesai.",
      details: ["Merancang UX di Figma lalu membangun aplikasi dengan Next.js dan TypeScript", "UI responsif dari design system yang diimplementasikan dengan Tailwind CSS"],
    },
    ppks: {
      type: "Proyek Desain UI/UX",
      description: "Mendesain ulang sistem kesejahteraan sosial pemerintah agar mudah digunakan oleh petugas.",
      details: ["Memetakan alur pengguna, wireframe, dan prototipe high-fidelity di Figma", "Mengubah kebutuhan stakeholder menjadi antarmuka yang jelas dan mudah digunakan"],
    },
    bootani: {
      type: "Aplikasi Mobile Prediksi Waktu Tanam Berbasis Cuaca",
      description: "Aplikasi mobile yang membantu petani menentukan waktu tanam berdasarkan data cuaca.",
      details: ["Bekerja dalam tim multidisiplin bersama tim mobile, ML, dan cloud", "Mengubah data pertanian yang kompleks menjadi alur dan wireframe sederhana"],
    },
  },
} as const;

const experienceContent = {
  en: {
    "ppks-intern": { title: "UI/UX Design Intern", description: "Designed the PPKS system end-to-end, from concept to high-fidelity." },
    bangkit: { title: "Mobile Development Cohort", description: "Selected to a national tech talent program run by Google, GoTo & Traveloka." },
    freelance: { title: "Freelance Graphic Designer", description: "Delivered 50+ graphic and digital design projects for clients." },
  },
  id: {
    "ppks-intern": { title: "Intern Desain UI/UX", description: "Merancang sistem PPKS secara menyeluruh, dari konsep hingga high-fidelity." },
    bangkit: { title: "Peserta Mobile Development", description: "Terpilih dalam program talenta teknologi nasional yang diselenggarakan Google, GoTo & Traveloka." },
    freelance: { title: "Desainer Grafis Freelance", description: "Menyelesaikan lebih dari 50 proyek desain grafis dan digital untuk klien." },
  },
} as const;

const educationContent = {
  en: { "syiah-kuala": { degree: "Bachelor of Informatics", highlights: ["Relevant coursework: HCI, software engineering, web development", "Thesis: web-based mobile phone service booking system"] } },
  id: { "syiah-kuala": { degree: "Sarjana Informatika", highlights: ["Mata kuliah terkait: HCI, rekayasa perangkat lunak, dan pengembangan web", "Skripsi: sistem booking servis ponsel berbasis web"] } },
} as const;

export function getLocalizedProjects(locale: Locale) {
  return projects.map((project) => ({
    ...project,
    ...projectContent[locale][project.id as keyof typeof projectContent.en],
  }));
}

export function getLocalizedExperiences(locale: Locale) {
  return experiences.map((item) => ({ ...item, ...experienceContent[locale][item.id as keyof typeof experienceContent.en] }));
}

export function getLocalizedEducation(locale: Locale) {
  return education.map((item) => ({ ...item, ...educationContent[locale][item.id as keyof typeof educationContent.en] }));
}

export function getLocalizedSkills(locale: Locale) {
  if (locale === "en") return skills;
  return skills.map((skill) => ({
    ...skill,
    category: { "UI/UX Design": "Desain UI/UX", "Front-End Development": "Pengembangan Front-End", "Back-End & Database": "Back-End & Database", "Tools & Productivity": "Tools & Produktivitas" }[skill.category] ?? skill.category,
  }));
}
