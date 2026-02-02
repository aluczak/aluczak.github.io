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

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Coming Soon',
    shortDescription: 'A brief description of your project will appear here.',
    fullDescription: 'This is where you will showcase your project. Include details about the problem you solved, the technologies used, and the impact of your work.',
    technologies: ['.NET', 'React', 'Azure'],
    featured: true,
    category: 'Web Application'
  },
  {
    id: '2',
    title: 'Another Project',
    shortDescription: 'Another project description will appear here.',
    fullDescription: 'Add details about this project, including your role, the challenges faced, and how you overcame them.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL'],
    featured: true,
    category: 'Backend'
  }
]

export const categories = [
  'All',
  'Web Application',
  'Backend',
  'Mobile',
  'Open Source',
  'Other'
]
