import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { HomeContent } from '../components/HomeContent/HomeContent'
import { Footer } from '../components/Footer/Footer'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeContent />
      <Footer />
    </div>
  )
}
