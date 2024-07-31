// Copyright 2024 The RSM Authors

'use client'

import { Button } from '@nextui-org/button'
import { useEffect } from 'react'
import NextLink from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    console.error('error', error)
  }, [error])

  return (
    <div className='flex min-h-[75svh] flex-col justify-center px-6 py-12 sm:px-12 md:py-16'>
      <div className='mx-auto'>
        <h2 className='text-3xl font-bold'>Something went wrong!</h2>
        <p className='mt-6 text-default-700'>
          {`We're having trouble processing your request.`}
        </p>
        <div className='mt-12 flex flex-wrap gap-4'>
          <Button
            onClick={() => reset()}
            size='sm'
            variant='bordered'
          >
            Try again
          </Button>
          <Button
            as={NextLink}
            href='/'
            size='sm'
            className='bg-foreground text-background'
          >
            Return home
          </Button>
        </div>
      </div>
    </div>
  )
}
