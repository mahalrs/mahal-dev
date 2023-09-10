// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import { getMetadata } from '@app/metadata'
import Content from './content.mdx'

export const metadata = getMetadata({
  title: 'Reading List',
  description:
    'Discover essential reads for engineers, entrepreneurs, and tech enthusiasts.',
  url: '/reading-list',
  ogImages: null,
  twImages: null,
})

export default function Page() {
  return (
    <div className='px-4 sm:px-6 py-12 md:py-16'>
      <main className='mx-auto prose prose-sm md:prose-base lg:prose-lg prose-h1:leading-[1.3]'>
        <Content />
      </main>
    </div>
  )
}
