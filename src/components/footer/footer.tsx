import Image from 'next/image'
import { GitHubIcon, LinkedInIcon } from '@components/icons'
import rsm from '@public/rsm.svg'

export default function Footer() {
  return (
    <div className='flex justify-center bg-black dark:bg-[#121212] text-white px-6 sm:px-8 py-6 sm:py-8 md:py-10'>
      <footer className='w-full h-full max-w-screen-xl'>
        <div className='md:flex md:justify-between'>
          <section className='flex justify-center py-2 sm:py-4'>
            <a href='/'>
              <Image
                src={rsm}
                alt='RSM - Rajwinder Mahal Logo'
                className='w-auto h-8 md:h-12 invert'
              />
            </a>
          </section>
          <section className='flex justify-center gap-3 md:gap-4 py-2 sm:py-4'>
            <a
              href='https://www.linkedin.com/in/mahalrajwinder'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon className='w-auto h-6 md:h-8 hover:opacity-50'/>
            </a>
            <a
              href='https://github.com/mahalrs'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon className='w-auto h-6 md:h-8 hover:opacity-50'/>
            </a>
          </section>
        </div>
        <div className='flex justify-center py-2 sm:py-4 text-sm text-[#cececd]'>
          Rajwinder Mahal &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
