import React from 'react'
import { Navbar, Sidebar, HeroSection, About, Footer, Contact } from '../components/'
import { useState } from 'react'
import { about, discover, portfolio, contact, aboutMe } from '../components/InfoSection/data'
import Portfolio from '../components/Portfolio'
import { colorPalette, projects } from '../Data'


const Home = () => {
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!isOpen)
  }
  console.log(projects)
  return (
    <>
      <Navbar
        toggleOpen={toggleOpen} />
      <Sidebar
        isOpen={isOpen}
        toggleOpen={toggleOpen} />
      <HeroSection />
      <About {...aboutMe} />
      <Portfolio {...projects} />
      <Contact {...colorPalette} />
      <Footer />

    </>
  )
}

export default Home
