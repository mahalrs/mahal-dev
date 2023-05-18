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
    extend: {
      fontFamily: {
        display: ['var(--rsm-font-inter)', 'Roboto', 'Open Sans', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        body: ['var(--rsm-font-inter)', 'Roboto', 'Open Sans', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        mono: ['var(--rsm-font-roboto-mono)', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
