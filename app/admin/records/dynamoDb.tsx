'use server'

import { DynamoDBClient, PutItemCommand, PutItemCommandInput, QueryCommand, QueryCommandInput, ScanCommand, UpdateItemCommand, UpdateItemCommandInput } from "@aws-sdk/client-dynamodb"
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb"

export interface MemorialRecord {
  nameInUrl: string
  nameOnMemorial: string
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
  console.log('Retrieving record ' + nameInUrl)
  const input: QueryCommandInput = {
    TableName: tableName,
    KeyConditionExpression: 'nameInUrl = :nameInUrl',
    ExpressionAttributeValues: { ':nameInUrl': { S: nameInUrl }},
  };
  const output = await client.send(new QueryCommand(input))
  return (output.Items) ? (unmarshall(output.Items[0]) as MemorialRecord) : undefined
}

export async function updateRecord(record: MemorialRecord): Promise<boolean> {
  console.log('Updating record ' + JSON.stringify(record))
  /*const input: UpdateItemCommandInput = {
    TableName: tableName,
    Key: { 'nameInUrl': { S: record.nameInUrl }},
    UpdateExpression: `SET nameOnMemorial = :nameOnMemorial`,
    ExpressionAttributeValues: {'nameOnMemorial': { S: record.nameOnMemorial} }
  }*/
  const input: PutItemCommandInput = {
    TableName: tableName,
    Item: marshall(record)
  }
  console.log("Input:")
  console.log(input)
  const output = await client.send(new PutItemCommand(input))
  return output.$metadata.httpStatusCode == 200
}
