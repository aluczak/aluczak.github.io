import data from './contact.json'

export interface ContactData {
  email: {
    user: string
    domain: string
    hide: boolean
  }
  linkedin: string
  github: string
}

export const contact: ContactData = data as ContactData

// Bot-proof email assembly - returns raw email for mailto links
export function getEmail(): string {
  return `${data.email.user}@${data.email.domain}`
}

// Returns HTML-encoded email for display (protects against simple scrapers)
export function getEncodedEmail(): string {
  const email = getEmail()
  return email
    .split('')
    .map(char => `&#${char.charCodeAt(0)};`)
    .join('')
}
