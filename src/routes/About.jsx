import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { AboutContent } from '../components/AboutContent/AboutContent'
import { AboutInfo } from '../components/AboutInfo/AboutInfo'

export const About = () => {
  return (
    <div>
      <Navbar />
      <AboutContent heading={'ABOUT ME'} text={`I am a Front-End Developer`}/>
      <AboutInfo />
      <Footer />
    </div>
  )
}
