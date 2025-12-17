'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import CryptoJS from 'crypto-js'

export async function logIn() {
  const sessionData = JSON.stringify({ isLoggedIn: true })
  const encryptedSessionData = encrypt(sessionData)
  ;(await cookies()).set('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60, // One hour
    path: '/',
  })
  redirect('/admin/records')
}

export async function isLoggedIn() {
  const sessionCookie = (await cookies()).get('session')?.value
  if (sessionCookie) {
    const session = JSON.parse(decrypt(sessionCookie))
    return session.isLoggedIn
  }
  return false
}

function encrypt(data: string) {
  if (!process.env.ENCRYPTION_KEY) throw new Error('No encryption key set.')
  return CryptoJS.AES.encrypt(data, process.env.ENCRYPTION_KEY).toString()
}

function decrypt(data: string) {
  if (!process.env.ENCRYPTION_KEY) throw new Error('No encryption key set.')
  const bytes = CryptoJS.AES.decrypt(data, process.env.ENCRYPTION_KEY)
  return bytes.toString(CryptoJS.enc.Utf8)
}
