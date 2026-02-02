import { about } from '../../data/about'
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
            <p className="footer-availability">{about.availability}</p>
          </div>
          <div className="footer-links">
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href={about.github} target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <a href={`mailto:${about.email}`} className="footer-link">
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
