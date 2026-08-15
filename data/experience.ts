export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  project: string;
  location: string;
  type: string;
  userScale: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "tcs-tata-steel",
    company: "Tata Consultancy Services (TCS)",
    role: "Software Developer",
    period: "Feb 2024 – Present",
    project: "Tata Steel – Logistics Project",
    location: "India",
    type: "Full-Time",
    userScale: "~10,000 users",
    summary:
      "Engineering and maintaining mission-critical enterprise web applications powering Tata Steel's logistics operations across India.",
    achievements: [
      "Developed and maintained production-grade web applications supporting Tata Steel's logistics operations across India.",
      "Engineered systems serving approximately 10,000 active users with high reliability and uptime.",
      "Built responsive, accessible, and reusable UI components adhering to enterprise design standards.",
      "Integrated secure REST APIs to synchronize real-time logistics, freight, and supply-chain datasets.",
      "Investigated and resolved production issues rapidly to maintain application performance and business continuity.",
      "Collaborated closely with cross-functional engineering, QA, and product teams across the full SDLC.",
      "Utilized Git and TFS for robust version control, branching strategies, and CI/CD deployment workflows.",
      "Interfaced with enterprise databases including Oracle and Microsoft SQL Server for optimized transactional queries.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "REST APIs",
      "Oracle",
      "Microsoft SQL Server",
      "Git",
      "TFS",
    ],
  },
];
