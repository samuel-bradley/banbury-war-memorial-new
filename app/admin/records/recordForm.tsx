'use client'

import Main from '@/app/main'
import { Input, Select, Textarea } from './input'
import { FormEvent, useState, useTransition } from 'react'
import { MemorialRecord } from '@/app/dynamoDb'
import SubmitButton from '@/app/submit-button'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

interface RecordFormProps {
  record: MemorialRecord | null
}

export default function RecordForm(props: RecordFormProps) {
  const record = props.record
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

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

  const handleDelete = async () => {
    const result = await fetch(`/admin/records/delete/${record?.nameInUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const wasDeleted = JSON.parse(await result.json())
    if (wasDeleted) {
      router.push('/admin/records')
    } else {
      setErrorMessage('Failed to delete.')
    }
  }
  
  const memorialPanelOptions = [
    { value: 'none', label: 'none' },
    { value: 'left', label: 'left' },
    { value: 'centre', label: 'centre' },
    { value: 'right', label: 'right' }
  ]

  const dateOfDeathValue = (record?: MemorialRecord | null): string => {
    if (!record?.dateOfDeath) return ''
    return new Date(record?.dateOfDeath).toISOString().split('T')[0]
  }

  return (
    <Main pageName={record?.nameInUrl ?? 'Create record'} heading={record?.nameInUrl ?? 'Create record'} content = {
      <>
        { errorMessage && (<p>{errorMessage}</p>) }
        { successMessage && (<p>{successMessage}</p>) }
        <form onSubmit={onSave}>
          <div className="border-b border-gray-900/10 pb-6">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-10">
              { record ? (
                <input type="hidden" name="nameInUrl" value={record?.nameInUrl}/>
              ) : (
                <Input type="text" label="Name in URL:" nameAndId="nameInUrl" value="" placeholder="SurnameAB" required={true}/>
              )}
              <Input type="text" label="Name on memorial:" nameAndId="nameOnMemorial" value={record?.nameOnMemorial} placeholder="Surname, A B" required={true}/>
              <Select label="Memorial panel:" nameAndId="memorialPanel" options={memorialPanelOptions} selectedValue={record?.memorialPanel} required={true}/>
              <Input type="text" label="Full name:" nameAndId="fullName" value={record?.fullName ?? ''} placeholder="John Smith" required={false}/>
              <Input type="text" label="Rank:" nameAndId="rank" value={record?.rank ?? ''} placeholder="Captain" required={false}/>
              <Input type="text" label="Service details:" nameAndId="serviceDetails" value={record?.serviceDetails ?? ''} placeholder="Service number and branch" required={false}/>
              <Input type="number" label="Age at death:" nameAndId="ageAtDeath" value={record?.ageAtDeath ?? ''} placeholder="42" required={false}/>
              <Input type="date" label="Date of death:" nameAndId="dateOfDeath" value={dateOfDeathValue(record)} placeholder="" required={false}/>
              <Input type="text" label="Place of birth:" nameAndId="placeOfBirth" value={record?.placeOfBirth ?? ''} placeholder="New York, USA" required={false}/>
              <Input type="text" label="Parents:" nameAndId="parents" value={record?.parents ?? ''} placeholder="John Smith and Jane Smith" required={false}/>
              <Input type="text" label="Mother's maiden name:" nameAndId="motherMaidenName" value={record?.motherMaidenName ?? ''} placeholder="Jones" required={false}/>
              <Input type="text" label="Parents' marriage details:" nameAndId="parentsMarriageDetails" value={record?.parentsMarriageDetails ?? ''} placeholder="Date and place of marriage" required={false}/>
              <Input type="text" label="Wife:" nameAndId="wife" value={record?.wife ?? ''} placeholder="Mary Smith" required={false}/>
              <Input type="text" label="Wife's maiden name:" nameAndId="wifeMaidenName" value={record?.wifeMaidenName ?? ''} placeholder="Johnson" required={false}/>
              <Input type="text" label="Marriage details:" nameAndId="marriageDetails" value={record?.marriageDetails ?? ''} placeholder="Date and place of marriage" required={false}/>
              <Input type="text" label="Cemetery:" nameAndId="cemetery" value={record?.cemetery ?? ''} placeholder="XYZ Cemetery" required={false}/>
              <Textarea label="Additional information:" nameAndId="additionalInfo" value={record?.additionalInfo ?? ''} placeholder="Any other information" required={false}/>
            </div>
          </div>
          <div className="flex justify-center space-x-2">
            <SubmitButton label="Save" isPending={isPending} pendingLabel="Saving..." classNames="rounded-md bg-gray-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-gray-400 disabled:hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"/>
          </div>
        </form>
        <div className="flex justify-center space-x-2 mt-2">
          { record &&
              <button onClick={handleDelete} className="rounded-md bg-gray-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-gray-400 disabled:hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                Delete
              </button>
          }
        </div>
        <p className="mt-6 text-center"><Link href="/admin/records">Back to records</Link></p>
      </>
    }/>
  )
}
