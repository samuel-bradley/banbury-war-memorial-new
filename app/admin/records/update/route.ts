'use server'

import { MemorialRecord, updateRecord } from '@/dynamoDb'

export async function POST(request: Request) {
  try {
    const record = await request.json() as MemorialRecord
    const result: boolean = await updateRecord(record)
    if (!result) throw new Error('Unknown error')
    return Response.json(true)
  } catch (error) {
    console.error('Error updating record:', error)
    return Response.error
  }
}
