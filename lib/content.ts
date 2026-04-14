export type SiteContent = {
  name: string
  role: string
  tagline: string
  bio: string[]
  services: string[]
  marqueeItems: string[]
  contact: { email: string; linkedin: string; behance: string }
  bioPhoto: string
}

export const siteContent: SiteContent = {
  name: 'Graclyn',
  role: 'Graphic Designer',
  tagline: 'Crafting visual identities and brand experiences that feel alive.',
  bio: [
    'Replace this with a paragraph about Graclyn — her background, her approach, what drives her work.',
    'A second paragraph about her process, her clients, or what makes her work distinct.',
  ],
  services: ['Branding', 'Identity Design', 'Typography', 'Print', 'Packaging', 'Editorial'],
  marqueeItems: ['Branding', 'Identity Design', 'Typography', 'Print', 'Packaging', 'Editorial', 'Visual Systems'],
  contact: {
    email: '',
    linkedin: '',
    behance: '',
  },
  bioPhoto: '', // Set to '/images/graclyn.jpg' when ready; empty = no photo rendered
}
