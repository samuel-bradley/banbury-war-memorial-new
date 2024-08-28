'use server'

import { DeleteItemCommand, DeleteItemCommandInput, DynamoDBClient, PutItemCommand, PutItemCommandInput, QueryCommand, QueryCommandInput, ScanCommand } from "@aws-sdk/client-dynamodb"
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb"

export interface MemorialRecord {
  nameInUrl: string
  nameOnMemorial: string
  memorialPanel: string
  fullName?: string | null
  rank?: string | null
  serviceDetails?: string | null
  ageAtDeath?: number | null
  dateOfDeath?: Date | null
  placeOfBirth?: string | null
  parents?: string | null
  motherMaidenName?: string | null
  parentsMarriageDetails?: string | null
  wife?: string | null
  wifeMaidenName?: string | null
  marriageDetails?: string | null
  cemetery?: string | null
  additionalInfo?: string | null
}

if (!process.env.AWS_REGION) throw new Error("No AWS region set.")
if (!process.env.ENVIRONMENT) throw new Error("No environment set.")

const client = new DynamoDBClient({region: process.env.AWS_REGION})
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
    Item: marshall(record, {convertEmptyValues: true, removeUndefinedValues: true})
  }
  const output = await client.send(new PutItemCommand(input))
  return output.$metadata.httpStatusCode == 200
}

export async function deleteRecord(nameInUrl: string): Promise<boolean> {
  const input: DeleteItemCommandInput = {
    TableName: tableName,
    Key: { 'nameInUrl': { S: nameInUrl }}
  }
  const output = await client.send(new DeleteItemCommand(input))
  return output.$metadata.httpStatusCode == 200
}
