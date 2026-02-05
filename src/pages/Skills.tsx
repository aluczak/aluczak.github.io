import { skills } from '../data/skills'
import Section from '../components/Layout/Section'
import Badge from '../components/ui/Badge'
import './Skills.css'

export default function Skills() {
  return (
    <div className="skills">
      <Section
        title="Skills & Technologies"
        subtitle="Technical expertise across the full stack"
      >
        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.title} className="skill-category">
              <div className="skill-category-header">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
