'use server'

import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"
import { unmarshall } from "@aws-sdk/util-dynamodb"

export interface MemorialRecord {
  id: number
  nameOnList: string
}

const client = new DynamoDBClient({region: 'eu-west-2'})

export async function listRecords(): Promise<MemorialRecord[]> {
  const output = await client.send(
    new ScanCommand({
      TableName: 'banbury-war-memorial'
    })
  )
  return output.Items?.map((item) => {
    const itemWithoutTypes = unmarshall(item)
    return itemWithoutTypes as MemorialRecord
  }) ?? []
}
