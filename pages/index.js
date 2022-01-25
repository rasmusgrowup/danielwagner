import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Quote from '../components/Quote'

import index from '../styles/index.module.scss'
import Daniel from '../public/Daniel_wagner_toyota.jpg'
import Dubai from '../public/Daniel_wagner_Dubai_world_para_athletics_2019.jpg'

export default function Home() {
  return (
    <>
      <Hero
        src={Daniel}
        fit='cover'
        position='center'
        teaser='Oplev min personlige historie'
        title='Vejen frem'
        text='I foredraget ‘vejen frem’ fortæller Daniel om sin kamp for at rejse sig igen, efter at han som 14-årig mistede sit højre ben i en trampolinulykke. Daniel har med disciplin og viljestyrke bevist at det er muligt at blive eliteatlet — selv med et amputeret ben — og er nu blevet en af parasportens dygtigste atleter.'
        secondText='I foredraget vil i opleve Daniels inspirerende historie, der handler om, hvordan man håndterer modgang i en ung alder, og ved aldrig at give op, kan opnå storhed mod selv de sværeste odds.'
      />
      <section className={index.excerpt}>
        <div className={index.figure}>
          <figure>
            <Image src={Dubai} width='900' height='720' objectFit='cover' objectPosition='100' placeholder='blur'/>
            <figcaption>2019 Dubai World Para Athletics</figcaption>
          </figure>
        </div>
        <div className={index.text}>
          <p>I foredraget vil i få indsigt i Daniels bedrifter, hvordan han har håndteret sin ulykke, og hvordan man kan vende en udfordring til en sejr. Historien byder også på et  indblik i de nyeste proteseteknologier, hvad det kræver at være elitesportsudøver og hvad fremtiden bringer for Daniel Wagner.</p>
        </div>
      </section>
      <Quote
        text='"Grunden til at jeg er kommet langt inden for parasporten, er fordi jeg har været god til at bruge mit handicap, i stedet for at sætte det til side. I foredraget kan i opleve min kamp, mine aha-oplevelser og mine sejre."'
        credits='Daniel Wagner'
      />
    </>
  )
}
