import Header from '@/common/components/Header'
import Footer from '@/common/components/Footer'

import { roboto, roboto_mono } from './fonts'
import './globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${roboto_mono.variable}`}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
