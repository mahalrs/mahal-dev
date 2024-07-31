// Copyright 2024 The RSM Authors

import type { Metadata } from 'next'

import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'

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
      <main className='flex min-h-[75svh] flex-col justify-center px-6 py-12 sm:px-12 md:py-16'>
        <div className='mx-auto'>
          <h1 className='text-3xl font-bold sm:text-4xl md:text-6xl md:leading-tight lg:text-8xl'>
            Rajwinder Mahal
          </h1>
          <div className='max-w-2xl text-sm text-default-700 sm:text-base md:text-lg'>
            <p className='mt-8 sm:mt-12 md:mt-16'>
              Rajwinder Mahal is a skilled machine learning engineer, passionate
              about open-source software.
            </p>
            <p className='mt-6 md:mt-8'>
              Rajwinder has experience in building scalable machine learning
              systems and has worked on projects in machine learning, natural
              language processing, computer vision, and recommender systems.
            </p>
          </div>
          <div className='mt-12 flex flex-wrap gap-4'>
            <Button
              as={Link}
              href='https://www.linkedin.com/in/mahalrajwinder'
              isExternal
              showAnchorIcon
              variant='bordered'
              startContent={<LinkedInIcon size={16} />}
            >
              LinkedIn
            </Button>
            <Button
              as={Link}
              href='https://github.com/mahalrs'
              isExternal
              showAnchorIcon
              variant='bordered'
              startContent={<GitHubIcon size={16} />}
            >
              GitHub
            </Button>
          </div>
        </div>
      </main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
    </>
  )
}
