import data from './certifications.json'

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId: string
  url: string
  category: string
}

export const certifications: Certification[] = data.certifications

export const categories = [...new Set(certifications.map(c => c.category))]
