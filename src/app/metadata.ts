// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import { Metadata } from 'next'

type Props = {
  title: string
  description: string
  url: string
}

export function getMetadata({ title, description, url }: Props): Metadata {
  return {
    title: title,
    description: description,
    openGraph: {
      type: 'website',
      siteName: 'RSM',
      locale: 'en_US',
      title: title,
      description: description,
      url: url,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
    },
    alternates: {
      canonical: url,
    },
  }
}
