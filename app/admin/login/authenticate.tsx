'use server'

import { logIn } from './session'
  
export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    checkPassword(formData)
    return logIn()
  } catch (error) {
    if (error && error instanceof Error) {
      return error.message
    }
    throw error
  }
}

function checkPassword(formData: FormData) {
  if (!process.env.ADMIN_PASSWORD) {
    throw new Error("No admin password set.")
  }
  if (formData.get("password") != process.env.ADMIN_PASSWORD) {
    throw new Error("Incorrect password.")
  }
}
