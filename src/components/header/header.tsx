// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import Image from 'next/image'
import Link from 'next/link'

import { GitHubIcon } from '@components/icons'

import rsmMonogram from '@public/rsm-monogram.svg'

export default function Header() {
  return (
    <div className='sticky top-0 px-4 sm:px-6 py-1 bg-color-background/95 shadow-[inset_0_-1px_0_0] shadow-color-border'>
      <header className='max-w-screen-xl mx-auto'>
        <div className='flex justify-between'>
          <div className='py-2'>
            <Link href='/'>
              <Image
                src={rsmMonogram}
                alt='RSM - Rajwinder Mahal'
                className='w-auto h-8 dark:invert'
                priority
              />
            </Link>
          </div>
          <div>
            <a
              href='https://github.com/mahalrs'
              target='_blank'
              rel='noopener noreferrer'
              className='block hover:bg-color-hover-variant p-3 rounded-full'
            >
              <GitHubIcon className='w-auto h-6' />
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}
