import type { ReactNode } from 'react'
import './Section.css'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  title?: string
  subtitle?: string
}

export default function Section({ children, className = '', id, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      {(title || subtitle) && (
        <div className="section-header">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="section-content">
        {children}
      </div>
    </section>
  )
}
