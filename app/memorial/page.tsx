import Link from 'next/link'
import { MemorialRecord, listRecords } from '@/dynamoDb'
import Main from '@/main'

export default async function Memorial() {
  const records = listRecords()
  return (
    <Main pageName="memorial" heading="Memorial" content = {
      <>
        <p className="italic mb-6">
          They shall not grow old as we who are left grow old<br/>
          Age shall not weary them, nor the years condemn<br/>
          At the going down of the sun and in the morning<br/>
          We will remember them.
        </p>
        <ul className="flex flex-col gap-3 items-center">{
          (await records).map((record: MemorialRecord) => {
            return <li key={record.nameInUrl}><Link href={`/memorial/${record.nameInUrl}`} className="no-underline">{record.nameOnMemorial}</Link></li>
          })
        }</ul>
      </>
    }/>
  )
}
