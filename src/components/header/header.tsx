import Image from 'next/image'
import { GitHubIcon } from '@components/icons'
import rsm from '@public/rsm.svg'
import rsmLogo from '@public/rsm-logo.svg'

export default function Header() {
  return (
    <div className='flex justify-center sticky top-0 px-6 sm:px-8 py-3 md:py-4 bg-white/95 dark:bg-[#161617]/95 text-black dark:text-white shadow-[inset_0_-1px_0_0_#e5e5e4] dark:shadow-[#373636]'>
      <header className='flex flex-row justify-between w-full h-full max-w-screen-xl'>
        <section>
          <a href='/'>
            <Image
              src={rsm}
              alt='RSM - Rajwinder Mahal Logo'
              className='w-auto h-6 md:h-8 md:hidden dark:invert'
              priority
            />
            <Image
              src={rsmLogo}
              alt='RSM - Rajwinder Mahal Logo'
              className='w-auto h-6 md:h-8 hidden md:block dark:invert'
              priority
            />
          </a>
        </section>
        <section>
          <div>
            <a
              href='https://github.com/mahalrs'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon className='w-auto h-6 md:h-8 hover:opacity-50' />
            </a>
          </div>
        </section>
      </header>
    </div>
  )
}
