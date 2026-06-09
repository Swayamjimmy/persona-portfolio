export interface Education {
  year: string
  institution: string
  degree: string
  description?: string
}

export const education: Education[] = [
  {
    year: "2020-2024",
    institution: "Your University",
    degree: "B.S. Computer Science",
    description: "Relevant coursework or achievements.",
  },
]