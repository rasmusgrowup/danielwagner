import Link from 'next/link'
import Image from 'next/image'
import hero from '../styles/hero.module.scss'
import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap';

import Arrow from '../public/Icon feather-arrow-up-right.png'

export default function HeroRight({ src, fit, position, teaser, title, text, secondText }) {
  const parallaxRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const contactRef = useRef(null);
  const a = gsap.utils.selector(contentRef);

  useEffect(() => {
    gsap.to(parallaxRef.current, {
      opacity: 1,
      duration: .6,
    });
    gsap.set(contactRef.current, {
      opacity: 0,
      y: 50,
    });
    gsap.to(contactRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'Power3.easeInOut',
    });
    gsap.set(a('.child'), {
      opacity: 0,
      y: 50,
    });
    gsap.to(a('.child'), {
      delay: 0.2,
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'Power3.easeInOut',
      stagger: 0.1,
    });
  }, [])
  return(
    <>
      <section className={`${hero.container} ${hero.rightAligned}`} ref={heroRef}>
        <div className={hero.parallax} ref={parallaxRef}>
          <Image src={src} layout='fill' objectFit={fit} objectPosition={position} quality='100' priority='true' placeholder='blur'/>
        </div>
        <div className={hero.contact} ref={contactRef}>
          <div className={hero.link}>
            <Link href='mailto:dj1leg@gmail.com'><a>Mail</a></Link>
            <Image src={Arrow} width='8' height='8'/>
          </div>
          <div className={hero.link}>
            <Link href='https://instagram.com/daniel1leg' passHref><a target='_blank'>Instagram</a></Link>
            <Image src={Arrow} width='8' height='8'/>
          </div>
          <div className={hero.link}>
            <Link href='https://www.facebook.com/daniel1leg' passHref><a target='_blank'>Facebook</a></Link>
            <Image src={Arrow} width='8' height='8'/>
          </div>
        </div>
        <div className={hero.content} ref={contentRef}>
          <span className={`${hero.teaser} child`}>{teaser}</span>
          <h1 className={`${hero.title} child`}>{title}</h1>
          <p className={`${hero.text} child`}>{text}</p>
          <p className={`${hero.text} child`}>{secondText}</p>
        </div>
      </section>
    </>
  )
}
