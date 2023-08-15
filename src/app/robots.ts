// Copyright 2023 The RSM Authors.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}
