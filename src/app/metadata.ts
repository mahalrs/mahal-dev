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
