import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Sponsors from '../public/sponsor_logos.png'
import footer from '../styles/footer.module.scss'

export default function Footer() {
  return(
    <>
      <footer className={footer.main}>
        <div className={footer.bottom}>
          <div className={footer.sponsors}><Image src={Sponsors} /></div>
          ©{new Date().getFullYear()} Daniel Wagner — Webdesign af
          <Link href='https://growupstudio.dk'><a> Growup Studio.</a></Link>
        </div>
      </footer>
    </>
  )
}
