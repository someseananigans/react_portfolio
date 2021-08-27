import React from 'react'
import { PortContainer, PortH1, PortWrapper, PortCard, PortIcon, PortH2, Overlay, PortLinkButton, TopLine } from './PortfolioElements'
import { SiJavascript, SiHtml5, SiMongodb, SiReact, SiNodeDotJs, SiFirebase, SiGithub } from 'react-icons/si'
import { TiCss3 } from 'react-icons/ti'
import { HiDatabase, HiLink } from 'react-icons/hi'
import { FaPassport } from 'react-icons/fa'

const Portfolio = ({ projects, font }) => {
  console.log(projects)
  return (
    <PortContainer id='portfolio'>
      <TopLine>My Portfolio</TopLine>
      <PortH1 font={font.main}>Experience</PortH1>

      <PortWrapper>
        {projects.map(project => {
          return (

            <PortCard PortCard >
              <PortIcon src={project.image} bgColor={`linear-gradient(21deg, ${project.background})`} fit={project.fit} />
              <Overlay>
                <PortH2>{project.title}</PortH2>

                {project.deploy &&
                  <PortLinkButton href={project.deploy} target='_blank' aria-label={project.title}>
                    <HiLink />
                  </PortLinkButton>}

                {project.github &&
                  <PortLinkButton href={project.github} target='_blank' aria-label={`Github - ${project.github.split('/')[project.github.length - 1]}`}>
                    <SiGithub />
                  </PortLinkButton>
                }

                <PortLinkButton onClick={console.log('test')}>View More</PortLinkButton>

              </Overlay>
            </PortCard>
          )
        })}

        {/* <PortCard>
          <PortIcon src={p1.image} bgColor={'linear-gradient(21deg, #d1a6ff, #ffd5d5)'} />
          <Overlay>
            <PortH2>{p1.title}</PortH2>
            <PortLinkButton href={p1.deploy} target='_blank' aria-label="Bartender's Friend">
              <HiLink />
            </PortLinkButton>
            <PortLinkButton href={p1.github} target='_blank' aria-label='Github - Bartender'>
              <SiGithub />
            </PortLinkButton>
            <PortLinkButton onClick={console.log('test')}>View More</PortLinkButton>
          </Overlay>
        </PortCard> */}



      </PortWrapper>
    </PortContainer >
  )
}

export default Portfolio
