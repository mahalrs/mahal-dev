// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      'inherit': 'inherit',
      'current': 'currentColor',
      'transparent': 'transparent',
      'color-primary': 'rgb(var(--rsm-color-primary) / <alpha-value>)',
      'color-primary-variant':
        'rgb(var(--rsm-color-primary-variant) / <alpha-value>)',
      'color-on-primary': 'rgb(var(--rsm-color-on-primary) / <alpha-value>)',
      'color-background': 'rgb(var(--rsm-color-background) / <alpha-value>)',
      'color-on-background':
        'rgb(var(--rsm-color-on-background) / <alpha-value>)',
      'color-on-background-variant':
        'rgb(var(--rsm-color-on-background-variant) / <alpha-value>)',
      'color-surface': 'rgb(var(--rsm-color-surface) / <alpha-value>)',
      'color-on-surface': 'rgb(var(--rsm-color-on-surface) / <alpha-value>)',
      'color-on-surface-variant':
        'rgb(var(--rsm-color-on-surface-variant) / <alpha-value>)',
      'color-error': 'rgb(var(--rsm-color-error) / <alpha-value>)',
      'color-on-error': 'rgb(var(--rsm-color-on-error) / <alpha-value>)',
      'color-error-variant':
        'rgb(var(--rsm-color-error-variant) / <alpha-value>)',
      'color-on-error-variant':
        'rgb(var(--rsm-color-on-error-variant) / <alpha-value>)',
      'color-border': 'rgb(var(--rsm-color-border) / <alpha-value>)',
      'color-hover': 'rgb(var(--rsm-color-hover))',
      'color-hover-variant': 'rgb(var(--rsm-color-hover-variant))',
    },
    fontFamily: {
      display: [
        'var(--rsm-font-inter)',
        'Roboto',
        'Open Sans',
        'Helvetica Neue',
        'Verdana',
        'Tahoma',
        'sans-serif',
      ],
      body: [
        'var(--rsm-font-inter)',
        'Roboto',
        'Open Sans',
        'Helvetica Neue',
        'Verdana',
        'Tahoma',
        'sans-serif',
      ],
      mono: [
        'var(--rsm-font-roboto-mono)',
        'Roboto Mono',
        'Source Code Pro',
        'Menlo',
        'Monaco',
        'monospace',
      ],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'color': 'rgb(var(--rsm-color-on-background))',
            '[class~="lead"]': {
              color: 'rgb(var(--rsm-color-on-background))',
            },
            'a': {
              color: 'rgb(var(--rsm-color-link))',
              textDecoration: 'none',
              fontWeight: '500',
            },
            'a:hover': {
              textDecoration: 'underline',
            },
            'a:visited': {
              color: 'rgb(var(--rsm-color-link))',
            },
            'strong': {
              color: 'inherit',
              fontWeight: '500',
            },
            'b': {
              color: 'inherit',
              fontWeight: '500',
            },
            'ol > li::marker': {
              color: 'rgb(var(--rsm-color-primary))',
            },
            'ul > li::marker': {
              color: 'rgb(var(--rsm-color-primary))',
            },
            'hr': {
              borderColor: 'rgb(var(--rsm-color-border))',
            },
            'blockquote': {
              color: 'rgb(var(--rsm-color-on-background-variant))',
              borderLeftColor: 'rgb(var(--rsm-color-primary))',
            },
            'h1': {
              color: 'rgb(var(--rsm-color-primary))',
              fontWeight: '500',
            },
            'h1 strong': {
              fontWeight: '700',
            },
            'h2': {
              color: 'rgb(var(--rsm-color-primary))',
              fontWeight: '500',
            },
            'h2 strong': {
              fontWeight: '700',
            },
            'h3': {
              color: 'rgb(var(--rsm-color-primary))',
              fontWeight: '400',
            },
            'h3 strong': {
              fontWeight: '700',
            },
            'h4': {
              color: 'rgb(var(--rsm-color-primary))',
              fontWeight: '400',
            },
            'h4 strong': {
              fontWeight: '700',
            },
            'figcaption': {
              color: 'rgb(var(--rsm-color-on-background-variant))',
            },
            'code': {
              color: 'rgb(var(--rsm-color-on-background-variant))',
            },
            'pre': {
              color: 'rgb(var(--rsm-color-on-surface-variant))',
              backgroundColor: 'rgb(var(--rsm-color-surface))',
            },
            'thead': {
              borderBottomColor: 'rgb(var(--rsm-color-border))',
            },
            'thead th': {
              color: 'rgb(var(--rsm-color-primary))',
              fontWeight: '500',
            },
            'tbody tr': {
              borderBottomColor: 'rgb(var(--rsm-color-border))',
            },
            'tfoot': {
              borderTopColor: 'rgb(var(--rsm-color-border))',
            },
            'tfoot th': {
              color: 'rgb(var(--rsm-color-primary))',
              fontWeight: '500',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
