import Image from 'next/image'
import Link from 'next/link'

export default function BackButton() {
    return (
      <>
        <Link href="/"><a className="backbutton">{'<'} {/*<Image src="/logo_white.svg" width="56" height="43"/>*/}</a></Link>
      </>
    )
}