import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../globalStyles'
import { FaMagento, FaTimes, FaBars } from 'react-icons/fa'


const Navbar = ({ logo, colorScheme }) => {
  // state to manage the current activePage
  const [locationState, setLocationState] = useState({
    activePage: '',
  })

  const [click, setClick] = useState(false)

  // grabs the current route path when hit and set's activePage to that route
  let path = ''
  let location = useLocation()
  useEffect(() => {
    location.pathname == '/' ? path = 'about' : path = location.pathname.slice(1)
    setLocationState({ activePage: path })
  }, [])

  // when route "buttons" clicked, activePage is set to that "route"
  const handleLinkClick = ({ target }) => {
    setLocationState({ activePage: target.parentNode.id })
  }

  const handleHamClick = () => { setClick(!click) }

  const closeMobMenu = () => {
    setClick(false)
    setLocationState({ activePage: 'about' })
  }

  return (
    <>
      <Nav color={colorScheme}>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobMenu} >
            <NavIcon src={logo} alt="logo" />
            <TextWrapper>
              <NavHead>Sean</NavHead>
              <NavSubline>Full Stack Developer</NavSubline>
            </TextWrapper>
          </NavLogo>
          <Hamburger onClick={handleHamClick}>
            {click ? <FaTimes /> : <FaBars />}
          </Hamburger>
          <NavMenu onClick={handleHamClick} click={click} color={colorScheme}>
            <NavItem
              id="about"
              active={locationState.activePage}
              color={colorScheme}>
              <NavLink
                to='/'
                onClick={handleLinkClick}
                color={colorScheme}>about</NavLink>
            </NavItem>
            <NavItem
              id="portfolio"
              active={locationState.activePage}
              color={colorScheme}>
              <NavLink
                to='/portfolio'
                onClick={handleLinkClick}
                color={colorScheme}>portfolio</NavLink>
            </NavItem>
            <NavItem
              id="resume"
              active={locationState.activePage}
              color={colorScheme}>
              <NavLink
                to='/resume'
                onClick={handleLinkClick}
                color={colorScheme}>resume</NavLink>
            </NavItem>
            <NavItem
              id="contact"
              active={locationState.activePage}
              color={colorScheme}>
              <NavLink
                to='/contact'
                onClick={handleLinkClick}
                color={colorScheme}>contact</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

const Nav = styled.nav`
background: ${({color}) => color[0]};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`
const NavbarContainer = styled(Container)`
display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`
const NavIcon = styled.img`
  margin-right: .5rem;
  height: 50px;
  width: auto;
`
const NavHead = styled.h3`
  font-weight: 500;
  font-size: 22px;
`
const NavSubline = styled.p`
  font-size: 16px;
`
const Hamburger = styled.div`
color: white;
display: none;
height: 100%;

@media screen and (max-width: 960px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 40%);
  font-size: 1.8rem;
  cursor: pointer;
}
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0;
  position: absolute;
  top: 80px;
  /* if click, I want value to show else, I want it to dissappear */
  left: -100%;
  transition: transform .5s ease-in-out;
  transform: ${({ click }) => (click ? 'translateX(100%)' : 'translateX(-100%)')};
  opacity: .99;
  background: ${({ color }) => (color[0])};
}
`
const NavItem = styled.li`
  display: flex;
  justify-content: center;
  height: 70px;
  border-bottom: ${({ active, id, color }) => (active == id && `2px solid`+color[3])};

&:hover {
  
}

@media screen and (max-width: 960px) {
  width: 150px;
  border-bottom: ${({ active, id, color }) => (active == id && `2px solid`+color[3])};
}
`

const NavLink = styled(Link)`
  color: #fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  transition: transform 150ms;
  will-change: transform;

  &:hover {
    transform: translateY(3px);
  }

@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
  font-size: 27px;

  &:hover {
    color: ${({color}) => color[3]}
    transition: all 0.3s ease;
  }
`