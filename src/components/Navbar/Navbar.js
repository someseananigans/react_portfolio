import { useState, useEffect } from 'react'
import {
  Nav, NavContainer, NavLogo,
  MobileIcon, NavMenu, NavItem, NavLink, NavHome,
  NavBtn, NavBtnLink, NavTitle, NavDescription, LogoWrapper, ShowWrapper, NavLogoP
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../images/logo.png'


const Navbar = ({ toggleOpen, location }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const [showTitle, setShowTitle] = useState(false)

  const changeNav = () => {
    if (location === 'resume') {
      setScrollNav(true)
    }
    else if (window.scrollY >= 80) {
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
    if (location === 'resume') {
      setScrollNav(true)
    }
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
            <NavLogo to="/" onClick={toggleHome}>
              <img height='50px' src={logo} alt="logo" />
              {/* <NavLogoP showTitle={showTitle}>Sean</NavLogoP> */}
            </NavLogo>
            <ShowWrapper showTitle={showTitle}>
              <NavTitle>Sean</NavTitle>
              <NavDescription>Full Stack Developer</NavDescription>
            </ShowWrapper>
          </LogoWrapper>

          <MobileIcon location={location} onClick={toggleOpen}>
            <FaBars />
          </MobileIcon>
          <NavBtn location={location}>
            <NavMenu location={location}>
              {location === 'main' ? (
                <>
                  <NavItem>
                    <NavLink
                      to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      // exact={true}
                      offset={-80}
                    >About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="discover"
                      smooth={true}
                      duration={500}
                      spy={true}
                      // exact={true}
                      offset={-80}
                    >Discover</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="portfolio"
                      smooth={true}
                      duration={500}
                      spy={true}
                      // exact={true}
                      offset={-80}
                    >Portfolio</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      spy={true}
                      // exact={true}
                      offset={-80}
                    >Contact</NavLink>
                  </NavItem>
                </>
              ) : (
                <NavItem>
                  <NavHome to="/">Home</NavHome>
                </NavItem>
              )}
            </NavMenu>

            {location === 'main' ?
              (<NavBtnLink to="/resume" >Resume</NavBtnLink>) :
              (<NavBtnLink to="insert Download" >Download</NavBtnLink>)
            }

          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar