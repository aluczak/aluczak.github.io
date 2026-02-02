export interface SkillCategory {
  title: string
  description: string
  skills: string[]
  icon?: string
}

export const skills: SkillCategory[] = [
  {
    title: 'Backend Development',
    description: 'Building robust, scalable server-side applications and APIs',
    skills: [
      '.NET / .NET Core',
      'C#',
      'ASP.NET Web API',
      'Azure Functions',
      'Entity Framework',
      'SQL Server',
      'PostgreSQL',
      'RESTful Services',
      'GraphQL',
      'Microservices Architecture'
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces',
    skills: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3 / SCSS',
      'Tailwind CSS',
      'Redux',
      'React Router'
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Automating deployments and managing cloud infrastructure',
    skills: [
      'Azure',
      'Azure DevOps',
      'GitHub Actions',
      'Terraform',
      'Docker',
      'Kubernetes',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Azure Pipelines'
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Building intelligent applications and leveraging AI/ML technologies',
    skills: [
      'Azure OpenAI Service',
      'OpenAI API',
      'Azure Cognitive Services',
      'LLM Integration',
      'Prompt Engineering',
      'RAG (Retrieval-Augmented Generation)',
      'Vector Databases',
      'ML.NET',
      'Python for AI/ML',
      'AI-Powered Application Development'
    ]
  },
  {
    title: 'Tools & Practices',
    description: 'Development tools and methodologies I use daily',
    skills: [
      'Git',
      'GitHub',
      'Azure DevOps',
      'Jira',
      'Agile / Scrum',
      'TDD / Test-Driven Development',
      'Code Review',
      'Clean Code',
      'Design Patterns',
      'SOLID Principles'
    ]
  }
]
