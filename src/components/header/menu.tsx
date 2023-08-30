// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

'use client'

import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { navLinks } from './navLinks'

export function Menu() {
  const menuRef = useRef<HTMLDivElement | null>(null)

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    document.querySelector('body')!.classList.remove('mobile-menu-visible')
  }, [pathname, searchParams])

  useEffect(() => {
    const handleResize = () => {
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
        className='text-color-on-background-variant'
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
                className='hover:text-color-on-background px-4 py-2'
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

export function MenuButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [ariaLabel, setAriaLabel] = useState('open menu')

  const handleClick = () => {
    const body = document.querySelector('body')!

    if (isOpen) {
      body.classList.remove('mobile-menu-visible')
    } else {
      body.classList.add('mobile-menu-visible')
    }

    setAriaLabel(isOpen ? 'open menu' : 'close menu')
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const callback = () => {
      const body = document.querySelector('body')!

      if (!body.classList.contains('mobile-menu-visible')) {
        setAriaLabel('open menu')
        setIsOpen(false)
      }
    }

    const observer = new MutationObserver(callback)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <button
      type='button'
      aria-label={ariaLabel}
      className='lg:hidden hover:bg-color-hover p-3 rounded-full'
      onClick={handleClick}
    >
      <span
        className='w-6 h-0.5 bg-color-on-background rounded-full block transition-transform translate-y-[-4px] rotate-0'
        style={isOpen ? { transform: 'translateY(1px) rotate(45deg)' } : {}}
      />
      <span
        className='w-6 h-0.5 bg-color-on-background rounded-full block transition-transform translate-y-[4px] rotate-0'
        style={isOpen ? { transform: 'translateY(-1px) rotate(-45deg)' } : {}}
      />
    </button>
  )
}
