import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { Form } from '../components/ContactForm/Form'

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <Form />
      <Footer />
    </div>
  )
}
