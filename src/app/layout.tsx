// Copyright 2024 The RSM Authors

import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { fontInter, fontMono } from '@/app/fonts'
import Header from '@/components/header'
import Footer from '@/components/footer'

import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s · RSM',
    default: 'Rajwinder Mahal · RSM',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  referrer: 'strict-origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${fontInter.variable} ${fontMono.variable}`}
    >
      <body>
        <Providers>
          <noscript>
            <div className='bg-danger-50 p-4 text-center text-sm text-danger-700 lg:px-6'>
              You need to enable JavaScript to use this app.
            </div>
          </noscript>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
