import React from 'react'
import { Navbar, Sidebar, HeroSection, About, Footer, Contact, Portfolio, Skills, SpinnerLoad } from '../components'
import { useState, useEffect } from 'react'
import { aboutMe, colorPalette, projects, skills, font } from '../Data'
import { Appear } from '../components/SpinnerLoad/SpinElements'

const Home = () => {
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!isOpen)
  }

  const [isLoading, setLoading] = useState(true)
  const [back, setBack] = useState(false)

  useEffect(() => {
    document.title = 'Portfolio - Sean Nguyen'
    setLoading(true)
    setBack(false)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    setTimeout(() => {
      setBack(true)
    }, 3000);
  }, [])

  return (
    <>
      <SpinnerLoad back={back} />

      <Appear isLoading={isLoading}>

        <Navbar
          toggleOpen={toggleOpen}
          location="main" />
        <Sidebar
          isOpen={isOpen}
          toggleOpen={toggleOpen} />
        <HeroSection />
        <About {...aboutMe} font={font} />
        <Skills {...skills} font={font} />
        <Portfolio projects={projects} font={font} />
        <Contact {...colorPalette} font={font} />
        {/* <Footer /> */}
      </Appear>

    </>
  )
}

export default Home

