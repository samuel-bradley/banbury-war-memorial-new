'use client'

import Main from "@/app/main";
import Link from "next/link";
import { FormEvent, useEffect, useState, useTransition } from "react";
import { MemorialRecord } from "../../../dynamoDb";
import SubmitButton from "@/app/submit-button";
import { Input, Select } from "./input";

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
  
const memorialPanelOptions = [
  { value: 'none', label: 'none' },
  { value: 'left', label: 'left' },
  { value: 'centre', label: 'centre' },
  { value: 'right', label: 'right' }
]

  return (
    <Main pageName={params.nameInUrl} heading={params.nameInUrl} content = {
      <>
        { isLoading && (<p>Loading...</p>) }
        { errorMessage && (<p>{errorMessage}</p>) }
        { successMessage && (<p>{successMessage}</p>) }
        { !isLoading && (
          <form onSubmit={onSave}>
            <input type="hidden" name="nameInUrl" value={record?.nameInUrl}/>
            <div className="border-b border-gray-900/10 pb-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-10">
                <Input type="text" label="Name on memorial:" nameAndId="nameOnMemorial" value={record?.nameOnMemorial} placeholder="Surname, A B" required={true}/>
                <Select label="Memorial panel:" nameAndId="memorialPanel" options={memorialPanelOptions} selectedValue={record?.memorialPanel} required={true}/>
                <Input type="text" label="Full name:" nameAndId="fullName" value={record?.fullName} placeholder="John Smith" required={true}/>
                <Input type="text" label="Rank:" nameAndId="rank" value={record?.rank} placeholder="Captain" required={true}/>
                <Input type="text" label="Service details:" nameAndId="serviceDetails" value={record?.serviceDetails} placeholder="Service number and branch" required={true}/>
                <Input type="number" label="Age at death:" nameAndId="ageAtDeath" value={record?.ageAtDeath} placeholder="42" required={true}/>
                <Input type="date" label="Date of death:" nameAndId="dateOfDeath" value={record?.dateOfDeath && new Date(record?.dateOfDeath).toISOString().split('T')[0]} placeholder="" required={true}/>
                <Input type="text" label="Place of birth:" nameAndId="placeOfBirth" value={record?.placeOfBirth} placeholder="New York, USA" required={true}/>
                <Input type="text" label="Parents:" nameAndId="parents" value={record?.parents} placeholder="John Smith and Jane Smith" required={true}/>
                <Input type="text" label="Mother's maiden name:" nameAndId="motherMaidenName" value={record?.motherMaidenName} placeholder="Jones" required={true}/>
                <Input type="text" label="Parents' marriage details:" nameAndId="parentsMarriageDetails" value={record?.parentsMarriageDetails} placeholder="Date and place of marriage" required={true}/>
                <Input type="text" label="Wife:" nameAndId="wife" value={record?.wife} placeholder="Mary Smith" required={true}/>
                <Input type="text" label="Wife's maiden name:" nameAndId="wifeMaidenName" value={record?.wifeMaidenName} placeholder="Johnson" required={true}/>
                <Input type="text" label="Marriage details:" nameAndId="marriageDetails" value={record?.marriageDetails} placeholder="Date and place of marriage" required={true}/>
                <Input type="text" label="Cemetery:" nameAndId="cemetery" value={record?.cemetery} placeholder="XYZ Cemetery" required={true}/>
                <Input type="text" label="Additional information:" nameAndId="additionalInfo" value={record?.additionalInfo} placeholder="Any other information" required={true}/>
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
