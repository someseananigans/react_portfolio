import React from 'react'
// import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, TechWrapper, TechHead, IconWrapper, TechIcon, IconLabel } from './SkillsElements'
// import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiReact, SiNodeDotJs, SiFirebase, SiHeroku, SiGit, SiGithub } from 'react-icons/si'
import { SiJavascript, SiHtml5, SiMongodb, SiReact, SiNodeDotJs, SiFirebase, SiHeroku, SiGit } from 'react-icons/si'
import { TiCss3 } from 'react-icons/ti'
import { HiDatabase } from 'react-icons/hi'
// import { HiDatabase, HiLink } from 'react-icons/hi'
import { FaPassport } from 'react-icons/fa'

import { font } from '../../Data'


const InfoSection = ({ id, lightText, lightBg, topLine, headline, description, buttonLabel, imgStart, img, alt, darkText, primary, dark }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow >
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText} fontFam={font.main}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {/* <BtnWrap>
                  <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}>
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <TechWrapper>
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
                    <FaPassport />
                    <IconLabel>Passport JWT</IconLabel>
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
                  <TechIcon style={{ visibility: 'hidden' }}>
                    <IconLabel>hidden</IconLabel>
                  </TechIcon>
                </IconWrapper>
              </TechWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
