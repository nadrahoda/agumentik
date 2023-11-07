import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Section3 from '@/components/Section3'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Head>
        <title>Agumentik | Assessment</title>
    </Head>

    <Hero/>
    <About/>
    <Section3 />
    </>
  )
}
