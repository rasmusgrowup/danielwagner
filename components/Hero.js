import Image from 'next/image'
import hero from '../styles/hero.module.scss'
import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Hero({ src, fit, position }) {
  const parallaxRef = useRef(null);
  const heroRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(parallaxRef.current, {
      y: 200,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, [])
  return(
    <>
      <section className={hero.container} ref={heroRef}>
        <div className={hero.parallax} ref={parallaxRef}>
          <Image src={src} layout='fill' objectFit={fit} objectPosition={position} quality='100' priority='true'/>
        </div>
      </section>
    </>
  )
}
