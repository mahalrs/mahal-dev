// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='p-8 sm:p-12 min-h-[calc(100vh-56px-310px)] flex'>
      <title>404 Not Found | RSM</title>
      <div className='max-w-screen-xl mx-auto flex flex-col justify-center text-center'>
        <h1 className='text-4xl mb-4'>Page not found</h1>
        <p className='text-color-on-background-variant max-w-[240px] mb-8'>
          {`Sorry we couldn't find what you were looking for.`}
        </p>
        <div>
          <Link
            href='/'
            className='bg-color-primary hover:bg-color-primary-variant text-color-on-primary font-medium px-4 py-2 rounded-lg inline-block'
          >
            Go to mahal.dev
          </Link>
        </div>
      </div>
    </div>
  )
}
