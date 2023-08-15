import { getMetadata } from '@app/metadata'
import Content from './content.mdx'

export const metadata = getMetadata({
  title: 'Reading List',
  description:
    'Discover essential reads for engineers, entrepreneurs, and tech enthusiasts.',
  url: '/reading-list',
})

export default function Page() {
  return (
    <div className='px-4 sm:px-6 py-12 md:py-16 lg:pb-24'>
      <main className='mx-auto prose prose-sm md:prose-base lg:prose-lg'>
        <Content />
      </main>
    </div>
  )
}
