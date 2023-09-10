// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

'use client'

import { useEffect, useState } from 'react'

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [ariaLabel, setAriaLabel] = useState('open menu')

  const handleClick = () => {
    const body = document.querySelector('body')!

    if (isOpen) {
      body.classList.remove('mobile-menu-visible')
    } else {
      body.classList.add('mobile-menu-visible')
      window.scrollTo(0, 0)
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
