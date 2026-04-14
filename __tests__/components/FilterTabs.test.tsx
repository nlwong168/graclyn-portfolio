import { render, screen, fireEvent } from '@testing-library/react'
import FilterTabs from '@/components/FilterTabs'

const categories = ['All', 'Branding', 'Print']
const onChange = jest.fn()

beforeEach(() => onChange.mockClear())

it('renders all category tabs', () => {
  render(<FilterTabs categories={categories} active="All" onChange={onChange} />)
  expect(screen.getByText('All')).toBeInTheDocument()
  expect(screen.getByText('Branding')).toBeInTheDocument()
  expect(screen.getByText('Print')).toBeInTheDocument()
})

it('calls onChange with selected category', () => {
  render(<FilterTabs categories={categories} active="All" onChange={onChange} />)
  fireEvent.click(screen.getByText('Branding'))
  expect(onChange).toHaveBeenCalledWith('Branding')
})

it('marks active tab with aria-pressed', () => {
  render(<FilterTabs categories={categories} active="Branding" onChange={onChange} />)
  expect(screen.getByText('Branding').closest('button')).toHaveAttribute('aria-pressed', 'true')
  expect(screen.getByText('All').closest('button')).toHaveAttribute('aria-pressed', 'false')
})
