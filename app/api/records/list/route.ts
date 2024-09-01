'use server'

import { listRecords } from '@/dynamoDb'

export async function GET() {
  try {
    const records = await listRecords()
    const json = JSON.stringify(records)
    return Response.json(json)
  } catch (error) {
    console.error('Error fetching records:', error)
    return Response.error
  }
}
