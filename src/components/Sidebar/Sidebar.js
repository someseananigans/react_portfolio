import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements'
import { SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggleOpen }) => {


  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              onClick={toggleOpen}>About</SidebarLink>
            <SidebarLink
              to="discover"
              onClick={toggleOpen}>Discover</SidebarLink>
            <SidebarLink
              to="portfolio"
              onClick={toggleOpen}>Portfolio</SidebarLink>
            <SidebarLink
              to="contact"
              onClick={toggleOpen}>Contact</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/resume">Resume</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
