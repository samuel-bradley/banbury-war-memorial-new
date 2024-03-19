// See https://conermurphy.com/blog/typing-dynamodb-data-typescript-aws-sdk

'use server'

import AWS from "aws-sdk"
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { ScanCommandOutput } from "@aws-sdk/lib-dynamodb";

AWS.config.update({ region: "eu-west-2" })

const client = new DynamoDBClient({});

interface Record {
  id: number
  nameOnList: string
}

export async function listRecords() {
  return (await client.send(
    new ScanCommand({
      TableName: "banbury_war_memorial"
    })
  )) as IScanCommandOutput<Item[]>;
}

export type IScanCommandOutput<T> = Omit<ScanCommandOutput, "Items"> & {
  Items?: T;
}

export type Item = {
  prop1: string,
}
