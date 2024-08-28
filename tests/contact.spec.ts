import { test, expect } from '@playwright/test'

test('can submit the contact form', async ({ page }) => {
  await page.goto('http://localhost:3000/contact')

  const fromInput = page.getByPlaceholder('you@somewhere.com')
  await fromInput.fill('someone@example.com')
  
  const subjectInput = page.getByPlaceholder('What\'s this about?')
  await subjectInput.fill('Can I ask a question about a thing?')

  const messageInput = page.getByPlaceholder('What would you like to say?')
  await messageInput.fill('Please tell me about the thing!')

  const sendButton = page.getByText('Send')
  await sendButton.click()

  const sendingButton = page.getByText('Sending...')
  await expect(sendingButton).toBeDisabled()

  const successMessage = page.getByText('Thank you for your message - I\'ll try to get back to you soon.')
  await expect(successMessage).toBeVisible()
});

test('cannot submit the contact form without email', async ({ page }) => {
  await page.goto('http://localhost:3000/contact')
  
  const subjectInput = page.getByPlaceholder('What\'s this about?')
  await subjectInput.fill('Can I ask a question about a thing?')

  const messageInput = page.getByPlaceholder('What would you like to say?')
  await messageInput.fill('Please tell me about the thing!')

  const sendButton = page.getByText('Send')
  await sendButton.click()

  await page.waitForTimeout(100)
  await expect(sendButton).toBeVisible()
});

test('cannot submit the contact form without subject', async ({ page }) => {
  await page.goto('http://localhost:3000/contact')

  const fromInput = page.getByPlaceholder('you@somewhere.com')
  await fromInput.fill('someone@example.com')

  const messageInput = page.getByPlaceholder('What would you like to say?')
  await messageInput.fill('Please tell me about the thing!')

  const sendButton = page.getByText('Send')
  await sendButton.click()

  await page.waitForTimeout(100)
  await expect(sendButton).toBeVisible()
});

test('cannot submit the contact form without message', async ({ page }) => {
  await page.goto('http://localhost:3000/contact')

  const fromInput = page.getByPlaceholder('you@somewhere.com')
  await fromInput.fill('someone@example.com')
  
  const subjectInput = page.getByPlaceholder('What\'s this about?')
  await subjectInput.fill('Can I ask a question about a thing?')

  const sendButton = page.getByText('Send')
  await sendButton.click()

  await page.waitForTimeout(100)
  await expect(sendButton).toBeVisible
});
