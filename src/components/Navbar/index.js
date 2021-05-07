import { useState, useEffect } from 'react'
import {
  Nav, NavContainer, NavLogo,
  MobileIcon, NavMenu, NavItem, NavLink,
  NavBtn, NavBtnLink, NavTitle, NavDescription, LogoWrapper, ShowWrapper
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ({ toggleOpen }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const [showTitle, setShowTitle] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  const changeShowTitle = () => {
    if (window.scrollY >= 860) {
      setShowTitle(true)
    } else {
      setShowTitle(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    window.addEventListener('scroll', changeShowTitle)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>

          <LogoWrapper>
            <NavLogo to="/" onClick={toggleHome}>Sean</NavLogo>
            <ShowWrapper showTitle={showTitle}>

              <NavTitle>Sean</NavTitle>
              <NavDescription>Full Stack Developer</NavDescription>
            </ShowWrapper>
          </LogoWrapper>

          <MobileIcon onClick={toggleOpen}>
            <FaBars />
          </MobileIcon>
          <NavBtn>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >Discover</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >Contact</NavLink>
              </NavItem>
            </NavMenu>
            <NavBtnLink to="" >Resume</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar