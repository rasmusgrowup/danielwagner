import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Quote from '../components/Quote'

import index from '../styles/index.module.scss'
import Daniel from '../public/Daniel_wagner_stairs_2.jpg'
import Dubai from '../public/Daniel_wagner_Dubai_world_para_athletics_2019.jpg'

export default function Home() {
  return (
    <>
      <Hero
        src={Daniel}
        fit='cover'
        position='center'
        teaser='Oplev mit foredrag'
        title='Fra sengekanten til verdens-toppen'
        text='Hvad gør man som lovende gymnast når hele livet bliver vendt på hovedet på et splitsekund? Gør ingenting og lade livet passere forbi, eller tage tyren ved hornene og skabe et liv, ingen havde troet på?'
        secondText='Kom med på en inspirerende og levende rejse, hvor Daniel Wagner tager dig med lige fra sengekanten på hospitalet til den store scene ved de Paralympiske lege, og hør om alle de udfordringer og muligheder sådan en rejse kaster af sig.'
      />
      <section className={index.excerpt}>
        <div className={index.figure}>
          <figure>
            <Image src={Dubai} width='900' height='720' objectFit='cover' objectPosition='100' placeholder='blur'/>
            <figcaption>2019 Dubai World Para Athletics</figcaption>
          </figure>
        </div>
        <div className={index.text}>
          <p>I foredraget vil i få indsigt i Daniels udfordringer og bedrifter, både på et sportsligt og menneskeligt plan. Daniel fortæller en engagerende og inspirerende historie, der handler om at se muligheder i de daglige udfordringer, i stedet for begrænsninger.</p>
        </div>
      </section>
      <Quote
        text='&quot;Med foredraget håber jeg, at jeg kan inspirere jer til at vende jeres modgang til medgang, og se muligheder i stedet for begrænsinger. For mig har sporten været min motivation for at se fremad —  og her igennem har jeg lært at bruge min situation til min fordel. Den erfaring vil jeg gerne give videre.&quot;'
        credits='Daniel Wagner'
      />
    </>
  )
}
