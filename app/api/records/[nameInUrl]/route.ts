'use server'

import { deleteRecord, MemorialRecord, retrieveRecord, updateRecord } from '@/lib/dynamoDb'

export async function GET(_: Request, { params }: { params: Promise<{ nameInUrl: string }> }): Promise<Response> {
  const { nameInUrl } = await params
  return retrieveRecord(nameInUrl)
    .then((record) => {
      return Response.json(JSON.stringify(record), { status: 200 })
    })
    .catch((error) => {
      console.error('Error retrieving record:', error)
      return Response.json(JSON.stringify({ error: 'Failed to retrieve record.' }), { status: 404 })
    })
}

export async function PUT(request: Request) {
  try {
    const record = await request.json() as MemorialRecord
    const result: boolean = await updateRecord(record)
    if (!result) throw new Error('Unknown error')
      return new Response('true', { status: 200 })
  } catch (error) {
    console.error('Error updating record:', error)
    return new Response('Failed to update record.', { status: 500 })
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ nameInUrl: string }> }) {
  try {
    const { nameInUrl } = await params
    return Response.json(await deleteRecord(nameInUrl))
  } catch (error) {
    console.error('Error deleting record:', error)
    return new Response('Failed to delete record.', { status: 500 })
  }
}

