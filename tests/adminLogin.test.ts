import { test, expect } from '@playwright/test'

test('viewing admin page while logged out directs to admin login page', async ({ page }) => {
  await page.goto('http://localhost:3000/admin/records')
  await page.waitForURL('http://localhost:3000/admin/login')
})

test('logging in as admin redirects to admin page', async ({ page }) => {
  await page.goto('http://localhost:3000/admin/login')
  
  const passwordInput = page.getByPlaceholder('Password')
  await passwordInput.fill('password')

  const logInButton = page.getByText('Log in')
  await logInButton.click()

  const loggingInButton = page.getByText('Logging in...')
  expect(loggingInButton).toBeDisabled

  await page.waitForURL('http://localhost:3000/admin/records')
})

test('viewing admin login page while already logged in redirects to admin page', async ({ page }) => {
  await page.goto('http://localhost:3000/admin/login')
  
  const passwordInput = page.getByPlaceholder('Password')
  await passwordInput.fill('password')

  const logInButton = page.getByText('Log in')
  await logInButton.click()

  await page.waitForURL('http://localhost:3000/admin/records')

  await page.goto('http://localhost:3000/admin/login')

  await page.waitForURL('http://localhost:3000/admin/records')
})

test('attempting to log in using incorrect password yields an error', async ({ page }) => {
  await page.goto('http://localhost:3000/admin/login')
  
  const passwordInput = page.getByPlaceholder('Password')
  await passwordInput.fill('incorrect')

  const logInButton = page.getByText('Log in')
  await logInButton.click()

  await page.waitForSelector('*:has-text("Incorrect password.")');
  
  await expect(logInButton).toHaveText('Log in')
  expect(logInButton).toBeEnabled
})
