import data from './experience.json'

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  technologies: string[]
  achievements: string[]
}

export const experience: Experience[] = data.experience

export const totalYears = new Date().getFullYear() - data.startYear
