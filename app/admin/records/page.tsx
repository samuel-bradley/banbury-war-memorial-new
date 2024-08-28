'use client'

import React, { useState, useEffect } from 'react'
import Main from '../../main'
import { MemorialRecord } from '../../dynamoDb'
import Link from 'next/link'

export default function Page() {
  const [records, setData] = useState(() => [] as MemorialRecord[])
  const [isLoading, setLoading] = useState(true)
  const [errorMessage, setMessage] = useState<string>('')
 
  useEffect(() => {
    fetch('/admin/records/list')
      .then((res: Response) => res.json())
      .then((json) => {
        const records = JSON.parse(json) as MemorialRecord[]
        setData(records)
        setLoading(false)
      })
      .catch((error: Error) => {
        setLoading(false)
        setMessage(error.message)
      })
  }, [])

  return (
    <Main pageName="records" heading="Records" content = {
      <>
        <div className="mb-6">
          { isLoading && (<p>Loading...</p>) }
          { !records && (<p>No records</p>) }
          { errorMessage && (<p>{errorMessage}</p>) }
          { !isLoading && records && (
            <ul>{
              records.map((record: MemorialRecord) => {
                return <li key={record.nameInUrl}><Link href={`/admin/records/${record.nameInUrl}`}>{record.nameInUrl}</Link></li>
              })
            }</ul>
          )}
        </div>
        <a href="/admin/records/create" className="rounded-md bg-gray-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-gray-500 disabled:hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Create</a>
      </>
    }/>
  )
}
