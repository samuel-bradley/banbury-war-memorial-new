'use server'

import { deleteRecord } from '@/app/dynamoDb'

export async function POST(_: Request, { params }: { params: { nameInUrl: string } }) {
  try {
    return Response.json(await deleteRecord(params.nameInUrl))
  } catch (error) {
    console.error('Error deleting record:', error)
    return Response.error
  }
}
