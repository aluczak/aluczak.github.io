import { experience, totalYears } from '../data/experience'
import Section from '../components/Layout/Section'
import Badge from '../components/ui/Badge'
import './Experience.css'

export default function Experience() {
  return (
    <div className="experience">
      <Section
        title="Work Experience"
        subtitle={`${totalYears}+ years of building software solutions`}
      >
        <div className="timeline">
          {experience.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-info">
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{job.period}</span>
                    <span className="timeline-location">{job.location}</span>
                  </div>
                </div>
                <p className="timeline-description">{job.description}</p>
                <div className="timeline-achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {job.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="timeline-technologies">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
