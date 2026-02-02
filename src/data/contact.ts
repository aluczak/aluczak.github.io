import data from './contact.json'

export interface ContactData {
  email: {
    user: string
    domain: string
    display: string
  }
  linkedin: string
  github: string
  availability: string
  availabilityStatus: 'open' | 'limited' | 'closed'
}

export const contact: ContactData = data as ContactData

// Bot-proof email assembly - reconstruct email on demand
export function getEmail(): string {
  return `${data.email.user}@${data.email.domain}`
}
