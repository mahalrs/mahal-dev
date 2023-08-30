// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import Link from 'next/link'

import { getMetadata } from '@app/metadata'

export const metadata = getMetadata({
  title: 'Rajwinder Mahal · RSM',
  description:
    "Rajwinder Mahal is a skilled machine learning engineer, passionate about open-source software. Learn more about Rajwinder's interests and explore his insights on machine learning, startups, and more.",
  url: '/',
})

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'RSM',
    'legalName': 'RSM',
    'description': metadata.description,
    'url': process.env.NEXT_PUBLIC_BASE_URL!,
    'logo': `${process.env.NEXT_PUBLIC_BASE_URL}/rsm.svg`,
    'sameAs': [
      'https://www.linkedin.com/in/mahalrajwinder',
      'https://github.com/mahalrs',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'RSM',
    'alternateName': ['Rajwinder Mahal', 'mahal.dev'],
    'url': process.env.NEXT_PUBLIC_BASE_URL!,
    'sameAs': [
      'https://www.linkedin.com/in/mahalrajwinder',
      'https://github.com/mahalrs',
    ],
  },
]

export default function Page() {
  return (
    <>
      <main className='p-8 sm:p-12 min-h-[calc(100vh-56px)] flex'>
        <section className='max-w-screen-xl mx-auto flex flex-col justify-center'>
          <h1 className='font-bold text-4xl sm:text-6xl md:text-8xl leading-[1.3] sm:leading-[1.3] md:leading-[1.3]'>
            Rajwinder Mahal
          </h1>
          <div className='text-sm sm:text-base md:text-lg max-w-xl'>
            <p className='mt-16'>
              Rajwinder Mahal is a skilled machine learning engineer, passionate
              about open-source software.
            </p>
            <p className='mt-8'>
              Rajwinder has experience in building scalable machine learning
              systems and has worked on projects in machine learning, natural
              language processing, computer vision, and recommender systems.
            </p>
          </div>
          <div className='mt-8'>
            <Link
              href='/about'
              className='bg-color-primary hover:bg-color-primary-variant text-color-on-primary font-medium px-4 py-2 rounded-lg inline-block'
            >
              About me
            </Link>
          </div>
        </section>
      </main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
