import type { Metadata } from 'next'

import AnalyticsWrapper from '@/common/components/Analytics/Analytics'
import Header from '@/common/components/Header'
import Footer from '@/common/components/Footer'
import NoScript from '@/common/components/NoScript'

import { roboto, roboto_mono } from './fonts'
import './globals.scss'

export const metadata: Metadata = {
  referrer: 'strict-origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.mahal.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" className={`${roboto.variable} ${roboto_mono.variable}`}>
      <head />
      <body>
        <Header />
        <NoScript />
        {children}
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
