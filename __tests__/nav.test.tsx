import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from '@/app/about/page'

describe('About', () => {
  it('marks the current page as current', () => {
    render(<About/>)
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page')
  })
  it('does not mark another page as current', () => {
    render(<About/>)
    expect(screen.getByRole('link', { name: 'Contact' })).not.toHaveAttribute('aria-current', 'page')
  })
})
