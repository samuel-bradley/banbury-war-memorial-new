'use server'

export default async function sendEmail(fromAddress: string, subject: string, message: string): Promise<string> {

  var AWS = require("aws-sdk")
  AWS.config.update({ region: "eu-west-2" })

  const toAddress = 'samueljbradley94@gmail.com'
  var params = {
    Destination: {
      CcAddresses: [],
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
  }
  
  return new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise()
    .then(() => { return "Thank you for your message - I'll try to get back to you soon." })
    .catch(() => { return `Sorry, something went wrong. You can reach me directly at <a href="mailto:${toAddress}">${toAddress}</a>.` })
}
