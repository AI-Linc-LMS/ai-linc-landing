import type { Metadata } from 'next'
import './globals.css'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'

export const metadata: Metadata = {
  title: 'ai-linc',
  description: 'No code development using Agentic AI',
  generator: 'Next.js',
  icons: {
    icon: '/vittee.svg',
    shortcut: '/vittee.png',
    apple: '/Favicon.png',
  },
  openGraph: {
    title: 'ai-linc',
    description: 'No code development using Agentic AI',
    url: 'https://ailinc.com',
    siteName: 'ai-linc',
    images: [
      {
        url: 'https://ailinc.com/AL.png',
        width: 1200,
        height: 630,
        alt: 'ai-linc Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ai-linc',
    description: 'No code development using Agentic AI',
    images: ['https://ailinc.com/AL.png'],
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
