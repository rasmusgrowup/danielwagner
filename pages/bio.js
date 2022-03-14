import Head from 'next/head'
import Image from 'next/image'

import Hero from '../components/HeroRight'
import Quote from '../components/Quote'
import Daniel from '../public/Daniel_wagner_spring.jpg'
import Forward from '../public/Daniel_wagner_forward.jpg'
import Ulykke from '../public/Daniel_wagner_ulykke_2.jpg'
import Ossur from '../public/Daniel_wagner_ossur.jpg'
import Bydgoszcz from '../public/Tokyo-paralympics.jpg'
import bio from '../styles/bio.module.scss'

import Achievements from '../components/Achievements'

export default function Bio() {
  return (
    <>
      <Hero
        src={Daniel}
        fit='cover'
        position='25% 15%'
        teaser='Bio'
        title='Om Daniel Wagner'
        text='Daniel Wagner er en af verdens absolut bedste paraatleter. Han er guldvinder i både sprint og længdespring, og deltager i de største mesterskaber indenfor paraatletik verden over. En ulykke ved en gymnastikopvisning i 2008 i hans hjemby Vejle gjorde, at hans højre ben måtte amputeres, og på et splitsekund blev Daniels liv vendt på hovedet.'
        secondText='Daniel har med en vilje af stål og disciplin vendt sin modgang til medgang — og er blevet en inspiration for rigtig mange mennesker. Daniel er med til at skubbe til grænsen for, hvad der er muligt at opnå som parasportsudøver. Med hans resultater og person, er han med til at redefinere, hvordan vi opfatter paraatleter i Danmark, og resten af verden.'
      />
      <section className={bio.biography}>
        <span className={bio.teaser}>Biografi</span>
        <div className={bio.inner}>
          <div className={bio.ulykke}>
            <div className={bio.ulykkeInner}>
              <figure>
                <Image src={Ulykke} width='624' height='351' objectFit='cover' objectPosition='100' placeholder='blur'/>
                <figcaption>Daniel efter sin ulykke som 14-årig</figcaption>
              </figure>
            </div>
            <div className={bio.ulykkeText}>
              <p>Daniel mister sit ben som 14-årig i en trampolinulykke ved en gymnastikopvisning i sin hjemby. Blot tre uger efter at han fik fjernet sine sting, hoppede han tilbage på trampolinen og tog et modigt skridt fremad — en baglæns saltomortale på ét ben. Siden da har Daniel ikke set sig tilbage.</p>
            </div>
          </div>
          <div className={bio.ossur}>
            <div className={bio.ossurInner}>
              <figure>
                <Image src={Ossur} width=' 900' height='900' objectFit='cover' objectPosition='100' placeholder='blur'/>
                <figcaption>Daniels protese består af tre dele — et Sahva hylster, et hydraulisk knæ og en Össur fod</figcaption>
              </figure>
            </div>
            <div className={bio.ossurText}>
              <p>Daniel benytter sig af en avanceret sportsprotese, der er udviklet i samarbejde med Össur og Sahva. Foden er lavet af kulfiber, og hæftes fast på benstumpen ved hjælp af et vakuum. Når protesen er justeret korrekt, bliver den en forlængelse af Daniels krop — selv ser han det som et samspil mellem menneske og maskine. </p>
            </div>
          </div>
          <div className={bio.world}>
          <div className={bio.worldText}>
            <p>Daniel har bevist at man ved at udvise disciplin, tro og viljestyrke kan overkomme enhver udfordring. Daniel er både guld-, sølv- og bronzevinder i disciplinerne 100 meter sprint og længdespring, og repræsenterer Danmark ved verdensmesterskaberne i paraatletik, samt de Paralympiske Lege.</p>
          </div>
            <div className={bio.worldInner}>
              <figure>
                <Image src={Bydgoszcz} width='1000' height='1352' objectFit='cover' objectPosition='left top' placeholder='blur'/>
                <figcaption>Tokyo 2020 Paralympics</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Quote text='"Selvfølgelig vil jeg gerne have funktionaliten fra mit gamle ben tilbage, men jeg vil aldrig bytte det, for den person jeg er blevet til, og de muligheder jeg har skabt for mig selv"' credits='Daniel' />
      <section  className={bio.video}>
        <div className={bio.videoInner}>
          <video
            autoPlay
            muted
            loop
            playsInline
            width='100%'
            height='100%'
            style={{ objectFit: 'cover' }}
            >
            <source src={'/Final_100m_long.mp4'} type='video/mp4' />
          </video>
          <span>Men’s 100m T63 Final — Dubai 2019</span>
        </div>
        <div className={bio.videoText}>
          <p>100 meter finalen til VM i Dubai i 2019 var et drama uden lige. Daniel blev nærmest kørt ind til 100-meter startstregen i en kørestol med en selvtillid i bund. Men han gravede dybt da det gjaldt, og overraskede alt og alle med sit resultat — inklusiv ham selv</p>
        </div>
      </section>
      <Achievements />
      <Quote text='"Jeg føler at jeg er lykkes og har rejst mig — kommet stærkere ud på den anden side. Og det synes jeg er smukt, når man har været ude for noget så tragisk, som at miste sit ben som 14-årig."' credits='Fra interview i P3 x viden' />
    </>
  )
}
