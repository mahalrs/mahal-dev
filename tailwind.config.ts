// Copyright 2024 The RSM Authors

import type { Config } from 'tailwindcss'

import { nextui } from '@nextui-org/theme'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|link|ripple|spinner).js',
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
      // @ts-ignore
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'color': theme('colors.default-700'),
            'strong': {
              color: theme('colors.default-900'),
              fontWeight: '600',
            },
            'b': {
              color: theme('colors.default-900'),
              fontWeight: '600',
            },
            'hr': {
              borderColor: theme('colors.default-200'),
            },
            'blockquote': {
              borderLeftColor: theme('colors.default-200'),
              color: theme('colors.default-700'),
            },
            'h1': {
              color: theme('colors.default-900'),
              fontWeight: '600',
            },
            'h2': {
              color: theme('colors.default-900'),
              fontWeight: '600',
            },
            'h3': {
              color: theme('colors.default-900'),
              fontWeight: '400',
            },
            'h4': {
              color: theme('colors.default-900'),
              fontWeight: '400',
            },
            'thead': {
              borderBottomColor: theme('colors.default-200'),
            },
            'thead th': {
              color: theme('colors.default-900'),
              fontWeight: '600',
            },
            'tbody tr': {
              borderBottomColor: theme('colors.default-200'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    nextui({
      prefix: 'rsm',
    }),
    typography,
  ],
}

export default config
