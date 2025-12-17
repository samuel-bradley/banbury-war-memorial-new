import { test, expect, Page } from '@playwright/test'

test.describe.configure({ mode: 'serial' })

test.describe('creating, viewing, updating and deleting memorial records', () => {

  let page: Page
  let recordName: string
  let nameOnMemorial: string
  
  test.beforeAll(async ({ browser }, testInfo) => {
    page = await browser.newPage()
    const browserName = testInfo.project.name
    recordName = `PlaywrightAB-${browserName}`
    nameOnMemorial = `Playwright, A B (${browserName})`
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
    await nameInUrlInput.fill(recordName)

    const nameOnMemorialInput = page.getByLabel('Name on memorial:')
    await nameOnMemorialInput.fill(nameOnMemorial)

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
    await wifeInput.fill('Mary')
    
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

    await expect(page.getByText('Record saved.')).toBeVisible()
  })

  test('created record is visible and has correct values on public page', async () => {
    await page.goto(`http://localhost:3000/memorial/${recordName}`)
    await page.waitForSelector('main h1', { state: 'visible' })
    await expect(page.getByRole('heading', { name: nameOnMemorial })).toBeVisible()

    await expect(page.getByText('Memorial panel: left')).toBeVisible()
    await expect(page.getByText('Full name: Albert Bert Playwright')).toBeVisible()
    await expect(page.getByText('Rank: Private')).toBeVisible()
    await expect(page.getByText('Service details: Army')).toBeVisible()
    await expect(page.getByText('Age at death: 29')).toBeVisible()
    await expect(page.getByText('Date of death: 01/02/1943')).toBeVisible()
    await expect(page.getByText('Place of birth: Banbury')).toBeVisible()
    await expect(page.getByText('Parents: Alice and Bob')).toBeVisible()
    await expect(page.getByText("Mother's maiden name: Adams")).toBeVisible()
    await expect(page.getByText("Parents' marriage details: Married at some point")).toBeVisible()
    await expect(page.getByText('Wife: Mary')).toBeVisible()
    await expect(page.getByText("Wife's maiden name: Jones")).toBeVisible()
    await expect(page.getByText('Marriage details: Married 1939')).toBeVisible()
    await expect(page.getByText('Cemetery: Banbury Cemetery')).toBeVisible()
    // Check HTML is not displayed raw
    const additionalInformation = page.locator('li:has-text("Additional information:") div p')
    await expect(additionalInformation).toHaveText('Some info')
  })

  test('updating existing record is successful', async () => {
    await page.goto('http://localhost:3000/admin/records')
    await page.waitForSelector('ul', { state: 'visible' })

    const recordLink = page.getByText(recordName)
    await recordLink.click()
    await page.waitForURL(`http://localhost:3000/admin/records/${recordName}`)
    await page.waitForSelector('main h1', { state: 'visible' })

    const nameOnMemorialInput = page.getByLabel('Name on memorial:')
    nameOnMemorial = `${nameOnMemorial} C`
    await nameOnMemorialInput.fill(nameOnMemorial)

    const memorialPanelSelect = page.getByLabel('Memorial panel:')
    await memorialPanelSelect.selectOption('right')
    
    const fullNameInput = page.getByLabel('Full name:')
    await fullNameInput.fill('Albert Bert Charles Playwright')
    
    const rankInput = page.getByLabel('Rank:')
    await rankInput.fill('Corporal')
    
    const serviceDetailsInput = page.getByLabel('Service details:')
    await serviceDetailsInput.fill('Navy')
    
    const ageAtDeathInput = page.getByLabel('Age at death:')
    await ageAtDeathInput.fill('30')
    
    const dateOfDeathInput = page.getByLabel('Date of death:')
    await dateOfDeathInput.fill('1943-02-02')
    
    const placeOfBirthInput = page.getByLabel('Place of birth:')
    await placeOfBirthInput.fill('Oxford')
    
    const parentsInput = page.getByLabel('Parents:')
    await parentsInput.fill('Bob and Alice')
    
    const motherMaidenNameInput = page.getByLabel("Mother's maiden name:")
    await motherMaidenNameInput.fill('Bradford')
    
    const parentMarriageDetailsInput = page.getByLabel("Parents' marriage details:")
    await parentMarriageDetailsInput.fill('Married sometime')
    
    const wifeInput = page.getByLabel('Wife:')
    await wifeInput.fill('Elizabeth')
    
    const wifeMaidenNameInput = page.getByLabel("Wife's maiden name:")
    await wifeMaidenNameInput.fill('Brown')
    
    const marriageDetailsInput = page.getByLabel('Marriage details:', { exact: true }) // disambiguate from parents' details
    await marriageDetailsInput.fill('Married 1940')
    
    const cemeteryInput = page.getByLabel('Cemetery:')
    await cemeteryInput.fill('Oxford Cemetery')
    
    const additionalInformationInput = page.getByLabel('Additional information:')
    await additionalInformationInput.fill('<p>No more info</p>')
    
    const saveButton = page.getByText('Save')
    await saveButton.click()

    await expect(page.getByText('Record saved.')).toBeVisible()
  })

  test('updated record is visible and has correct values on public page', async () => {
    await page.goto(`http://localhost:3000/memorial/${recordName}`)
    await page.waitForSelector('main h1', { state: 'visible' })
    await expect(page.getByRole('heading', { name: nameOnMemorial })).toBeVisible()

    await expect(page.getByText('Memorial panel: right')).toBeVisible()
    await expect(page.getByText('Full name: Albert Bert Charles Playwright')).toBeVisible()
    await expect(page.getByText('Rank: Corporal')).toBeVisible()
    await expect(page.getByText('Service details: Navy')).toBeVisible()
    await expect(page.getByText('Age at death: 30')).toBeVisible()
    await expect(page.getByText('Date of death: 02/02/1943')).toBeVisible()
    await expect(page.getByText('Place of birth: Oxford')).toBeVisible()
    await expect(page.getByText('Parents: Bob and Alice')).toBeVisible()
    await expect(page.getByText("Mother's maiden name: Bradford")).toBeVisible()
    await expect(page.getByText("Parents' marriage details: Married sometime")).toBeVisible()
    await expect(page.getByText('Wife: Elizabeth')).toBeVisible()
    await expect(page.getByText("Wife's maiden name: Brown")).toBeVisible()
    await expect(page.getByText('Marriage details: Married 1940')).toBeVisible()
    await expect(page.getByText('Cemetery: Oxford Cemetery')).toBeVisible()
    // Check HTML is not displayed raw
    const additionalInformation = page.locator('li:has-text("Additional information:") div p')
    await expect(additionalInformation).toHaveText('No more info')
  })

  test('deleting record is successful', async () => {
    await page.goto('http://localhost:3000/admin/records')
    await page.waitForSelector('ul', { state: 'visible' })

    const recordLink = page.getByText(recordName)
    await recordLink.click()
    await page.waitForURL(`http://localhost:3000/admin/records/${recordName}`)
    await page.waitForSelector('main h1', { state: 'visible' })
    
    const deleteButton = page.getByText('Delete')
    await deleteButton.click()
    
    await page.waitForURL('http://localhost:3000/admin/records')
    await expect(page.getByText(recordName)).not.toBeVisible()
  })

  test('viewing deleted record gives a 404 page', async () => {
    await page.goto(`http://localhost:3000/memorial/${recordName}`)
    await page.waitForSelector('main', { state: 'visible' })
    await expect(page.getByText(/Sorry, but the page you tried to access was not found/)).toBeVisible()
  })

})

