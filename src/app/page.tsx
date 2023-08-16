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
    <main>
      <section className='m-4 sm:m-6 px-4 sm:px-6 py-8 md:p-12 bg-color-surface rounded-3xl min-h-[calc(100vh-56px-32px)] md:min-h-[calc(100vh-56px-48px)] flex'>
        <div className='max-w-screen-xl mx-auto flex flex-col justify-center'>
          <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold'>
            Rajwinder Mahal
          </h1>
          <div className='text-sm sm:text-base md:text-lg max-w-xl'>
            <p className='mt-16'>
              Rajwinder Mahal is a skilled machine learning engineer, passionate
              about open-source software.
            </p>
            <p className='mt-8'>
              Rajwinder has experience in building scalable machine learning
              systems and has worked on projects in natural language processing,
              computer vision, generative AI, and recommender systems.
            </p>
          </div>
          <div className='mt-8'>
            <Link
              href='/about'
              className='bg-color-primary hover:bg-color-primary-variant text-color-on-primary font-medium px-4 py-2 rounded-lg inline-block'
            >
              About Me
            </Link>
          </div>
        </div>
      </section>
      <section className='m-4 sm:m-6 px-4 sm:px-6 py-8 md:p-12 bg-color-surface rounded-3xl min-h-[calc(100vh-56px-32px)] md:min-h-[calc(100vh-56px-48px)] flex'>
        <div className='max-w-screen-xl mx-auto flex flex-col justify-center'>
          <h2 className='text-4xl sm:text-6xl md:text-8xl font-bold'>
            Reading List
          </h2>
          <div className='text-sm sm:text-base md:text-lg max-w-xl'>
            <p className='mt-16'>
              Discover essential reads for engineers, entrepreneurs, and tech
              enthusiasts.
            </p>
            <p className='mt-8'>
              This curated collection includes must-read engineering and startup
              books, insightful technical blogs, groundbreaking research papers,
              and more.
            </p>
          </div>
          <div className='mt-8'>
            <Link
              href='/reading-list'
              className='bg-color-primary hover:bg-color-primary-variant text-color-on-primary font-medium px-4 py-2 rounded-lg inline-block'
            >
              Reading List
            </Link>
          </div>
        </div>
      </section>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
