'use server'

import { deleteRecord } from "@/app/dynamoDb";

export async function GET(_: Request, { params }: { params: { nameInUrl: string } }) {
  try {
    const deleted: boolean = await deleteRecord(params.nameInUrl);
    const json = JSON.stringify(deleted)
    return Response.json(json)
  } catch (error) {
    console.error('Error deleting record:', error);
    return Response.error
  }
}
