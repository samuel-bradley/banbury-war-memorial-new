import '@testing-library/jest-dom'
import { render, fireEvent, waitFor } from '@testing-library/react'
import Contact from '@/app/contact/page'
import sendEmail from '../app/contact/sendEmail';

jest.mock('../app/submit-button', () => () => <button type="submit"/>)
jest.mock('../app/contact/sendEmail', () => ({
  __esModule: true,
  default: jest.fn((_: FormData) => { return { message: 'Message sent' } })
}));

describe('The contact page', () => {
  it('renders the form', () => {
    const { queryByRole } = render(<Contact/>)
    expect(queryByRole('form')).toBeInTheDocument
  }),
  it('marks the current page as current', () => {
    const { getByRole } = render(<Contact/>)
    expect(getByRole('link', { name: 'Contact' })).toHaveAttribute('aria-current', 'page')
  }),
  it('sends an email and returns a message when the form is submitted', async () => {
    const { getByLabelText, getByRole, queryByRole, findByText } = render(<Contact/>)

    fireEvent.change(getByLabelText('Your email address:'), { target: { value: 'test@example.com' } })
    fireEvent.change(getByLabelText('Subject:'), { target: { value: 'Test subject' } })
    fireEvent.change(getByLabelText('Message:'), { target: { value: 'Test message' } })
    fireEvent.click(getByRole('button'))
    await waitFor(() => findByText('Message sent'))

    expect(sendEmail).toHaveBeenCalledWith('test@example.com', 'Test subject', 'Test message')
    expect(queryByRole('form')).not.toBeInTheDocument
  })
})
