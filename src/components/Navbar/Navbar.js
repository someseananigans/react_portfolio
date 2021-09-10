import { useState, useEffect } from 'react'
import {
  Nav, NavContainer, NavLogo,
  MobileIcon, NavMenu, NavItem, NavLink, NavHome,
  NavBtn, NavBtnLink, ResBtnLink, NavTitle, NavDescription, LogoWrapper, ShowWrapper, SideNavScroll, NavIcon, NavSubtitle, NavSubWrapper,
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../images/logo.png'
import resume from '../../images/Resume.pdf'


const Navbar = ({ toggleOpen, location }) => {
  const [scrollNav, setScrollNav] = useState(false)
  // const [showTitle, setShowTitle] = useState(false)

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
  // const changeShowTitle = () => {
  //   if (window.scrollY >= 860) {
  //     setShowTitle(true)
  //   } else {
  //     setShowTitle(false)
  //   }
  // }

  useEffect(() => {
    if (location === 'resume' || location === '404') {
      setScrollNav(true)
    }
    window.addEventListener('scroll', changeNav)
    // window.addEventListener('scroll', changeShowTitle)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav scrollNav={location === '404' ? true : scrollNav}>
        <NavContainer>

          <LogoWrapper>
            <NavLogo to="/" onClick={toggleHome}>
              <img height='50px' src={logo} alt="logo" />
              {/* <NavLogoP showTitle={showTitle}>Sean</NavLogoP> */}
            </NavLogo>
            <ShowWrapper to="/" onClick={toggleHome} >
              {/* showTitle={showTitle} */}
              <NavTitle>Sean</NavTitle>
              <NavDescription>Full Stack Developer</NavDescription>
            </ShowWrapper>
          </LogoWrapper>

          <MobileIcon location={location} onClick={toggleOpen}>
            <FaBars />
          </MobileIcon>
          <NavBtn location={location}>
            <NavMenu location={location}>
              {location === 'main' && (
                <>
                  {/* <NavItem>
                    <NavLink
                      to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      // exact={true}
                      offset={-40}
                    >About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="discover"
                      smooth={true}
                      duration={500}
                      spy={true}
                      // exact={true}
                      offset={-40}
                    >Skills</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="portfolio"
                      smooth={true}
                      duration={500}
                      spy={true}
                      // exact={true}
                      offset={-40}
                    >Portfolio</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      spy={true}
                      // exact={true}
                      offset={-40}
                    >Contact</NavLink>
                  </NavItem> */}
                </>
              )}
              {location === 'resume' && (
                <NavItem>
                  <NavHome to="/">Home</NavHome>
                </NavItem>
              )}
            </NavMenu>

            {location === 'main' && (<NavBtnLink to="/resume" >Resume</NavBtnLink>)}
            {location === 'resume' && (<ResBtnLink href={resume} download="Sean_Nguyen - Resume2021" >Download</ResBtnLink>)}
            {location === '404' && (<NavBtnLink to="/" >Home</NavBtnLink>)}

          </NavBtn>

        </NavContainer>
      </Nav>

      {location === 'main' && (
        <SideNavScroll>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              // exact={true}
              offset={-40}
            >
              <NavIcon></NavIcon>
              <NavSubWrapper>
                <NavSubtitle>About</NavSubtitle>
              </NavSubWrapper>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="discover"
              smooth={true}
              duration={500}
              spy={true}
              // exact={true}
              offset={-40}
            >
              <NavIcon></NavIcon>
              <NavSubWrapper>
                <NavSubtitle>Skills</NavSubtitle>
              </NavSubWrapper>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              // exact={true}
              offset={-40}
            >
              <NavIcon></NavIcon>
              <NavSubWrapper>
                <NavSubtitle>Portfolio</NavSubtitle>
              </NavSubWrapper>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              // exact={true}
              offset={-40}
            >
              <NavIcon></NavIcon>
              <NavSubWrapper>
                <NavSubtitle>Contact</NavSubtitle>
              </NavSubWrapper>
            </NavLink>
          </NavItem>
        </SideNavScroll>
      )}


    </>
  )
}

export default Navbar