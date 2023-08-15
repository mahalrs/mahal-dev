// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import { getMetadata } from '@app/metadata'
import Content from './content.mdx'

export const metadata = getMetadata({
  title: 'About Rajwinder Mahal',
  description:
    'Rajwinder Mahal is a skilled machine learning engineer specializing in machine learning and generative AI as an MS candidate at Columbia University. Rajwinder has experience in building scalable, distributed machine learning systems and is passionate about open-source software.',
  url: '/about',
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
