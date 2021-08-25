import React from 'react'
import { Shades } from '..'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper } from './AboutElements'
import { font } from '../../Data'


const About = ({ id, lightText, lightBg, topLine, headline, description, buttonLabel, imgStart, img, alt, darkText, primary, dark, d1, d2, d3 }) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading fontFam={font.main}>{headline}</Heading>
                {/* <Subtitle>{description}</Subtitle> */}
                <Subtitle>
                  <p style={{ marginBottom: '10px' }}>{d1}{d2}</p>
                  <p>{d3}</p>
                </Subtitle>
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
              <ImgWrapper>
                <Shades />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default About
