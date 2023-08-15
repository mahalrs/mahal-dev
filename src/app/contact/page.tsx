// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import { getMetadata } from '@app/metadata'

export const metadata = getMetadata({
  title: 'Contact Rajwinder Mahal',
  description:
    'Whether you have questions, feedback, collaboration ideas, or just want to say hello, Rajwinder would love to hear from you.',
  url: '/contact',
})

export default function Page() {
  return (
    <div className='m-4 sm:m-6 px-4 sm:px-6 py-8 md:p-12 bg-color-surface rounded-3xl min-h-[calc(100vh-56px-32px)] md:min-h-[calc(100vh-56px-48px)] flex'>
      <main className='max-w-screen-xl mx-auto flex flex-col justify-center'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold'>
          Contact <br />
          Rajwinder Mahal
        </h1>
        <div className='text-sm sm:text-base md:text-lg max-w-xl'>
          <p className='mt-16'>
            Whether you have questions, feedback, collaboration ideas, or just
            want to say hello, sending an email is the way to go.
          </p>
          <p className='mt-8'>
            Rajwinder can be reached at hello [at] mahal [dot] dev.
          </p>
        </div>
        <div className='mt-8'>
          <a
            href='https://www.linkedin.com/in/mahalrajwinder'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-color-primary hover:bg-color-primary-variant text-color-on-primary font-medium px-4 py-2 rounded-lg inline-block'
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  )
}
