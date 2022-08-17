import Image from 'next/image'
import Link from 'next/link'
import hero from '../styles/hero.module.scss'
import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap';

export default function Hero({ src, fit, position, teaser, title, text, secondText }) {
  const parallaxRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const bookRef = useRef(null);
  const a = gsap.utils.selector(contentRef);

  useEffect(() => {
    gsap.to(parallaxRef.current, {
      opacity: 1,
      duration: .6,
    });
    gsap.set(bookRef.current, {
      opacity: 0,
      y: 50,
    });
    gsap.to(bookRef.current, {
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
      <section className={hero.container} ref={heroRef}>
        <div className={hero.parallax} ref={parallaxRef}>
          <Image src={src} layout='fill' objectFit={fit} objectPosition={position} quality='100' priority='true' placeholder='blur'/>
        </div>
        <div className={hero.bookWrapper}>
          <div className={hero.book} ref={bookRef}>
            <Link href='mailto:dj1leg@gmail.com'><a>Book mit foredrag</a></Link>
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
