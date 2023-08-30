// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import Image from 'next/image'
import Link from 'next/link'

import { GitHubIcon, LinkedInIcon } from '@components/icons'

import rsm from '@public/rsm.svg'

const navLinks = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const socialLinks = [
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/mahalrajwinder',
  },
  {
    icon: GitHubIcon,
    href: 'https://github.com/mahalrs',
  },
]

export default function Footer() {
  return (
    <div className='px-4 sm:px-6 md:pr-3 py-8 md:py-16'>
      <footer className='max-w-screen-xl mx-auto text-sm'>
        <hr className='text-color-border mb-2' />
        <ul className='flex flex-wrap justify-center'>
          {navLinks.map((link) => {
            return (
              <li
                key={link.path}
                className='flex'
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
        <hr className='text-color-border mt-2' />
        <div className='flex flex-col md:flex-row gap-5 md:justify-between mt-8'>
          <div className='flex md:flex-col justify-center'>
            <Link
              href='/'
              prefetch={false}
            >
              <Image
                src={rsm}
                alt='RSM - The Site of Rajwinder Mahal'
                className='w-auto h-8 dark:invert'
              />
            </Link>
          </div>
          <div className='flex flex-wrap justify-center'>
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:bg-color-hover p-3 rounded-full'
                >
                  <link.icon className='w-auto h-6' />
                </a>
              )
            })}
          </div>
        </div>
        <div className='text-xs text-center mt-5 md:mt-8'>
          Rajwinder Mahal &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
