import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' }
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          AL
        </Link>
        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
