'use server'

import { listRecords } from '@/lib/dynamoDb'

export async function GET(): Promise<Response> {
  try {
    const records = await listRecords()
    const sortedRecords = records.sort((a, b) => a.nameOnMemorial < b.nameOnMemorial ? -1 : 1)
    return Response.json(JSON.stringify(sortedRecords), { status: 200 })
  } catch (error) {
    console.error('Error fetching records:', error)
    return Response.json({ error: 'Failed to list records.' }, { status: 500 })
  }
}
