import { getProjectBySlug, getAllProjects, getAllCategories, getAdjacentProjects } from '@/lib/projects'

describe('getProjectBySlug', () => {
  it('returns the project with matching slug', () => {
    const project = getProjectBySlug('project-01')
    expect(project).toBeDefined()
    expect(project?.slug).toBe('project-01')
  })

  it('returns undefined for unknown slug', () => {
    expect(getProjectBySlug('not-a-project')).toBeUndefined()
  })
})

describe('getAllProjects', () => {
  it('returns exactly 6 projects', () => {
    expect(getAllProjects()).toHaveLength(6)
  })

  it('every project has required fields', () => {
    getAllProjects().forEach(p => {
      expect(p.slug).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.category.length).toBeGreaterThan(0)
      expect(p.heroImage).toBeTruthy()
    })
  })
})

describe('getAllCategories', () => {
  it('returns unique categories across all projects', () => {
    const cats = getAllCategories()
    expect(cats.length).toBeGreaterThan(0)
    expect(new Set(cats).size).toBe(cats.length) // no duplicates
  })

  it('returns sorted results', () => {
    const cats = getAllCategories()
    const sorted = [...cats].sort()
    expect(cats).toEqual(sorted)
  })
})

describe('getAdjacentProjects', () => {
  it('returns prev and next for a middle project', () => {
    const projects = getAllProjects()
    const middle = projects[2]
    const { prev, next } = getAdjacentProjects(middle.slug)
    expect(prev?.slug).toBe(projects[1].slug)
    expect(next?.slug).toBe(projects[3].slug)
  })

  it('returns null prev for the first project', () => {
    const first = getAllProjects()[0]
    expect(getAdjacentProjects(first.slug).prev).toBeNull()
  })

  it('returns null next for the last project', () => {
    const projects = getAllProjects()
    const last = projects[projects.length - 1]
    expect(getAdjacentProjects(last.slug).next).toBeNull()
  })

  it('returns null prev and next for unknown slug', () => {
    const { prev, next } = getAdjacentProjects('unknown-slug')
    expect(prev).toBeNull()
    expect(next).toBeNull()
  })
})
