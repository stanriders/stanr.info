import Head from 'next/head'
import Link from 'next/link'

export default function Error404() {
  return (
    <>
      <Head>
        <title>StanR - 404</title>
      </Head>

      <h2>
        Not Found
      </h2>
      <Link href="/">{'<'}</Link>
    </>
  )
}