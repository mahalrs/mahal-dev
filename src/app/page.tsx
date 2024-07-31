// Copyright 2024 The RSM Authors

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rajwinder Mahal · RSM',
  description:
    "Rajwinder Mahal is a skilled machine learning engineer, passionate about open-source software. Learn more about Rajwinder's interests and explore his insights on machine learning, startups, and more.",
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return <main>RSM</main>
}
