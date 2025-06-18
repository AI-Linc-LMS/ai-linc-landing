import type { Metadata } from 'next'
import './globals.css'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import Head from 'next/head'

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
        url: 'https://ailinc.com/vittee.png',
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
    images: ['https://ailinc.com/vittee.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Fallback OG and Twitter tags for reliability */}
        <meta property="og:title" content="ai-linc" />
        <meta property="og:description" content="No code development using Agentic AI" />
        <meta property="og:image" content="https://ailinc.com/vittee.png" />
        <meta property="og:url" content="https://ailinc.com" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ai-linc" />
        <meta name="twitter:description" content="No code development using Agentic AI" />
        <meta name="twitter:image" content="https://ailinc.com/vittee.png" />
      </Head>

      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
