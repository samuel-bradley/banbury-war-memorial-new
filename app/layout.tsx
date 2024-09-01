import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Banbury War Memorial',
  description: 'An online memorial to those from the town of Banbury who gave their lives in the Second World War',
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
