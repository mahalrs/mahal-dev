// Copyright 2024 The RSM Authors

import type { Config } from 'tailwindcss'

import { nextui } from '@nextui-org/theme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: [
    'variant',
    [
      '@media (prefers-color-scheme: dark) { &:not(.light *) }',
      '&:is(.dark *)',
    ],
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [
          'var(--font-inter)',
          'Roboto',
          'Open Sans',
          'Helvetica Neue',
          'Verdana',
          'sans-serif',
        ],
        body: [
          'var(--font-inter)',
          'Roboto',
          'Open Sans',
          'Helvetica Neue',
          'Verdana',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'Roboto Mono',
          'Source Code Pro',
          'Menlo',
          'Monaco',
          'monospace',
        ],
      },
    },
  },
  plugins: [
    nextui({
      prefix: 'rsm',
    }),
  ],
}

export default config
