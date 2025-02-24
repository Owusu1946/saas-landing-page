import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sass Landing Page',
  description: 'Sass Landing Page boilerplate for tech startups',
  generator: 'v0.dev',
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
