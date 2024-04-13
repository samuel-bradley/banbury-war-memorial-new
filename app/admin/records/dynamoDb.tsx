'use server'

import { DynamoDBClient, GetItemCommand, GetItemCommandInput, QueryCommand, QueryCommandInput, ScanCommand } from "@aws-sdk/client-dynamodb"
import { unmarshall } from "@aws-sdk/util-dynamodb"

export interface MemorialRecord {
  id: string
  name_on_memorial: string
}

const client = new DynamoDBClient({region: 'eu-west-2'})
if (!process.env.ENVIRONMENT) {
  throw new Error("No environment set.")
}
const tableName = `banbury-war-memorial-${process.env.ENVIRONMENT}`

export async function listRecords(): Promise<MemorialRecord[]> {
  const output = await client.send(
    new ScanCommand({
      TableName: tableName
    })
  )
  return output.Items?.map((item) => {
    const itemWithoutTypes = unmarshall(item)
    return itemWithoutTypes as MemorialRecord
  }) ?? []
}

export async function retrieveRecord(id: string): Promise<MemorialRecord | undefined> {
  const input: QueryCommandInput = {
    TableName: tableName,
    KeyConditionExpression: 'id = :id',
    ExpressionAttributeValues: { ':id': { S: id }},
  };
  const output = await client.send(new QueryCommand(input))
  return (output.Items) ? (unmarshall(output.Items[0]) as MemorialRecord) : undefined
}
