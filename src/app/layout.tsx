import Header from '@/common/components/Header'
import Footer from '@/common/components/Footer'

import '@/common/styles/base.css'
import '@/common/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
