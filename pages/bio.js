import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

import Daniel from '../public/Daniel_wagner_spring.jpg'

export default function Bio() {
  return (
    <>
      <Hero
        src={Daniel}
        fit='cover'
        position='center'
      />
    </>
  )
}
