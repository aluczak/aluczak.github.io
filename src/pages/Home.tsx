import { Link } from 'react-router-dom'
import { about } from '../data/about'
import Section from '../components/Layout/Section'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">{about.name}</h1>
            <h2 className="hero-title">{about.title}</h2>
            <p className="hero-bio">{about.shortBio}</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">Remote</span>
                <span className="stat-label">Available</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <Section title="What I Do" subtitle="Full-stack development with a focus on backend and cloud technologies">
        <div className="skills-preview">
          <div className="skill-category-preview">
            <h3>Backend</h3>
            <p>.NET / Azure</p>
          </div>
          <div className="skill-category-preview">
            <h3>Frontend</h3>
            <p>React / TypeScript</p>
          </div>
          <div className="skill-category-preview">
            <h3>DevOps</h3>
            <p>Terraform / CI/CD</p>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/skills" className="btn btn-outline">See All Skills</Link>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to work together?</h2>
          <p>I'm currently available for remote opportunities and interesting projects.</p>
          <Link to="/contact" className="btn btn-primary">Contact Me</Link>
        </div>
      </section>
    </div>
  )
}
