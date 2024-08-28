'use server'

import { retrieveRecord } from '../../../dynamoDb'
import RecordForm from '../recordForm'

export default async function Page({ params }: { params: { nameInUrl: string } }) {
  const record = await retrieveRecord(params.nameInUrl)
  if (record) return <RecordForm record={record}/>
  else return 'Not found' // TODO proper error page
}
