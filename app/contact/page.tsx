'use client'

import Main from '../main'
import SubmitButton from '../submit-button'
import sendEmail from './sendEmail'
import { useState, useTransition } from 'react'
import ReactHtmlParser from 'html-react-parser'

export default function Contact() {
  const [message, setMessage] = useState<string>('')
  const [isPending, startTransition] = useTransition()

  const onSend: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    startTransition(async () => {
      const formData = new FormData(event.currentTarget)
      const message: string = await sendEmail(
        formData.get('from') as string,
        formData.get('subject') as string,
        formData.get('message') as string
      )
      setMessage(message)
    })
  }

  return (
    <Main pageName="contact" heading="Contact" content = {
      <>
        {message ? (
          <p id="resultMessage" className="max-w-sm">{ReactHtmlParser(message)}</p>
        ) : (
          <form onSubmit={onSend}>
            <div className="border-b border-gray-900/10 pb-6">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <p className="max-w-sm">If you have any questions or corrections, please leave a message and I'll try
                    to get back to you soon.</p>
                </div>
                <div className="sm:col-span-6">
                  <label htmlFor="from" className="block leading-6 mb-1">Your email address:</label>
                  <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
                    <input type="email" required id="from" name="from" className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500" placeholder="you@somewhere.com"/>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label htmlFor="subject" className="block leading-6 mb-1">Subject:</label>
                  <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
                  <input type="text" required id="subject" name="subject" className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500" placeholder="What's this about?"/>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label htmlFor="message" className="block leading-6 mb-1">Message:</label>
                  <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
                    <textarea id="message" required name="message" cols={50} rows={5} className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500" placeholder="What would you like to say?"/>
                  </div>
                </div>
              </div>
            </div>
            <SubmitButton label="Send" isPending={isPending} pendingLabel="Sending..." classNames="rounded-md bg-gray-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-gray-400 disabled:hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"/>
          </form>
        )}
      </>
    }/>
  )
}
