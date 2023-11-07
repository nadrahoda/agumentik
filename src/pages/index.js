import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Section3 from '@/components/GIF'
import Monday from '@/components/GetStarted'
import Footer from '@/components/Footer'

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
    <Monday/>
    <Footer/>
    </>
  )
}
