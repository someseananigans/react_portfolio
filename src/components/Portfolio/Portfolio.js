import React from 'react'
import { PortContainer, PortH1, PortWrapper, PortCard, PortIcon, PortH2, Portp, Wrapper, Overlay, IconWrapper, TechIcon, PortLinkButton, DetailWrap, TopLine, AList, TipText } from './PortfolioElements'
import image1 from '../../images/svg-1.svg'
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiReact, SiNodeDotJs, SiFirebase, SiHeroku, SiGit, SiGithub } from 'react-icons/si'
import { TiCss3 } from 'react-icons/ti'
import { HiDatabase, HiLink } from 'react-icons/hi'
import { FaPassport } from 'react-icons/fa'

const Portfolio = ({ p1, p2, p3 }) => {
  return (
    <PortContainer id='portfolio'>
      <TopLine>My Works</TopLine>
      <PortH1>Projects</PortH1>

      <PortWrapper>

        <Wrapper imgFirst={true}>

          <PortCard>
            <PortIcon src={p1.image} bgColor={'#fff0f0'} />
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
              <Portp>
                <strong>Features: </strong>
                <p>{p1.features}</p>
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
            <PortIcon src={p2.image} bgColor={'#2e94ff'} />
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
              <Portp>
                <strong>Features: </strong>
                <p>{p2.features}</p>
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
            <PortIcon src={image1} />
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
              <Portp>
                <strong>Features: </strong>
                <p>{p3.features}</p>
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
        {/* <TechWrapper>
          <TechHead>Key</TechHead>
          <TechHead>Technologies</TechHead>
          <IconWrapper>
            <TechIcon>
              <SiHtml5 />
              <IconLabel>HTML5</IconLabel>
            </TechIcon>
            <TechIcon>
              <TiCss3 />
              <IconLabel>CSS3</IconLabel>
            </TechIcon>
            <TechIcon>
              <SiReact />
              <IconLabel>React</IconLabel>
            </TechIcon>
            <TechIcon>
              <SiJavascript />
              <IconLabel>Javascript</IconLabel>
            </TechIcon>
            <TechIcon>
              <HiDatabase />
              <IconLabel>MySQL</IconLabel>
            </TechIcon>
            <TechIcon>
              <SiMongodb />
              <IconLabel>MongoDB</IconLabel>
            </TechIcon>
            <TechIcon>
              <SiNodeDotJs />
              <IconLabel>NodeJS</IconLabel>
            </TechIcon>
            <TechIcon>
              <SiFirebase />
              <IconLabel>Firebase</IconLabel>
            </TechIcon>
            <TechIcon>
              <SiGit />
              <IconLabel>Git</IconLabel>
            </TechIcon>
            <TechIcon>
              <SiHeroku />
              <IconLabel>Heroku</IconLabel>
            </TechIcon>
          </IconWrapper>
        </TechWrapper> */}
      </PortWrapper>
    </PortContainer >
  )
}

export default Portfolio
