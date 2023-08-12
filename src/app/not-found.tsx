import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex justify-center px-6 md:px-8 mt-16 mb-48 min-h-[calc(100vh-512px)]'>
      <title>404 Not Found | RSM</title>
      <div className='flex flex-col justify-center text-center'>
        <h1 className='text-4xl mb-4'>Page not found</h1>
        <p className='text-color-on-background-variant max-w-[240px] mb-8'>
          {`Sorry we couldn't find what you were looking for.`}
        </p>
        <div>
          <Link
            href='/'
            className='bg-color-primary hover:bg-color-primary-variant text-color-on-primary font-medium px-4 py-2 rounded-full inline-block'
          >
            Go to mahal.dev
          </Link>
        </div>
      </div>
    </div>
  )
}