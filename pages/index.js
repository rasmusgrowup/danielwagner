import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

import Daniel from '../public/Daniel_wagner_toyota.jpg'

export default function Home() {
  return (
    <>
      <Hero src={Daniel} fit='cover' position='center'/>
    </>
  )
}
