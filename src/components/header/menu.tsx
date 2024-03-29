// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

'use client'

import Link from 'next/link'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { navLinks } from './navLinks'

export default function Menu() {
  const menuRef = useRef<HTMLDivElement | null>(null)

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    document.querySelector('body')!.classList.remove('mobile-menu-visible')
  }, [pathname, searchParams])

  useEffect(() => {
    const handleResize = () => {
      menuRef.current!.style.height = `${window.innerHeight - 56}px`

      if (window.innerWidth >= 1024) {
        document.querySelector('body')!.classList.remove('mobile-menu-visible')
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const callback = () => {
      const body = document.querySelector('body')!

      if (body.classList.contains('mobile-menu-visible')) {
        menuRef.current!.classList.remove('hidden')
        menuRef.current!.style.height = `${window.innerHeight - 56}px`
        menuRef.current!.scrollTop = 0
      } else {
        menuRef.current!.classList.add('hidden')
      }
    }

    const observer = new MutationObserver(callback)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = () => {
    document.querySelector('body')!.classList.remove('mobile-menu-visible')
  }

  return (
    <div
      className='hidden fixed top-[56px] h-[calc(100vh-56px)] w-full p-4 sm:p-6 bg-color-background/90 backdrop-blur-sm overflow-scroll'
      ref={menuRef}
    >
      <ul
        className='text-color-on-background text-2xl font-semibold'
        onClick={handleClick}
      >
        {navLinks.map((link) => {
          return (
            <li
              key={link.path}
              className='flex flex-col'
            >
              <Link
                href={link.path}
                prefetch={false}
                className='hover:underline underline-offset-8 px-4 py-2'
              >
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
