import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Error404: NextPage = () => {
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

export default Error404