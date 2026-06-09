export interface Skill {
  name: string
  category: string
  level: number
}

export const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    level: 90,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: 85,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 80,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 90,
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 75,
  },
  {
    name: "Git",
    category: "Tools",
    level: 85,
  },
]