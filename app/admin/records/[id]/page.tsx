'use client'

import Main from "@/app/main";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MemorialRecord } from "../dynamoDb";

export default function Page({ params }: { params: { id: string } }) {
  const [record, setData] = useState<MemorialRecord>()
  const [isLoading, setLoading] = useState(true)
  const [errorMessage, setMessage] = useState<string>('')
 
  useEffect(() => {
    fetch(`/admin/records/retrieve/${params.id}`)
      .then((res: Response) => res.json())
      .then((json) => {
        const record = JSON.parse(json) as MemorialRecord
        setData(record)
        setLoading(false)
      })
      .catch((error: Error) => {
        setLoading(false)
        setMessage(error.message)
      })
  }, [])
  
  return (
    <Main pageName="records" heading={params.id} content = {
      <>
        { isLoading && (<p>Loading...</p>) }
        { errorMessage && (<p>{errorMessage}</p>) }
        { !isLoading && (
          <form>
            <div className="border-b border-gray-900/10 pb-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="nameOnMemorial" className="block leading-6 mb-1">Name on memorial:</label>
                  <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
                    <input type="text" required id="nameOnMemorial" name="nameOnMemorial" value={record?.name_on_memorial} className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500" placeholder="Surname, A B"/>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
        <p className="mt-6 text-center"><Link href="/admin/records">Back to Records</Link></p>
      </>
    }/>
  )
}
