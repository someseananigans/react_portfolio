import { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, ArrowRight, ArrowForward, HeroBtnWrapper, HeroContent, HeroH1, HeroP } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'


const HeroSection = () => {

  const [hover, setHover] = useState()
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Hi, I'm Sean</HeroH1>
          <HeroP>Full Stack Developer</HeroP>
          <HeroBtnWrapper>
            <Button
              to="contact"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Connect {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection
