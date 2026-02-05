import data from './projects.json'

export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  link?: string
  github?: string
  featured: boolean
  category: string
}

export const projects: Project[] = data.projects

export const categories: string[] = data.categories
