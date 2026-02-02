import { projects, categories } from '../data/projects'
import { useState } from 'react'
import Section from '../components/Layout/Section'
import Badge from '../components/ui/Badge'
import './Portfolio.css'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="portfolio">
      <Section
        title="Portfolio"
        subtitle="A showcase of my projects and technical work"
      >
        <div className="portfolio-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-card-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-category">
                  <Badge variant="outline">{project.category}</Badge>
                </p>
                <p className="portfolio-description">{project.shortDescription}</p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="portfolio-empty">No projects found in this category.</p>
        )}
      </Section>
    </div>
  )
}
