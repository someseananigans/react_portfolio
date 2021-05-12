import React from 'react'
import { FootContainer, FooterWrap, LinksContainer, LinksWrapper, LinkItems, LinkTitle, FootLink, SocialMedia, SocialWrap, SocialLogo, WebsiteRights, SocialIcons, IconLink } from './FooterElements'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { animateScroll as scroll } from 'react-scroll'


const Footer = ({ location }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FootContainer>
      <FooterWrap>
        {/* <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About1 Us</LinkTitle>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
            </LinkItems>
            <LinkItems>
              <LinkTitle>About2 Us</LinkTitle>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
            </LinkItems>
          </LinksWrapper>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About1 Us</LinkTitle>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
            </LinkItems>
            <LinkItems>
              <LinkTitle>About2 Us</LinkTitle>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
              <FootLink to="/destination">Link</FootLink>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer> */}
        <SocialMedia>
          <SocialWrap>
            {/* <SocialLogo to='/' onClick={toggleHome}>Sean</SocialLogo>
            <SocialIcons>
              <IconLink href='/' target='_blank' aria-label='LinkedIn'>
                <FaLinkedin />
              </IconLink>
              <IconLink href='/' target='_blank' aria-label='GitHub'>
                <FaGithub />
              </IconLink>
              <IconLink href='/' target='_blank' aria-label='Email'>
                <HiOutlineMail />
              </IconLink>
              <IconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </IconLink>
            </SocialIcons> */}
            <WebsiteRights style={{ cursor: "pointer" }} onClick={toggleHome}>&copy; {new Date().getFullYear()} Sean Nguyen All rights reserved</WebsiteRights>

          </SocialWrap>
        </SocialMedia>
      </FooterWrap>
    </FootContainer>
  )
}

export default Footer
