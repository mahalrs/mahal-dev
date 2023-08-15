import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    a: ({ children, ...props }) => (
      <a
        {...props}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    ),
    ...components,
  }
}
