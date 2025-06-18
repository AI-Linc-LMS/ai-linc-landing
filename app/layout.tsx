import type { Metadata } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';

export const metadata: Metadata = {
  title: 'ai-linc',
  description: 'No code development using Agentic AI',
  generator: 'Next.js',
  icons: {
    icon: '/vittee.svg',         // Favicon
    shortcut: '/AL.png',         // Optional shortcut icon
    apple: '/Favicon.png',       // Apple touch icon
  },
  openGraph: {
    title: 'ai-linc',
    description: 'No code development using Agentic AI',
    url: 'https://ailinc.com',
    siteName: 'ai-linc',
    images: [
      {
        url: 'https://ailinc.com/vittee.svg', // ✅ This is your logo
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
    images: ['https://ailinc.com/vittee.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
