import { useState, useMemo } from 'react'
import { certifications, categories } from '../data/certifications'
import type { Certification } from '../data/certifications'
import Section from '../components/Layout/Section'
import './Certifications.css'

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredCertifications = useMemo(() => {
    if (selectedCategory === 'All') return certifications
    return certifications.filter(cert => cert.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="certifications">
      <Section
        title="Certifications"
        subtitle={`${certifications.length} professional certifications across ${categories.length} categories`}
      >
        <div className="certifications-filter">
          <button
            className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="certifications-grid">
          {filteredCertifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </Section>
    </div>
  )
}

const KNOWN_CATEGORIES = ['Cloud', 'DevOps', 'Agile', 'Development', 'Database']

function CertCard({ cert }: { cert: Certification }) {
  const categoryClass = KNOWN_CATEGORIES.includes(cert.category)
    ? cert.category.toLowerCase()
    : 'default'

  return (
    <div className="cert-card">
      <div className="cert-header">
        <span className={`cert-category cert-category-${categoryClass}`}>
          {cert.category}
        </span>
        <span className="cert-date">{cert.date}</span>
      </div>
      <h3 className="cert-name">{cert.name}</h3>
      <p className="cert-issuer">{cert.issuer}</p>
      <div className="cert-footer">
        <span className="cert-id">ID: {cert.credentialId}</span>
        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-link">
          Verify →
        </a>
      </div>
    </div>
  )
}
