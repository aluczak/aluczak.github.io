import { about } from '../data/about'
import { contact } from '../data/contact'
import Section from '../components/Layout/Section'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <Section
        title="About Me"
        subtitle="Get to know me better"
      >
        <div className="about-content">
          <div className="about-intro">
            <p className="about-lead">{about.shortBio}</p>
            <div className="about-bio">
              {about.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="about-details">
            <div className="detail-card">
              <h3>Location</h3>
              <p>{about.location}</p>
            </div>
            <div className="detail-card">
              <h3>Education</h3>
              <p>{about.education.degree}</p>
              <p className="detail-subtitle">{about.education.institution}, {about.education.year}</p>
            </div>
            <div className="detail-card">
              <h3>Availability</h3>
              <p>{contact.availability}</p>
            </div>
            <div className="detail-card">
              <h3>Focus Areas</h3>
              <ul className="focus-list">
                <li>.NET / Azure Development</li>
                <li>Full-Stack Solutions</li>
                <li>Cloud Architecture</li>
                <li>DevOps & Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
