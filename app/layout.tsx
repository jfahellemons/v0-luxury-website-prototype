import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lips Stables | Premium Paardenfokkerij & Hippische Diensten',
  description: 'Ontdek de excellentie van Lips Stables - Al generaties lang toonaangevend in premium paardenfokkerij, training en hippische diensten in Nederland.',
  keywords: ['paarden', 'fokkerij', 'hippisch', 'premium', 'Nederland', 'dressuur', 'training'],
  authors: [{ name: 'Lips Stables' }],
  openGraph: {
    title: 'Lips Stables | Premium Paardenfokkerij',
    description: 'Waar erfgoed en moderne excellentie samenkomen',
    type: 'website',
    locale: 'nl_NL',
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F1ED',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${geistSans.variable} ${geistMono.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#paarden" 
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-gold-foreground focus:outline-none"
        >
          Ga naar inhoud
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
