'use server'

import { DynamoDBClient, PutItemCommand, PutItemCommandInput, QueryCommand, QueryCommandInput, ScanCommand } from "@aws-sdk/client-dynamodb"
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb"

export interface MemorialRecord {
  nameInUrl: string
  nameOnMemorial: string
  memorialPanel: string
  fullName: string
  rank: string
  serviceDetails: string
  ageAtDeath: number
  dateOfDeath: Date
  birthPlace: string
  parents: string
  motherMaidenName: string
  parentsMarriageInfo: string
  wife: string
  wifeMaidenName: string
  marriageDetails: string
  cemetery: string
  additionalInfo: string
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

export async function retrieveRecord(nameInUrl: string): Promise<MemorialRecord | undefined> {
  const input: QueryCommandInput = {
    TableName: tableName,
    KeyConditionExpression: 'nameInUrl = :nameInUrl',
    ExpressionAttributeValues: { ':nameInUrl': { S: nameInUrl }},
  };
  const output = await client.send(new QueryCommand(input))
  return (output.Items) ? (unmarshall(output.Items[0]) as MemorialRecord) : undefined
}

export async function updateRecord(record: MemorialRecord): Promise<boolean> {
  const input: PutItemCommandInput = {
    TableName: tableName,
    Item: marshall(record)
  }
  const output = await client.send(new PutItemCommand(input))
  return output.$metadata.httpStatusCode == 200
}
