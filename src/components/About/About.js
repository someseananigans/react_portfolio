import React from 'react'
import { Button } from '../ButtonElement'
import { Shades } from '..'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrapper, Img } from './AboutElements'


const InfoSection = ({ id, lightText, lightBg, topLine, headline, description, buttonLabel, imgStart, img, alt, darkText, primary, dark }) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
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

export default InfoSection
