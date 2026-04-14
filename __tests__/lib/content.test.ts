import { siteContent } from '@/lib/content'

it('siteContent has required fields', () => {
  expect(siteContent.name).toBe('Graclyn')
  expect(siteContent.tagline).toBeTruthy()
  expect(siteContent.services.length).toBeGreaterThan(0)
  expect(siteContent.contact).toHaveProperty('email')
})
