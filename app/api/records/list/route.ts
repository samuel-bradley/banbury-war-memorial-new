'use server'

import { listRecords } from '@/dynamoDb'

export async function GET() {
  try {
    const records = await listRecords()
    const sortedRecords = records.sort((a, b) => a.nameOnMemorial < b.nameOnMemorial ? -1 : 1)
    const json = JSON.stringify(sortedRecords)
    return Response.json(json)
  } catch (error) {
    console.error('Error fetching records:', error)
    return Response.error
  }
}
