// Copyright 2024 The RSM Authors

import type { MDXComponents } from 'mdx/types'

import { Link } from '@nextui-org/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => {
      const url = new URL(href as string, process.env.NEXT_PUBLIC_BASE_URL)
      const isInternal =
        url.origin === process.env.NEXT_PUBLIC_BASE_URL ||
        url.protocol === 'mailto:' ||
        url.protocol === 'tel:'

      return (
        <Link
          href={url.toString()}
          isExternal={!isInternal}
          showAnchorIcon={!isInternal}
        >
          {children}
        </Link>
      )
    },
    ...components,
  }
}
