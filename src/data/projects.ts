export interface Project {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  challenge: string
  solution: string
  techStack: string[]
  githubUrl: string
  deployUrl?: string
  imageUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Your First Project",
    shortDescription: "A brief, compelling one-liner about this project.",
    fullDescription: "A detailed explanation of what this project does and why it exists.",
    challenge: "Describe the problem you were solving.",
    solution: "Describe your approach and what you learned.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project-one",
    deployUrl: "https://project-one.vercel.app",
    imageUrl: "/images/projects/project-one.png",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Your Second Project",
    shortDescription: "A brief, compelling one-liner about this project.",
    fullDescription: "A detailed explanation of what this project does and why it exists.",
    challenge: "Describe the problem you were solving.",
    solution: "Describe your approach and what you learned.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project-one",
    deployUrl: "https://project-one.vercel.app",
    imageUrl: "/images/projects/project-one.png",
    featured: true,
  },
  {
    slug: "project-three",
    title: "Your Third Project",
    shortDescription: "A brief, compelling one-liner about this project.",
    fullDescription: "A detailed explanation of what this project does and why it exists.",
    challenge: "Describe the problem you were solving.",
    solution: "Describe your approach and what you learned.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project-one",
    deployUrl: "https://project-one.vercel.app",
    imageUrl: "/images/projects/project-one.png",
    featured: true,
  },
]