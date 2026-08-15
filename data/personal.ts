export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  heroTitle: string;
  tagline: string;
  bio: string;
  shortBio: string;
  location: string;
  experienceYears: string;
  currentCompany: string;
  currentProject: string;
  currentRole: string;
  currentPeriod: string;
  email: string;
  phone: string;
  phoneTel: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
  highlights: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "BalKrishna Pandey",
  title: "Software Developer",
  heroTitle: "Full Stack Software Developer",
  tagline: "Software Developer building scalable, user-focused web applications.",
  bio: "Software Developer with 2+ years of professional experience building and maintaining production-grade applications using React, TypeScript, Next.js, and modern web technologies. Experienced in collaborating across cross-functional teams, solving mission-critical production issues, and delivering robust full-lifecycle software solutions.",
  shortBio: "Software Developer with 2+ years of experience building and maintaining production-grade applications using React, TypeScript, Next.js and modern web technologies.",
  location: "India",
  experienceYears: "2+ Years",
  currentCompany: "Tata Consultancy Services (TCS)",
  currentProject: "Tata Steel – Logistics Project",
  currentRole: "Software Developer",
  currentPeriod: "February 2024 – Present",
  email: "balkrishnapandey.dev@gmail.com",
  phone: "+91 8789959135",
  phoneTel: "tel:+918789959135",
  resumeUrl: "/BalKrishna-Pandey-Resume.pdf",
  socials: {
    github: "https://github.com/balkrishna14",
    linkedin: "https://www.linkedin.com/in/balkrishnapandey4",
    email: "mailto:balkrishnapandey.dev@gmail.com",
    phone: "tel:+918789959135",
  },
  highlights: [
    {
      label: "Production Scale",
      value: "~10,000",
      description: "Active users supported across Tata Steel logistics nationwide",
    },
    {
      label: "Experience",
      value: "2+ Years",
      description: "Professional software development at enterprise scale",
    },
    {
      label: "Core Specialization",
      value: "React & Next.js",
      description: "Modern, high-performance UI engineering & full stack architectures",
    },
  ],
};
