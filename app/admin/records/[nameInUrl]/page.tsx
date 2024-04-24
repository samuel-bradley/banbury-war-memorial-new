'use client'

import Main from "@/app/main";
import Link from "next/link";
import { FormEvent, useEffect, useState, useTransition } from "react";
import { MemorialRecord } from "../../../dynamoDb";
import SubmitButton from "@/app/submit-button";

export default function Page({ params }: { params: { nameInUrl: string } }) {
  const [record, setData] = useState<MemorialRecord>()
  const [isLoading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [isPending, startTransition] = useTransition()
 
  useEffect(() => {
    fetch(`/admin/records/retrieve/${params.nameInUrl}`)
      .then((res: Response) => res.json())
      .then((json) => {
        const record = JSON.parse(json) as MemorialRecord
        setData(record)
        setLoading(false)
      })
      .catch((error: Error) => {
        setLoading(false)
        setErrorMessage(error.message)
      })
  }, [])
  
  async function onSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    startTransition(async () => {
      try {
        const formData = new FormData(event.currentTarget)
        const postBody = JSON.stringify(Object.fromEntries(formData.entries()))
        const response = await fetch('/admin/records/update', {
          method: 'POST',
          body: postBody,
        })
        if (!response.ok) throw new Error('Failed to save.')
        setSuccessMessage('Record saved.')
        setErrorMessage('')
      } catch (error) {
        if (error instanceof Error) setErrorMessage(error.message)
      }
    })
  }
  
  return (
    <Main pageName="records" heading={params.nameInUrl} content = {
      <>
        { isLoading && (<p>Loading...</p>) }
        { errorMessage && (<p>{errorMessage}</p>) }
        { successMessage && (<p>{successMessage}</p>) }
        { !isLoading && (
          <form onSubmit={onSave}>
            <input type="hidden" name="nameInUrl" value={record?.nameInUrl}/>
            <div className="border-b border-gray-900/10 pb-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="nameOnMemorial" className="block leading-6 mb-1">Name on memorial:</label>
                  <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
                    <input type="text" required id="nameOnMemorial" name="nameOnMemorial" defaultValue={record?.nameOnMemorial} className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500" placeholder="Surname, A B"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <SubmitButton label="Save" isPending={isPending} pendingLabel="Saving..." classNames="rounded-md bg-gray-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-gray-400 disabled:hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"/>
            </div>
          </form>
        )}
        <p className="mt-6 text-center"><Link href="/admin/records">Back to Records</Link></p>
      </>
    }/>
  )
}
