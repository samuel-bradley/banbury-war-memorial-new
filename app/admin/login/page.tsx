'use client'

import Main from "../../main"
import SubmitButton from "../../submit-button"
import { useState, useTransition } from 'react'
import { authenticate } from './authenticate'
 
export default function Page() {
  const [errorMessage, setMessage] = useState<string>('');
  const [isPending, startTransition] = useTransition()

  const onLogin: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    startTransition(async () => {
      const formData = new FormData(event.currentTarget)
      const errorMessage = await authenticate(formData.get('password') as string)
      if (typeof errorMessage == "string") setMessage(errorMessage)
    })
  }

  return (
    <Main pageName="login" heading="Admin Login" content = {
      <>
        <form onSubmit={onLogin}>
          <label htmlFor="password" className="inline-block leading-6 m-2">Password:</label>
          <div className="inline-block mb-4 rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
            <input type="password" name="password" id="password" placeholder="Password" className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500" required/>
          </div>
          { errorMessage ? <div><p>{errorMessage}</p></div> : <></> }
          <div className="flex justify-center">
            <SubmitButton label="Log in" isPending={isPending} pendingLabel="Logging in..." classNames="rounded-md bg-gray-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-gray-400 disabled:hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"/>
          </div>
        </form>
      </>
    }/>
  )
}
