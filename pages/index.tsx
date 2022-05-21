import type { NextPage } from 'next'
import React, { useState } from 'react'

import Hero from '../components/hero'
import HeaderSection from '../components/header-section'
import Technologies from '../components/technologies'
import BlogSection from '../components/blog-section'
import Head from 'next/head'
import Footer from '../components/footer'

const Index: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false)
  console.warn('Show menu index.tsx: ' + showMenu)
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Kaspar Noor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderSection setShowMenu={setShowMenu} showMenu={showMenu} />
      <Hero />
      <Technologies />
      <BlogSection />
    </div>
  )
}

export default Index
