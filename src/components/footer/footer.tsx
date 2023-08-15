// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import Image from 'next/image'
import Link from 'next/link'

import { GitHubIcon, LinkedInIcon } from '@components/icons'

import rsmMonogram from '@public/rsm-monogram.svg'

export default function Footer() {
  return (
    <div className='px-4 sm:px-6 py-8 md:py-16 bg-color-surface'>
      <footer className='max-w-screen-xl mx-auto space-y-6 text-sm'>
        <div className='flex flex-col md:flex-row gap-8 md:justify-between'>
          <div className='flex md:flex-col justify-center'>
            <Link href='/'>
              <Image
                src={rsmMonogram}
                alt='RSM - Rajwinder Mahal monogram'
                className='w-auto h-8 dark:invert'
              />
            </Link>
          </div>
          <div className='flex flex-wrap justify-center gap-2'>
            <a
              href='https://www.linkedin.com/in/mahalrajwinder'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:bg-color-hover p-3 rounded-full border border-color-border'
            >
              <LinkedInIcon className='w-auto h-6' />
            </a>
            <a
              href='https://github.com/mahalrs'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:bg-color-hover p-3 rounded-full border border-color-border'
            >
              <GitHubIcon className='w-auto h-6' />
            </a>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-2'>
          <Link
            href='/about'
            className='hover:bg-color-hover px-4 py-2 rounded-full'
          >
            About
          </Link>
          <Link
            href='/contact'
            className='hover:bg-color-hover px-4 py-2 rounded-full'
          >
            Contact
          </Link>
        </div>
        <div className='text-xs text-center'>
          Rajwinder Mahal &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
