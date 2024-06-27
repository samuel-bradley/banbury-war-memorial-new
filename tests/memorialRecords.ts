import { test, expect } from '@playwright/test'

test.describe.serial('creating, viewing, updating and deleting memorial records', () => {

  test('logging in as admin redirects to admin page', async ({ page }) => {
    await page.goto('http://localhost:3000/admin/login')
      
    const passwordInput = page.getByPlaceholder('Password')
    await passwordInput.fill('password')
  
    const logInButton = page.getByText('Log in')
    await logInButton.click()
  
    await page.waitForURL('http://localhost:3000/admin/records')
  })
})
