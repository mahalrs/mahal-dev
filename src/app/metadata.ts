// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import { Metadata } from 'next'

type Image = {
  type: string
  width: number
  height: number
  alt: string
  url: string
}

type Props = {
  title: string
  description: string
  url: string
  ogImages?: Image[] | null
  twImages?: Image[] | null
}

const defaultOgImages = [
  {
    type: 'image/png',
    width: 1200,
    height: 630,
    alt: 'RSM - The Site of Rajwinder Mahal',
    url: '/opengraph-image.png',
  },
]

const defaultTwImages = [
  {
    type: 'image/png',
    width: 876,
    height: 438,
    alt: 'RSM - The Site of Rajwinder Mahal',
    url: '/twitter-image.png',
  },
]

export function getMetadata({
  title,
  description,
  url,
  ogImages,
  twImages,
}: Props): Metadata {
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
      ...(ogImages !== null ? { images: ogImages || defaultOgImages } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      ...(twImages !== null ? { images: twImages || defaultTwImages } : {}),
    },
    alternates: {
      canonical: url,
    },
  }
}
