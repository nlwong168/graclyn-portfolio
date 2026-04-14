import { siteContent } from '@/lib/content'

describe('siteContent', () => {
  it('has required fields', () => {
    expect(siteContent.name).toBe('Graclyn')
    expect(siteContent.tagline).toBeTruthy()
    expect(siteContent.services.length).toBeGreaterThan(0)
    expect(siteContent.contact).toHaveProperty('email')
  })

  it('has bio as an array with content', () => {
    expect(Array.isArray(siteContent.bio)).toBe(true)
    expect(siteContent.bio.length).toBeGreaterThan(0)
  })

  it('has role defined', () => {
    expect(siteContent.role).toBe('Graphic Designer')
  })

  it('has marqueeItems as an array', () => {
    expect(Array.isArray(siteContent.marqueeItems)).toBe(true)
    expect(siteContent.marqueeItems.length).toBeGreaterThan(0)
  })

  it('has bioPhoto field', () => {
    expect(siteContent).toHaveProperty('bioPhoto')
  })
})
