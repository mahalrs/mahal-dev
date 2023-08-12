import { getMetadata } from '@app/metadata'
import Home from './home.mdx'

export const metadata = getMetadata({
  title: 'Rajwinder Mahal | RSM',
  description:
    'Rajwinder Mahal is a skilled machine learning engineer specializing in machine learning and generative AI as an MS candidate at Columbia University. Rajwinder has experience in building scalable, distributed machine learning systems and is passionate about open-source software.',
  url: '/',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'RSM',
  'legalName': 'RSM',
  'description': metadata.description,
  'url': process.env.NEXT_PUBLIC_BASE_URL!,
  'logo': `${process.env.NEXT_PUBLIC_BASE_URL}/rsm.svg`,
  'sameAs': [
    'https://www.linkedin.com/in/mahalrajwinder',
    'https://github.com/mahalrs',
  ],
}

export default function Page() {
  return (
    <div className='px-4 sm:px-6 py-12 md:py-16 lg:pb-24'>
      <main className='mx-auto prose prose-sm md:prose-base lg:prose-lg'>
        <Home />
      </main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
