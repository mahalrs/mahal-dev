// Copyright 2024 The RSM Authors

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='prose prose-sm mx-auto max-w-4xl px-6 py-8 md:prose-base lg:prose-lg prose-h1:leading-[1.3] sm:p-12'>
      {children}
    </main>
  )
}