test.describe('creating, viewing and deleting minimal memorial records', () => {

  let page: Page
  let recordName: string
  let nameOnMemorial: string
  
  test.beforeAll(async ({ browser }, testInfo) => {
    page = await browser.newPage()
    const browserName = testInfo.project.name
    recordName = `PlaywrightAB-minimal-${browserName}`
    nameOnMemorial = `Playwright, A B (minimal ${browserName})`
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
    await nameInUrlInput.fill(recordName)

    const nameOnMemorialInput = page.getByLabel('Name on memorial:')
    await nameOnMemorialInput.fill(nameOnMemorial)
    
    const saveButton = page.getByText('Save')
    await saveButton.click()

    await expect(page.getByText('Record saved.')).toBeVisible()
  })

  test('created record is visible and has correct values on public page', async () => {
    await page.goto(`http://localhost:3000/memorial/${recordName}`)
    await page.waitForSelector('main h1', { state: 'visible' })
    await expect(page.getByRole('heading', { name: nameOnMemorial })).toBeVisible()

    await expect(page.getByText('Memorial panel: none')).toBeVisible()
    await expect(page.getByText('Full name: unknown')).toBeVisible()
    await expect(page.getByText('Rank: unknown')).toBeVisible()
    await expect(page.getByText('Service details: unknown')).toBeVisible()
    await expect(page.getByText('Age at death: unknown')).toBeVisible()
    await expect(page.getByText('Date of death: unknown')).toBeVisible()
    await expect(page.getByText('Place of birth: unknown')).toBeVisible()
    await expect(page.getByText('Parents: unknown')).toBeVisible()
    await expect(page.getByText("Mother's maiden name: unknown")).toBeVisible()
    await expect(page.getByText("Parents' marriage details: unknown", {exact: true})).toBeVisible()
    await expect(page.getByText('Wife: unknown')).toBeVisible()
    await expect(page.getByText("Wife's maiden name: unknown")).toBeVisible()
    await expect(page.getByText('Marriage details: unknown', {exact: true})).toBeVisible()
    await expect(page.getByText('Cemetery: unknown')).toBeVisible()
  })

  test('deleting record is successful', async () => {
    await page.goto('http://localhost:3000/admin/records')
    await page.waitForSelector('ul', { state: 'visible' })

    const recordLink = page.getByText(recordName)
    await recordLink.click()
    await page.waitForURL(`http://localhost:3000/admin/records/${recordName}`)
    await page.waitForSelector('main h1', { state: 'visible' })
    
    const deleteButton = page.getByText('Delete')
    await deleteButton.click()
    
    await page.waitForURL('http://localhost:3000/admin/records')
    await expect(page.getByText('PlaywrightAB')).not.toBeVisible()
  })

})
