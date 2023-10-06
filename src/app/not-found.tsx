import type { NextPage, Metadata } from 'next'
import BackButton from '@/components/backButton'

export const metadata: Metadata = {
  title: 'Projects'
};

const Error404: NextPage = () => {
  return (
    <>
    <BackButton />
      <h2>
        Not Found
      </h2>
    </>
  )
}

export default Error404