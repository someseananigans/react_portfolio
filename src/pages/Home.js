import React from 'react'
import { Navbar, Sidebar, HeroSection, About, Footer, Contact, Portfolio, Skills } from '../components/'
import { useState } from 'react'
import { aboutMe, colorPalette, projects, skills } from '../Data'


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
      <Skills {...skills} />
      <Portfolio {...projects} />
      <Contact {...colorPalette} />
      <Footer />

    </>
  )
}

export default Home
