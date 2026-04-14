export type Project = {
  slug: string
  title: string
  category: string[]
  year: string
  description: string
  body: string
  heroImage: string
  images: string[]
  featured: boolean
}

const projects: Project[] = [
  {
    slug: 'project-01',
    title: 'Project Title One',
    category: ['Branding', 'Identity'],
    year: '2024',
    description: 'A short description of this project visible in the gallery.',
    body: '## Overview\n\nA longer description of the project written in Markdown. Describe the brief, your process, and the outcome.',
    heroImage: '/images/project-01-hero.jpg',
    images: [],
    featured: true,
  },
  {
    slug: 'project-02',
    title: 'Project Title Two',
    category: ['Print'],
    year: '2024',
    description: 'A short description of this project visible in the gallery.',
    body: '## Overview\n\nLonger project description in Markdown.',
    heroImage: '/images/project-02-hero.jpg',
    images: [],
    featured: false,
  },
  {
    slug: 'project-03',
    title: 'Project Title Three',
    category: ['Packaging'],
    year: '2023',
    description: 'A short description of this project visible in the gallery.',
    body: '## Overview\n\nLonger project description in Markdown.',
    heroImage: '/images/project-03-hero.jpg',
    images: [],
    featured: false,
  },
  {
    slug: 'project-04',
    title: 'Project Title Four',
    category: ['Identity'],
    year: '2023',
    description: 'A short description of this project visible in the gallery.',
    body: '## Overview\n\nLonger project description in Markdown.',
    heroImage: '/images/project-04-hero.jpg',
    images: [],
    featured: false,
  },
  {
    slug: 'project-05',
    title: 'Project Title Five',
    category: ['Branding', 'Print'],
    year: '2023',
    description: 'A short description of this project visible in the gallery.',
    body: '## Overview\n\nLonger project description in Markdown.',
    heroImage: '/images/project-05-hero.jpg',
    images: [],
    featured: false,
  },
  {
    slug: 'project-06',
    title: 'Project Title Six',
    category: ['Editorial'],
    year: '2022',
    description: 'A short description of this project visible in the gallery.',
    body: '## Overview\n\nLonger project description in Markdown.',
    heroImage: '/images/project-06-hero.jpg',
    images: [],
    featured: false,
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAllCategories(): string[] {
  const cats = projects.flatMap(p => p.category)
  return Array.from(new Set(cats)).sort()
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex(p => p.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
