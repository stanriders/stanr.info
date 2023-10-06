import Image from 'next/image'
import Link from 'next/link'

const BackButton = () => {
    return (
      <>
        <Link href="/" className="backbutton">{'<'} {/*<Image src="/logo_white.svg" width="56" height="43"/>*/}</Link>
      </>
    )
}

export default BackButton;