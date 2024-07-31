// Copyright 2024 The RSM Authors

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rajwinder Mahal · RSM',
  description:
    "Rajwinder Mahal is a skilled machine learning engineer, passionate about open-source software. Learn more about Rajwinder's interests and explore his insights on machine learning, startups, and more.",
  alternates: {
    canonical: '/',
  },
}

const jsonld = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'url': process.env.NEXT_PUBLIC_BASE_URL as string,
  'logo': `${process.env.NEXT_PUBLIC_BASE_URL}/_static/rsm-icon.svg`,
  'name': 'RSM - Rajwinder Mahal',
  'description': metadata.description,
  'email': 'hello@mahal.dev',
  'sameAs': [
    'https://www.linkedin.com/in/mahalrajwinder',
    'https://github.com/mahalrs',
  ],
}

export default function Home() {
  return (
    <>
      <main>RSM</main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
    </>
  )
}
