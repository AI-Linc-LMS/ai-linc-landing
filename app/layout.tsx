import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ai-linc-landing-page',
  description: 'A landing page for AI Linc',
  generator: 'Next.js',
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
