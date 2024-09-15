'use server'

import { logIn } from '@/admin/lib/session'
  
export async function authenticate(password: string): Promise<any> {
  try {
    checkPassword(password)
    return logIn()
  } catch (error) {
    if (error && error instanceof Error) {
      return error.message
    }
    throw error
  }
}

function checkPassword(password: string) {
  if (!process.env.ADMIN_PASSWORD) {
    throw new Error('No admin password set.')
  }
  if (password != process.env.ADMIN_PASSWORD) {
    throw new Error('Incorrect password.')
  }
}
