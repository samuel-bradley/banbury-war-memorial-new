import Main from "../main";
import { SubmitButton } from "../submit-button";

export default function Contact() {
  async function sendEmail(formData: FormData) {
    'use server'

    const rawFormData = {
      from: formData.get('from'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    var AWS = require("aws-sdk");
    AWS.config.update({ region: "eu-west-2" });

    var params = {
      Destination: {
        CcAddresses: [],
        ToAddresses: ["samueljbradley94@gmail.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `<html><body>${rawFormData.message}</body></html>`,
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: `Banbury War Memorial Contact - ${rawFormData.subject}`,
        }
      },
      Source: rawFormData.from,
      ReplyToAddresses: [rawFormData.from]
    };
    
    new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(params)
      .promise()
      .then(function (data: { MessageId: any; }) {
        console.log(data.MessageId);
      })
      .catch(function (err: { stack: any; }) {
        console.error(err, err.stack);
      });
  }

  return (
    <Main pageName="contact" heading="Contact" content = {
      <>
        <div id="message"></div>
        <form action={sendEmail}>
          <div className="border-b border-gray-900/10 pb-6">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <p className="max-w-sm">If you have any questions or corrections, please leave a message and we'll try
                  to get back to you soon.</p>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="from" className="block leading-6 mb-1">Your email address:</label>
                <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
                  <input type="email" required id="from" name="from" className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500" placeholder="you@somewhere.com"/>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="from" className="block leading-6 mb-1">Subject:</label>
                <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
                <input type="text" required id="subject" name="subject" className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500" placeholder="What's this about?"/>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="from" className="block leading-6 mb-1">Message:</label>
                <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
                  <textarea id="message" required name="message" cols={50} rows={5} className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500" placeholder="What would you like to say?"/>
                </div>
              </div>
            </div>
          </div>
          <SubmitButton label="Send" pendingLabel="Sending..." classNames="rounded-md bg-gray-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-gray-400 disabled:hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"/>
        </form>
      </>
    }/>
  )
}
