export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  unit?: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Building responsive, modern, type-safe interfaces and reusable component systems.",
    icon: "Layout",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "Developing server-side applications, RESTful services, and API-driven application workflows.",
    icon: "Server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Working with relational and document databases for enterprise and application data.",
    icon: "Database",
    skills: [
      "MongoDB",
      "Oracle",
      "MySQL",
      "Microsoft SQL Server",
      "SQL",
      "PostgreSQL",
    ],
  },
  {
    id: "core",
    name: "Core Engineering",
    description: "Engineering practices for building reliable, maintainable, and scalable applications.",
    icon: "Cpu",
    unit: "Practices",
    skills: [
      "Debugging & Troubleshooting",
      "REST API Integration",
      "Component-Based Architecture",
      "Software Development Lifecycle (SDLC)",
      "System Design",
    ],
  },
  {
    id: "ai",
    name: "AI & Modern Workflows",
    description: "Integrating AI capabilities and LLM-based tools into modern application development workflows.",
    icon: "Sparkles",
    skills: [
      "AI Integration",
      "LLM APIs",
      "AI-assisted Development",
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    description: "Developer tooling, version control, API testing, design, and modern deployment infrastructure.",
    icon: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Prisma",
      "Figma",
      "Docker",
      "Kubernetes",
    ],
  },
];
