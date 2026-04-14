import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, useTheme } from '@/context/ThemeContext'

function Toggle() {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>{theme}</button>
}

beforeEach(() => {
  localStorage.clear()
})

it('defaults to light theme', () => {
  render(<ThemeProvider><Toggle /></ThemeProvider>)
  expect(screen.getByRole('button')).toHaveTextContent('light')
})

it('toggles to dark on click', () => {
  render(<ThemeProvider><Toggle /></ThemeProvider>)
  fireEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('button')).toHaveTextContent('dark')
})

it('toggles back to light on second click', () => {
  render(<ThemeProvider><Toggle /></ThemeProvider>)
  fireEvent.click(screen.getByRole('button'))
  fireEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('button')).toHaveTextContent('light')
})
