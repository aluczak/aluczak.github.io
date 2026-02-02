import { useState } from 'react'
import { contact, getEmail } from '../data/contact'
import Section from '../components/Layout/Section'
import './Contact.css'

export default function Contact() {
  const [emailRevealed, setEmailRevealed] = useState(false)

  const handleEmailClick = () => {
    setEmailRevealed(true)
  }

  return (
    <div className="contact">
      <Section
        title="Get In Touch"
        subtitle="I'm always interested in hearing about new opportunities"
      >
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-lead">
              I'm currently available for remote work and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                {emailRevealed ? (
                  <a href={`mailto:${getEmail()}`} className="contact-link email-revealed">
                    {getEmail()}
                  </a>
                ) : (
                  <button 
                    onClick={handleEmailClick}
                    className="contact-link email-protected"
                    aria-label="Reveal email address"
                  >
                    {contact.email.display}
                  </button>
                )}
              </div>
              
              <div className="contact-method">
                <h3>LinkedIn</h3>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                  Connect on LinkedIn
                </a>
              </div>
              
              <div className="contact-method">
                <h3>GitHub</h3>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                  View My GitHub
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-availability">
            <h3>Current Availability</h3>
            <div className="availability-badge">
              <span className="availability-dot"></span>
              <span>{contact.availability}</span>
            </div>
            <p className="availability-note">Currently working remotely. Happy to collaborate with teams worldwide.</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
