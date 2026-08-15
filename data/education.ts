export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location?: string;
  scoreType: "CGPA" | "Percentage";
  score: string;
  featured?: boolean;
  highlights?: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "btech-srm",
    institution: "SRM University, Chennai",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science",
    period: "2019 – 2023",
    location: "Chennai, India",
    scoreType: "CGPA",
    score: "8.69 / 10.0",
    featured: true,
    highlights: [
      "Graduated with high academic distinction (CGPA: 8.69 / 10.0)",
      "Comprehensive coursework in Database Management Systems, Web Technologies, and Software Engineering",
      "Delivered production-grade full stack capstone projects in modern web technologies",
    ],
  },
  {
    id: "class-12-synergy",
    institution: "Sri Prakash Synergy School, Kakinada",
    degree: "Class XII / 12th Standard",
    field: "Mathematics, Physics, Chemistry",
    period: "Passed Out: 2019",
    location: "Kakinada, India",
    scoreType: "Percentage",
    score: "72%",
    featured: false,
  },
  {
    id: "class-10-vidyaniketan",
    institution: "Sri Prakash VidyaNiketan",
    degree: "Class X / 10th Standard",
    field: "Secondary School Certificate",
    period: "Passed Out: 2017",
    location: "Visakhapatnam, India",
    scoreType: "CGPA",
    score: "10.0 / 10.0 ",
    featured: false,
  },
];
