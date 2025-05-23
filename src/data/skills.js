import { Code, Palette, Database, Server, Smartphone, Wrench } from 'lucide-react'
import { 
  SiJavascript, 
  SiTypescript,
  SiPython, 
  SiPhp, 
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiLaravel,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiVite,
  SiWebpack
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export const skills = [
  {
    category: "Programming Languages",
    icon: Code,
    items: [
      { name: "JavaScript/TypeScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "HTML/CSS", icon: SiHtml5, color: "#E34C26" }
    ]
  },
  {
    category: "Frontend Development",
    icon: Palette,
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Redux", icon: SiReact, color: "#764ABC" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    items: [
      { name: "Node.js/Express.js", icon: SiExpress, color: "#000000" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "RESTful APIs", icon: SiExpress, color: "#000000" }
    ]
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ]
  },
  {
    category: "Development Tools",
    icon: Wrench,
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "VS Code", icon: SiGit, color: "#007ACC" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" }
    ]
  }
];