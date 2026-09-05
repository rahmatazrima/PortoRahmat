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
  headline: "UI/UX designer who also builds the front-end.",
  bio: "UI/UX designer who turns ideas into working products. I handle the whole loop — user research, flows, high-fidelity designs in Figma — and then I code them into responsive, real front-ends. Nothing gets lost between the mockup and the final screen.",
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
      "An online booking system for a mobile phone repair shop — pick a service, book a slot, done.",
    details: [
      "Designed the UX in Figma, then built the app with Next.js and TypeScript",
      "Responsive UI from the design system, implemented in Tailwind CSS",
      "Backend with PostgreSQL & Prisma for bookings and spare parts",
      "PWA features so it feels fast and works offline",
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
    description: "Redesigned a government social-welfare system so officers can actually use it.",
    details: [
      "Mapped real user flows, then wireframes and high-fidelity prototypes in Figma",
      "Turned stakeholder requirements into a clear, usable interface",
      "Built one consistent design system with reusable components",
      "Checked every screen for visual hierarchy and accessibility",
    ],
    stack: ["Figma", "User Research", "Design Systems", "Accessibility"],
  },
  {
    id: "bootani",
    name: "BooTani",
    type: "Weather-Based Crop Planting Prediction Mobile App",
    description:
      "A mobile app that tells farmers when to plant, based on weather data.",
    details: [
      "Worked in a multidisciplinary team — mobile, ML and cloud",
      "Turned complex agriculture data into simple flows and wireframes",
      "Shipped with an Agile process and clear product discussions",
      "Pushed for usability at every step of the build",
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
      "Designed the PPKS system end-to-end, from concept to high-fidelity.",
    highlights: [
      "Built user flows, wireframes and interactive prototypes",
      "Designed a complete design system for consistency",
      "Worked with stakeholders to turn requirements into screens",
      "Raised usability with clear hierarchy and accessibility",
    ],
  },
  {
    id: "bangkit",
    period: "Feb 2024 – Jul 2024",
    title: "Mobile Development Cohort",
    company: "Bangkit Academy led by Google, GoTo & Traveloka",
    location: "Online",
    description:
      "Selected to a national tech talent program run by Google, GoTo & Traveloka.",
    highlights: [
      "Built a weather-based crop planting prediction app",
      "Worked alongside ML and Cloud computing teams",
      "Applied user-centered design through the whole lifecycle",
      "Shipped in Agile sprints and stood up in planning",
    ],
  },
  {
    id: "freelance",
    period: "2023 – Present",
    title: "Freelance Graphic Designer",
    company: "Self-employed",
    location: "Banda Aceh",
    description: "Delivered 50+ graphic and digital design projects for clients.",
    highlights: [
      "Social media campaigns, marketing materials and promotional assets",
      "Worked directly with clients to nail down what each project needed",
      "Kept branding consistent across every deliverable",
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
      "Relevant coursework: HCI, software engineering, web development",
      "Thesis: web-based mobile phone service booking system (Next.js, PostgreSQL, PWA)",
      "Streamlined service booking, spare part management and notifications",
    ],
  },
];
