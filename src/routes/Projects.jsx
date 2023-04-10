import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { ProjectsContent } from '../components/ProjectsContent/ProjectsContent'
// import { ProjectCards } from '../components/ProjectCards/ProjectCards'
import { Work } from '../components/Work/Work'

export const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectsContent 
        heading='PROJECTS' 
        text='Some of my most recent works'
      />
      <Work />
      <Footer />
    </div>
  )
}
