import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { NextResponse } from 'next/server'

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function GET(_: Request, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
    })

    const s3Response = await s3.send(command)

    // Extract the stream from the S3 response
    const imageStream = s3Response.Body as ReadableStream<Uint8Array>

    return new NextResponse(imageStream, {
      headers: {
        'Content-Type': s3Response.ContentType || 'image/jpeg', // Set content type based on the file
        'Content-Disposition': `inline; filename='${key}'`,
      },
    })
  } catch (error) {
    console.log(`Error retrieving image: ${error}`)
    return new NextResponse('Image not found', { status: 404 })
  }
}
