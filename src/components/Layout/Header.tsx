import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

interface NavItem {
  path: string
  label: string
}

export default function Header() {
  const location = useLocation()

  const navItems: NavItem[] = useMemo(() => [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ], [])

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
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
