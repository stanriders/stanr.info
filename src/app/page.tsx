import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faVk, faLinkedin, faSteam, faTwitch } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <>
      <div className="homepage pulse">
        <Image src="/logo_white.svg" width='330' height='226' alt="StanR"/>
        <h2><Link href="/projects">projects</Link> / <Link href="/music">music</Link></h2>
        <div>
          <a href="mailto:hi@stanr.info"><FontAwesomeIcon icon={faEnvelope} className="icon" /></a>
          <a href="https://www.linkedin.com/in/ilya-rassolov/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
        </div>
      </div>
    </>
  )
}

export default Home
