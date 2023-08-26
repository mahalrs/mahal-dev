// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import Image from 'next/image'
import Link from 'next/link'

import { GitHubIcon, LinkedInIcon } from '@components/icons'

import rsm from '@public/rsm.svg'

export default function Footer() {
  return (
    <div className='px-4 sm:px-6 py-8 md:py-16'>
      <footer className='max-w-screen-xl mx-auto text-sm'>
        <hr className='text-color-border mb-2' />
        <div className='flex flex-wrap justify-center gap-2'>
          <Link
            href='/about'
            className='hover:bg-color-hover-variant px-4 py-2 rounded-full'
          >
            About
          </Link>
          <Link
            href='/contact'
            className='hover:bg-color-hover-variant px-4 py-2 rounded-full'
          >
            Contact
          </Link>
        </div>
        <hr className='text-color-border mt-2' />
        <div className='flex flex-col md:flex-row gap-8 md:justify-between mt-8'>
          <div className='flex md:flex-col justify-center'>
            <Link href='/'>
              <Image
                src={rsm}
                alt='RSM - The Site of Rajwinder Mahal'
                className='w-auto h-8 dark:invert'
              />
            </Link>
          </div>
          <div className='flex flex-wrap justify-center gap-2'>
            <a
              href='https://www.linkedin.com/in/mahalrajwinder'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:bg-color-hover-variant p-3 rounded-full border border-color-border'
            >
              <LinkedInIcon className='w-auto h-6' />
            </a>
            <a
              href='https://github.com/mahalrs'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:bg-color-hover-variant p-3 rounded-full border border-color-border'
            >
              <GitHubIcon className='w-auto h-6' />
            </a>
          </div>
        </div>
        <div className='text-xs text-center mt-8'>
          Rajwinder Mahal &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
