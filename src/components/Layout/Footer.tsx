import { about } from '../../data/about'
import { contact, getEmail } from '../../data/contact'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-name">{about.name}</p>
            <p className="footer-title">{about.title}</p>
            <p className="footer-availability">{contact.availability}</p>
          </div>
          <div className="footer-links">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <a href={`mailto:${getEmail()}`} className="footer-link">
              Email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {about.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
