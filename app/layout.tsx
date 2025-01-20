import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ola Clone',
  description: 'Clone of the ola electric',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
