'use server'

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export default async function sendEmail(fromAddress: string, subject: string, message: string): Promise<string> {

  const sesClient = new SESClient({region: 'eu-west-2'})
  const toAddress = process.env.CONTACT_EMAIL_ADDRESS
  if (!toAddress) throw new Error('No contact email address set.')
  const sendEmailCommand = new SendEmailCommand({
    Destination: {
      ToAddresses: [toAddress]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html><body>${message}</body></html>`
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Banbury War Memorial Contact - ${fromAddress} - ${subject}`
      }
    },
    Source: toAddress, // this must be an SES-verified email address
    ReplyToAddresses: [fromAddress]
  })
  
  return sesClient.send(sendEmailCommand)
    .then(() => { return "Thank you for your message - I'll try to get back to you soon." })
    .catch(() => { return `Sorry, something went wrong. You can reach me directly at <a href="mailto:${toAddress}">${toAddress}</a>.` })
}
