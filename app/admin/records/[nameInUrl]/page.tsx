'use server'

import { retrieveRecord } from '@/lib/dynamoDb'
import RecordForm from '@/admin/components/recordForm'

export default async function Page({ params }: { params: Promise<{ nameInUrl: string }> }) {
  const { nameInUrl } = await params
  const record = await retrieveRecord(nameInUrl)
  if (record) return <RecordForm record={record}/>
  else return 'Not found' // TODO proper error page
}
