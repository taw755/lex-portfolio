export interface SkillCategory {
  id: string;
  filename: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillsCategories: SkillCategory[] = [
  {
    id: "01",
    filename: "programming.json",
    title: "PROGRAMMING",
    description: "Building foundational software and web development skills across multiple programming languages.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Java", "C++", "Python"]
  },
  {
    id: "02",
    filename: "frontend.json",
    title: "FRONTEND DEVELOPMENT",
    description: "Creating responsive, interactive, and visually appealing user interfaces for web applications.",
    skills: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    id: "03",
    filename: "backend.json",
    title: "BACKEND DEVELOPMENT",
    description: "Developing robust server-side logic and APIs to power web applications.",
    skills: ["PHP", "Laravel", "Node.js"]
  },
  {
    id: "04",
    filename: "databases.json",
    title: "DATABASES & DATA",
    description: "Designing schemas, writing queries, and managing relational data efficiently.",
    skills: ["MySQL", "PostgreSQL", "Supabase", "SQL", "Database Design", "Data Management"]
  },
  {
    id: "05",
    filename: "devops-tools.json",
    title: "DEVOPS & DEVELOPMENT TOOLS",
    description: "Utilizing modern tools and platforms for deployment, containerization, and version control.",
    skills: ["Docker", "Kubernetes", "AWS EC2", "Git", "GitHub", "Git Bash", "XAMPP", "Visual Studio Code"]
  },
  {
    id: "06",
    filename: "networking-security.json",
    title: "NETWORKING & SECURITY",
    description: "Understanding network infrastructure, protocols, and foundational security practices.",
    skills: ["TCP/IP", "DNS", "DHCP", "Network Protocols", "Network Topologies", "Basic Network Administration", "Network Troubleshooting", "Network Security", "Firewall Configuration"]
  },
  {
    id: "07",
    filename: "it-support.json",
    title: "IT SUPPORT",
    description: "Providing technical assistance, maintaining systems, and resolving hardware or software issues.",
    skills: ["Technical Support", "System Troubleshooting", "Software Setup", "System Maintenance", "User Assistance"]
  }
];
