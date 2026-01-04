import { Skill } from "@/types/portfolio";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAmazon,
} from "react-icons/si";

export const techStack: Skill[] = [
  {
    name: "TypeScript",
    category: "Language",
    icon: <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10 text-[#3178C6]" />,
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: <SiJavascript className="w-8 h-8 sm:w-10 sm:h-10 text-[#F7DF1E]" />,
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10" />,
  },
  {
    name: "React",
    category: "Library",
    icon: <SiReact className="w-8 h-8 sm:w-10 sm:h-10 text-[#61DAFB]" />,
  },
  {
    name: "Angular",
    category: "Framework",
    icon: <SiAngular className="w-8 h-8 sm:w-10 sm:h-10 text-[#DD0031]" />,
  },
  {
    name: "Node.js",
    category: "Runtime",
    icon: <SiNodedotjs className="w-8 h-8 sm:w-10 sm:h-10 text-[#339933]" />,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: <SiTailwindcss className="w-8 h-8 sm:w-10 sm:h-10 text-[#06B6D4]" />,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <SiPostgresql className="w-8 h-8 sm:w-10 sm:h-10 text-[#4169E1]" />,
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <SiMongodb className="w-8 h-8 sm:w-10 sm:h-10 text-[#47A248]" />,
  },
  {
    name: "Git",
    category: "Tools",
    icon: <SiGit className="w-8 h-8 sm:w-10 sm:h-10 text-[#F05032]" />,
  },
  {
    name: "Docker",
    category: "Tools",
    icon: <SiDocker className="w-8 h-8 sm:w-10 sm:h-10 text-[#2496ED]" />,
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: <SiAmazon className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF9900]" />,
  },
];
