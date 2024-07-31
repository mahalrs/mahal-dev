// Copyright 2024 The RSM Authors

import Image from 'next/image'
import NextLink from 'next/link'

import Rsm from '@static/rsm.svg'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 h-12 bg-background/90 px-1 shadow-[inset_0_-1px_0] shadow-default-200 backdrop-blur-sm lg:h-14 lg:px-3'>
      <div className='mx-auto flex max-w-screen-xl lg:py-1'>
        <NextLink
          href='/'
          prefetch={false}
          className='p-3'
        >
          <Image
            src={Rsm}
            alt='RSM - The Site of Rajwinder Mahal'
            className='h-6 w-auto'
            priority={false}
          />
        </NextLink>
      </div>
    </header>
  )
}
