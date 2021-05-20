import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#010606' : 'transparent')};
  transition: all .4s ease-in-out;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1 rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  color: #f7f8fa;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`
// export const NavLogoP = styled.p`
//   display: ${({ showTitle }) => (!showTitle ? '' : 'none')};
//   opacity: ${({ showTitle }) => (!showTitle ? '100%' : '0')};
// `

export const LogoWrapper = styled.div`
  display: flex;
  justify-self: flex-start;
  align-self: center;
  color: #f7f8fa;
  width: 200px;
  flex-grow: 1;
  height: 100%;
`
export const ShowWrapper = styled(LinkR)`
text-decoration: none;
  display: flex;
  justify-self: flex-start;
  align-self: center;
  color: #f7f8fa;
  flex-direction: column;
  margin-left: 10px;
  transition: all 0.2s ease-in-out;
  /* visibility: ${({ showTitle }) => (showTitle ? 'visible' : 'hidden')}; */
  /* opacity: ${({ showTitle }) => (showTitle ? '100%' : '0')}; */

  @media screen and (max-width: 825px) {
    visibility: hidden;
  }
  @media screen and (max-width: 768px) {
    visibility: visible;
  }
  @media screen and (max-width: 400px) {
    visibility: hidden;
  }
`

export const NavTitle = styled.p`
  letter-spacing: .75px;
  font-weight: 700;
  font-size: 18px;
`
export const NavDescription = styled.p`

`

export const MobileIcon = styled.div`
  display: none;

  &:hover {
    color: #66fcf1;
  }

  @media screen and (max-width: 768px) {
    
    display: ${({ location }) => (location === 'main' ? 'block' : 'none')};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #f7f8fa;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  /* flex-grow: 1; */
  justify-content: center;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    display: ${({ location }) => (location === 'resume' ? '' : 'none')};
  }
`
export const NavItem = styled.li`
  height: 80px;
  /* width: 105px; */
  display: flex;
  justify-content: center;
`
export const NavLink = styled(LinkS)`
  color: #f7f8fa;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  

  &.active { 
    border-bottom: 4px solid #00dbcd
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  width: 200px;
  flex-grow: 1;
  justify-content: flex-end;


  @media screen and (max-width: 768px) {
    display: ${({ location }) => (location === 'resume' ? '' : 'none')};
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 10px;
  background: #00dbcd;
  white-space: nowrap;
  padding: 10px 22px;
  color: #0b0c10;
  font-size: 16px;
  outline: none;
  border: none; 
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: 2px solid transparent;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: 2px solid #f7f8fa;
    color: #f7f8fa
  }
`
export const ResBtnLink = styled.a`
  border-radius: 10px;
  background: #00dbcd;
  white-space: nowrap;
  padding: 10px 22px;
  color: #0b0c10;
  font-size: 16px;
  outline: none;
  border: none; 
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: 2px solid transparent;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: 2px solid #f7f8fa;
    color: #f7f8fa
  }
`

export const NavHome = styled(LinkR)`
  color: #f7f8fa;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

`