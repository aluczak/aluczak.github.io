import { contact, getEmail, getEncodedEmail } from '../data/contact'
import Section from '../components/Layout/Section'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <Section
        title="Get In Touch"
        subtitle="I'm always interested in hearing about new opportunities"
      >
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-lead">
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <a href={`mailto:${getEmail()}`} className="contact-link email-revealed">
                  <span dangerouslySetInnerHTML={{ __html: getEncodedEmail() }} />
                </a>
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
        </div>
      </Section>
    </div>
  )
}
