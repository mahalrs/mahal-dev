// Copyright 2024 The RSM Authors

import { Button } from '@nextui-org/button'
import { Metadata } from 'next'
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: '404 Not Found',
}

export default function NotFound() {
  return (
    <main className='flex min-h-[75svh] flex-col justify-center px-6 py-12 sm:px-12 md:py-16'>
      <div className='mx-auto'>
        <h2 className='text-3xl font-bold'>Not Found</h2>
        <p className='mt-6 text-default-700'>
          {`Sorry we couldn't find what you were looking for.`}
        </p>
        <Button
          as={NextLink}
          href='/'
          size='sm'
          className='mt-12 bg-foreground text-background'
        >
          Return home
        </Button>
      </div>
    </main>
  )
}
