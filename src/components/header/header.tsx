// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import Image from 'next/image'
import Link from 'next/link'

import { GitHubIcon } from '@components/icons'

import rsmMonogram from '@public/rsm-monogram.svg'

import { Menu, MenuButton } from './menu'
import { navLinks } from './navLinks'

export default function Header() {
  return (
    <>
      <header className='sticky top-0 pl-4 sm:pl-6 pr-1 sm:pr-3 py-1 bg-color-background/90 backdrop-blur-sm shadow-[inset_0_-1px_0_0] shadow-color-border'>
        <nav className='max-w-screen-xl mx-auto flex justify-between'>
          <div className='py-2'>
            <Link
              href='/'
              prefetch={false}
            >
              <Image
                src={rsmMonogram}
                alt='RSM - Rajwinder Mahal'
                className='w-auto h-8 dark:invert'
                priority
              />
            </Link>
          </div>
          <div className='flex'>
            <ul className='hidden lg:flex text-sm'>
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.path}
                    className='flex flex-col justify-center'
                  >
                    <Link
                      href={link.path}
                      prefetch={false}
                      className='hover:bg-color-hover px-4 py-2 rounded-full'
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <span className='hidden lg:flex ml-2 mr-3 my-3 w-[1px] bg-color-border' />
            <div className='flex'>
              <a
                href='https://github.com/mahalrs'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:bg-color-hover p-3 rounded-full'
              >
                <GitHubIcon className='w-auto h-6' />
              </a>
              <MenuButton />
            </div>
          </div>
        </nav>
      </header>
      <Menu />
    </>
  )
}
