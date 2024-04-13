'use server'

import { retrieveRecord } from "../../dynamoDb"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const record = await retrieveRecord(params.id);
    const json = JSON.stringify(record)
    return Response.json(json)
  } catch (error) {
    console.error('Error fetching record:', error);
    return Response.error
  }
}
