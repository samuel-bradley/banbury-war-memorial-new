'use server'

import { deleteRecord, MemorialRecord, retrieveRecord, updateRecord } from '@/dynamoDb'

export async function GET(_: Request, { params }: { params: { nameInUrl: string } }) {
  try {
    const record = await retrieveRecord(params.nameInUrl)
    const json = JSON.stringify(record)
    return Response.json(json)
  } catch (error) {
    console.error('Error fetching record:', error)
    return Response.error
  }
}

export async function PUT(request: Request) {
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

export async function DELETE(_: Request, { params }: { params: { nameInUrl: string } }) {
  try {
    return Response.json(await deleteRecord(params.nameInUrl))
  } catch (error) {
    console.error('Error deleting record:', error)
    return Response.error
  }
}

