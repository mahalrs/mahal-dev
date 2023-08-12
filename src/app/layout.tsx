import { Metadata } from 'next'

import AnalyticsWrapper from '@components/analytics'
import Header from '@components/header'
import Footer from '@components/footer'

import './globals.css'
import { inter, roboto_mono } from './fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | RSM',
    default: 'Rajwinder Mahal | RSM',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  referrer: 'strict-origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en-US'>
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <Header />
        <noscript className='flex justify-center px-6 sm:px-8 py-3 md:py-4 bg-color-error-variant text-color-on-error-variant'>
          <div>You need to enable JavaScript to run this app.</div>
        </noscript>
        {children}
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
