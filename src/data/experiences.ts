export type Experience = {
  title: string;
  organization: string;
  location: string;
  from: string;
  to: string;
  description: string[];
  skills?: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    title: "Machine Learning Engineer",
    organization: "Preferred Networks, Inc.",
    location: "Tokyo, Japan",
    from: "June 2025",
    to: "Present",
    description: [
      "Led generative AI–related projects",
      "Developed LLM-based applications and prototypes using TypeScript (React) and Python (FastAPI, LangChain)",
      "Conducted technical validation and methodology development using LangChain, and integrated solutions into production products",
    ],
    skills: [
      "Python",
      "LangChain",
      "vLLM",
      "FastAPI",
      "Pytest",
      "TypeScript",
      "React",
      "Kubernetes",
    ],
  },
  {
    title: "Data Scientist",
    organization: "Accenture Japan Ltd.",
    location: "Tokyo, Japan",
    from: "June 2021",
    to: "May 2025",
    description: [
      "Engaged in data analytics and generative AI–related projects",
      "Led projects involving task design and decomposition, progress tracking, and team management for teams of up to 15 members",
      "Mentored and developed team members through 1-on-1 meetings and code reviews",
      "Performed large-scale data analysis using PySpark",
      "Developed prototypes using LangChain and Streamlit",
    ],
    skills: [
      "Python",
      "PySpark",
      "Scikit-learn",
      "PyTorch",
      "LangChain",
      "FastAPI",
      "Pytest",
      "Docker",
    ],
  },
  {
    title: "Mechanical Engineer",
    organization: "Panasonic Corporation",
    location: "Shiga, Japan",
    from: "April 2020",
    to: "May 2021",
    description: ["Design and development using 3D CAD"],
    skills: ["3D-CAD"],
  },
];
