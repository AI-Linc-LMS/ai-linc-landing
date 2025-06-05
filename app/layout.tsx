import type { Metadata } from 'next'
import './globals.css'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'

export const metadata: Metadata = {
  title: 'ai-linc',
  description: 'A landing page for AI Linc',
  generator: 'Next.js',
  icons: {
    icon: '/vittee.svg',
    shortcut: '/AL.png',
    apple: '/Favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
