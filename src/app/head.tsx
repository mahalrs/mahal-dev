import meta from './page.metadata.json'

export default function Head() {
  return (
    <>
      <title>{meta.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="description" content={meta.description} />
      <link rel="canonical" href="https://www.mahal.dev" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
