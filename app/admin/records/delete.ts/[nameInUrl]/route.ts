'use server'

import { deleteRecord } from "@/app/dynamoDb";

export async function POST(_: Request, { params }: { params: { nameInUrl: string } }) {
  try {
    if (await deleteRecord(params.nameInUrl)) {
      return Response.redirect(new URL('/admin/records'))
    } else {
      return Response.json(false)
    }
  } catch (error) {
    console.error('Error deleting record:', error);
    return Response.error
  }
}
