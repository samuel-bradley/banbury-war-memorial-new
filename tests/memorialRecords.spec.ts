import { test, expect, Page } from '@playwright/test'

test.describe.configure({ mode: 'serial' })

test.describe('creating, viewing, updating and deleting memorial records', () => {

  let page: Page
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
  })

  test('logging in as admin redirects to admin page', async () => {
    await page.goto('http://localhost:3000/admin/login')
      
    const passwordInput = page.getByPlaceholder('Password')
    await passwordInput.fill('password')

    const logInButton = page.getByText('Log in')
    await logInButton.click()

    await page.waitForURL('http://localhost:3000/admin/records')
  })

  test('creating new record is successful', async () => {
    const createButton = page.getByText('Create')
    await createButton.click()
    await page.waitForURL('http://localhost:3000/admin/records/create')

    const nameInUrlInput = page.getByLabel('Name in URL:')
    await nameInUrlInput.fill('PlaywrightAB')

    const nameOnMemorialInput = page.getByLabel('Name on memorial:')
    await nameOnMemorialInput.fill('Playwright, A B')

    const memorialPanelSelect = page.getByLabel('Memorial panel:')
    await memorialPanelSelect.selectOption('left')
    
    const fullNameInput = page.getByLabel('Full name:')
    await fullNameInput.fill('Albert Bert Playwright')
    
    const rankInput = page.getByLabel('Rank:')
    await rankInput.fill('Private')
    
    const serviceDetailsInput = page.getByLabel('Service details:')
    await serviceDetailsInput.fill('Army')
    
    const ageAtDeathInput = page.getByLabel('Age at death:')
    await ageAtDeathInput.fill('29')
    
    const dateOfDeathInput = page.getByLabel('Date of death:')
    await dateOfDeathInput.fill('1943-02-01')
    
    const placeOfBirthInput = page.getByLabel('Place of birth:')
    await placeOfBirthInput.fill('Banbury')
    
    const parentsInput = page.getByLabel('Parents:')
    await parentsInput.fill('Alice and Bob')
    
    const motherMaidenNameInput = page.getByLabel("Mother's maiden name:")
    await motherMaidenNameInput.fill('Adams')
    
    const parentMarriageDetailsInput = page.getByLabel("Parents' marriage details:")
    await parentMarriageDetailsInput.fill('Married at some point')
    
    const wifeInput = page.getByLabel('Wife:')
    await wifeInput.fill('Mary Smith')
    
    const wifeMaidenNameInput = page.getByLabel("Wife's maiden name:")
    await wifeMaidenNameInput.fill('Jones')
    
    const marriageDetailsInput = page.getByLabel('Marriage details:', { exact: true }) // disambiguate from parents' details
    await marriageDetailsInput.fill('Married 1939')
    
    const cemeteryInput = page.getByLabel('Cemetery:')
    await cemeteryInput.fill('Banbury Cemetery')
    
    const additionalInformationInput = page.getByLabel('Additional information:')
    await additionalInformationInput.fill('<p>Some info</p>')
    
    const saveButton = page.getByText('Save')
    await saveButton.click()

    expect(page.getByText('Record saved.')).toBeVisible()
  })

})
