// Copyright 2024 The RSM Authors

import { Inter, Roboto_Mono } from 'next/font/google'

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const fontMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
