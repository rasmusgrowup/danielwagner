import Link from 'next/link'
import Image from 'next/image'

import Arrow from '../public/Icon feather-arrow-up-right.png'
import contact from '../styles/contact.module.scss'

export default function Contact() {
  return (
    <>
      <section className={contact.container}>
        <div className={contact.inner}>
          <span className={contact.teaser}>Kontaktoplysninger</span>
          <p className={contact.about}>Daniel Wagner er dansk paralympisk atlet, med både guld-, sølv- og bronzemedaljer i 100 m. sprint og længdespring. Han er benamputeret på højre ben, og historien om dette, kan opleves i hans foredrag ‘Fra sengekanten til verdens-toppen’</p>
          <ul className={contact.list}>
            <li><Link href='mailto:agent@danielwagner.dk'><a className={contact.link}><span>+45 31 62 37 33</span><Image src={Arrow} /></a></Link></li>
            <li><Link href='mailto:agent@danielwagner.dk'><a className={contact.link}><span>Skriv mig en mail</span><Image src={Arrow} /></a></Link></li>
          </ul>
          <ul className={contact.socialList}>
            <li><Link href='/'><a className={contact.socialLink}><span>Instagram</span><Image src={Arrow} width='9' height='9'/></a></Link></li>
            <li><Link href='/'><a className={contact.socialLink}><span>Facebook</span><Image src={Arrow} width='9' height='9'/></a></Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}
