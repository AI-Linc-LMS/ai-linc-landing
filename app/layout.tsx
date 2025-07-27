import type { Metadata } from 'next'
import './globals.css'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'

// Extend Window interface to include dataLayer and gtag
declare global {
  interface Window {
    dataLayer?: Array<{[key: string]: any}>;
    gtag?: (...args: any[]) => void;
  }
}

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
        url: 'https://ailinc.com/Favicon.png',
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
    images: ['https://ailinc.com/Favicon.png'],
  },
  other: {
    'google-tag-manager': 'GTM-NHJGR4BD',
    'google-analytics': 'G-KHTSBXWHQT'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            // Explicit GTM Debugging
            console.warn('GTM Debug: Initializing Tag Manager');
            
            window.dataLayer = window.dataLayer || [];
            
            // More verbose GTM initialization
            (function(w,d,s,l,i){
              console.warn('GTM Debug: Setting up dataLayer and script');
              w[l] = w[l] || [];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              
              var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
              
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              
              console.warn('GTM Debug: Inserting script', j.src);
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-NHJGR4BD');
            
            // Verification push
            window.dataLayer.push({
              'event': 'gtm_verification',
              'message': 'GTM is successfully loaded'
            });
            
            console.warn('GTM Debug: Initialization complete');
            `
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-KHTSBXWHQT"
        />
        <script
          id="gtag-script"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KHTSBXWHQT');
            
            console.warn('Google Analytics: Initialized with tracking ID G-KHTSBXWHQT');
            `
          }}
        />
        {/* End Google Analytics */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          id="gtm-noscript"
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHJGR4BD"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
