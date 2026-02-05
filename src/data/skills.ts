import data from './skills.json'

export interface SkillCategory {
  title: string
  description: string
  skills: string[]
  icon?: string
}

export const skills: SkillCategory[] = data.skills
