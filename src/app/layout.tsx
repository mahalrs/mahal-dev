import AnalyticsWrapper from '@components/analytics'
import Header from '@components/header'
import Footer from '@components/footer'

import { inter, roboto_mono } from './fonts'
import './globals.css'

export const metadata = {
  title: {
    template: '%s | RSM',
    default: 'Rajwinder Mahal | RSM',
  },
  metadataBase: new URL('https://www.mahal.dev'),
  referrer: 'strict-origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <Header />
        <noscript className='flex justify-center px-6 sm:px-8 py-3 md:py-4 bg-[#ffdad6] dark:bg-[#93000a] text-[#410002] dark:text-[#ffdad6]'>
          <div>You need to enable JavaScript to run this app.</div>
        </noscript>
        {children}
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
