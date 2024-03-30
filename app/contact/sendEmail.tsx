'use server'

export default async function sendEmail(from: string, subject: string, message: string) {

  var AWS = require("aws-sdk");
  AWS.config.update({ region: "eu-west-2" });

  const toAddress = "samueljbradley94@gmail.com"
  var params = {
    Destination: {
      CcAddresses: [],
      ToAddresses: ["samueljbradley94@gmail.com"],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html><body>${message}</body></html>`,
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Banbury War Memorial Contact - ${subject}`,
      }
    },
    Source: from,
    ReplyToAddresses: [from]
  };
  
  return new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise()
    .then(function (_: { MessageId: any; }) {
      return { message: "Thank you for your message - I'll try to get back to you soon." }
    })
    .catch(function (_: { stack: any; }) {
      return { message: `Sorry, something went wrong. You can reach me directly at <a href="mailto:${toAddress}">${toAddress}</a>.` }
    });
}
