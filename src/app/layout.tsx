import Header from '@/common/components/Header'
import Footer from '@/common/components/Footer'
import NoScript from '@/common/components/NoScript'

import { roboto, roboto_mono } from './fonts'
import './globals.scss'

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
      </body>
    </html>
  )
}
