import React from 'react'
import { PortContainer, PortH1, PortWrapper, PortCard, PortIcon, PortH2, Portp, Wrapper, Overlay, IconWrapper, TechIcon, PortLinkButton, DetailWrap, TopLine, AList, TipText } from './PortfolioElements'
import { SiJavascript, SiHtml5, SiMongodb, SiReact, SiNodeDotJs, SiFirebase, SiGithub } from 'react-icons/si'
import { TiCss3 } from 'react-icons/ti'
import { HiDatabase, HiLink } from 'react-icons/hi'
import { FaPassport } from 'react-icons/fa'

const Portfolio = ({ p1, p2, p3 }) => {
  return (
    <PortContainer id='portfolio'>
      <TopLine>My Portfolio</TopLine>
      <PortH1>Experience</PortH1>

      <PortWrapper>

        <Wrapper imgFirst={true}>

          <PortCard>
            <PortIcon src={p1.image} bgColor={'linear-gradient(21deg, #d1a6ff, #ffd5d5)'} />
            <Overlay>
              <PortH2>{p1.title}</PortH2>
              <PortLinkButton href={p1.deploy} target='_blank' aria-label="Bartender's Friend">
                <HiLink />
              </PortLinkButton>
              <PortLinkButton href={p1.github} target='_blank' aria-label='Github - Bartender'>
                <SiGithub />
              </PortLinkButton>
            </Overlay>
          </PortCard>

          <DetailWrap>
            <AList>
              <Portp>{p1.description}</Portp>
              <Portp style={{ marginTop: '13px' }}>
                <strong>Features: </strong>
                <span style={{ display: 'inline-block' }}>{p1.features}</span>
              </Portp>
            </AList>
            <IconWrapper>
              <TechIcon>
                <SiHtml5 />
                <TipText>HTML5</TipText>
              </TechIcon>
              <TechIcon>
                <TiCss3 />
                <TipText>CSS3</TipText>
              </TechIcon>
              <TechIcon>
                <SiJavascript />
                <TipText>JavaScript</TipText>
              </TechIcon>
            </IconWrapper>
          </DetailWrap>

        </Wrapper>

        <Wrapper imgFirst={true}>
          <PortCard>
            <PortIcon src={p2.image} bgColor={'linear-gradient(21deg, #2e94ff, #1fe6ff)'} />
            <Overlay>
              <PortH2>{p2.title}</PortH2>
              <PortLinkButton href={p2.deploy} target='_blank' aria-label='FreeMarket'>
                <HiLink />
              </PortLinkButton>
              <PortLinkButton href={p2.github} target='_blank' aria-label='Github - FreeMarket'>
                <SiGithub />
              </PortLinkButton>
            </Overlay>
          </PortCard>
          <DetailWrap>
            <AList>
              <Portp>{p2.description}</Portp>
              <Portp style={{ marginTop: '13px' }}>
                <strong>Features: </strong>
                <span style={{ display: 'inline-block' }}>{p2.features}</span>
              </Portp>
            </AList>
            <IconWrapper>
              <TechIcon>
                <SiHtml5 />
                <TipText>HTML5</TipText>
              </TechIcon>
              <TechIcon>
                <TiCss3 />
                <TipText>CSS3</TipText>
              </TechIcon>
              <TechIcon>
                <SiJavascript />
                <TipText>JavaScript</TipText>
              </TechIcon>
              <TechIcon>
                <HiDatabase />
                <TipText>MySQL</TipText>
              </TechIcon>
              <TechIcon>
                Ex
                <TipText>ExpressJS</TipText>
              </TechIcon>
              <TechIcon>
                <SiNodeDotJs />
                <TipText>NodeJS</TipText>
              </TechIcon>
              <TechIcon>
                <FaPassport />
                <TipText>Passport JWT</TipText>
              </TechIcon>
              <TechIcon>
                <SiFirebase />
                <TipText>Firebase</TipText>
              </TechIcon>
            </IconWrapper>
          </DetailWrap>
        </Wrapper>
        <Wrapper imgFirst={true}>
          <PortCard>
            <PortIcon src={p3.image} bgColor={`linear-gradient(21deg, #e9ffc7, white)`} />
            <Overlay>
              <PortH2>{p3.title}</PortH2>
              <PortLinkButton href={p3.deploy} target='_blank' aria-label='FeedMe'>
                <HiLink />
              </PortLinkButton>
              <PortLinkButton href={p3.github} target='_blank' aria-label='Github - FeedMe'>
                <SiGithub />
              </PortLinkButton>
            </Overlay>
          </PortCard>

          <DetailWrap>

            <AList>
              <Portp>{p3.description}</Portp>
              <Portp style={{ marginTop: '13px' }}>
                <strong>Features: </strong>
                <span style={{ display: 'inline-block' }}>{p3.features}</span>
              </Portp>
            </AList>
            <IconWrapper style={{ width: '245px' }}>
              <TechIcon>
                <SiMongodb />
                <TipText>MongoDB</TipText>
              </TechIcon>
              <TechIcon>
                Ex
                <TipText>ExpressJS</TipText>
              </TechIcon>
              <TechIcon>
                <SiReact />
                <TipText>ReactJS</TipText>
              </TechIcon>
              <TechIcon>
                <SiNodeDotJs />
                <TipText>NodeJS</TipText>
              </TechIcon>
              <TechIcon>
                <FaPassport />
                <TipText>Passport JWT</TipText>
              </TechIcon>
              <TechIcon>
                <SiHtml5 />
                <TipText>HTML5</TipText>
              </TechIcon>
              <TechIcon>
                <TiCss3 />
                <TipText>CSS3</TipText>
              </TechIcon>
              <TechIcon>
                <SiJavascript />
                <TipText>JavaScript</TipText>
              </TechIcon>
              <TechIcon>
                <SiFirebase />
                <TipText>Firebase</TipText>
              </TechIcon>
            </IconWrapper>
          </DetailWrap>
        </Wrapper>
      </PortWrapper>
    </PortContainer >
  )
}

export default Portfolio
