// src/data/portfolio.ts
import type {
  Profile,
  Project,
  Experience,
  Education,
  Skill,
} from "@/types/portfolio";

export const profile: Profile = {
  name: "Rahmat Azrima",
  role: "UI/UX Designer & Front-End Developer",
  location: "Banda Aceh",
  phone: "+62 822-1935-7538",
  email: "rahmatazrima2002@gmail.com",
  github: "https://github.com/rahmatazrima",
  linkedin: "https://linkedin.com/in/rahmatazrima",
  headline:
    "Merancang pengalaman digital intuitif yang user-centered dan responsif.",
  bio: "UI/UX Designer dengan passion menciptakan produk digital yang memecahkan masalah nyata. Pengalaman dalam designing web & mobile interfaces melalui user research, wireframing, dan high-fidelity prototyping di Figma. Didukung solid foundation dalam software engineering dan front-end technologies.",
  gpa: "3.25/4.00",
  graduationDate: "Feb 2026",
};

export const skills: Skill[] = [
  {
    category: "UI/UX Design",
    items: [
      "Figma",
      "User Research",
      "User Flow",
      "Wireframing",
      "Interactive Prototyping",
      "Design Systems",
      "Usability Testing",
      "Responsive Design",
    ],
  },
  {
    category: "Front-End Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "React",
      "Framer Motion",
    ],
  },
  {
    category: "Back-End & Database",
    items: ["Node.js", "PostgreSQL", "Prisma ORM", "REST API"],
  },
  {
    category: "Tools & Productivity",
    items: [
      "Figma",
      "Canva",
      "Adobe Photoshop",
      "Microsoft Office",
      "CapCut",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "bukhari",
    name: "Bukhari Service Center",
    type: "Full Stack Web Application",
    description:
      "Platform digitalisasi untuk sistem booking service mobile phone.",
    details: [
      "Designed & developed full-stack web app dengan Next.js & TypeScript",
      "UI/UX intuitif di Figma, implementasi responsive dengan Tailwind CSS",
      "Backend dengan PostgreSQL & Prisma ORM untuk booking & spare parts management",
      "Implemented PWA features untuk fast & reliable experience",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "PWA",
    ],
  },
  {
    id: "ppks",
    name: "PPKS Information System",
    type: "UI/UX Design Project",
    description: "User-centered interface untuk Social Welfare Services system.",
    details: [
      "Designed structured user flows, wireframes & high-fidelity prototypes di Figma",
      "Translated stakeholder requirements menjadi intuitive digital experiences",
      "Developed consistent design system & reusable UI components",
      "Applied usability principles, visual hierarchy & accessibility best practices",
    ],
    stack: ["Figma", "User Research", "Design Systems", "Accessibility"],
  },
  {
    id: "bootani",
    name: "BooTani",
    type: "Weather-Based Crop Planting Prediction Mobile App",
    description:
      "Mobile application prediksi optimal planting seasons berdasarkan weather data.",
    details: [
      "Collaborated dengan multidisciplinary teams (Mobile Dev, ML, Cloud)",
      "Designed user flows & wireframes yang simplify complex agricultural info",
      "Worked dengan Agile methodologies untuk deliver integrated digital product",
      "Contributed ke product discussions & usability improvements",
    ],
    stack: ["User-Centered Design", "Agile", "Mobile Development"],
  },
];

export const experiences: Experience[] = [
  {
    id: "ppks-intern",
    period: "Jul 2024 – Sep 2024",
    title: "UI/UX Design Intern",
    company: "Aceh Provincial Social Affairs Office",
    location: "Banda Aceh",
    description:
      "Conducted UI/UX design untuk PPKS system dari concept hingga high-fidelity.",
    highlights: [
      "Created user flows, wireframes & interactive prototypes",
      "Designed comprehensive design system untuk consistency",
      "Collaborated dengan stakeholders transform requirements",
      "Improved usability dengan visual hierarchy & accessibility",
    ],
  },
  {
    id: "bangkit",
    period: "Feb 2024 – Jul 2024",
    title: "Mobile Development Cohort",
    company: "Bangkit Academy led by Google, GoTo & Traveloka",
    location: "Online",
    description:
      "Selected sebagai technology talent participant di prestigious program.",
    highlights: [
      "Collaborated dengan ML & Cloud Computing cohorts",
      "Built weather-based crop planting prediction application",
      "Applied user-centered design principles throughout lifecycle",
      "Participated dalam Agile development & sprint planning",
    ],
  },
  {
    id: "freelance",
    period: "2023 – Present",
    title: "Freelance Graphic Designer",
    company: "Self-employed",
    location: "Banda Aceh",
    description: "Delivered 50+ graphic & digital design projects untuk clients.",
    highlights: [
      "Social media campaigns, marketing materials & promotional assets",
      "Direct collaboration dengan clients identify project objectives",
      "Maintained consistent branding across projects",
    ],
  },
];

export const education: Education[] = [
  {
    id: "syiah-kuala",
    period: "Feb 2026",
    degree: "Bachelor of Informatics",
    institution: "Syiah Kuala University",
    location: "Banda Aceh",
    gpa: "3.25/4.00",
    highlights: [
      "Relevant Coursework: HCI, Software Engineering, Web Development",
      "Thesis: Web-based mobile phone service booking system (Next.js, PostgreSQL, PWA)",
      "Streamline service booking, spare part management & notifications",
    ],
  },
];

export const stats = [
  { label: "Projects", value: "05+" },
  { label: "Years Experience", value: "02+" },
  { label: "Style", value: "Warm Premium" },
];