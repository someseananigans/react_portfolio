import { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, ArrowRight, ArrowForward, HeroBtnWrapper, HeroContent, HeroH1, HeroP } from './HeroElements'
import { Button } from '../ButtonElement'
import { font } from '../../Data'


const HeroSection = () => {

  const [hover, setHover] = useState()
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg loop muted autoPlay>
            <source src="https://portawsbucket.s3-us-west-1.amazonaws.com/portHero.mp4" type="video/mp4" />
          </VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroH1 font={font.main}>Hi, I'm Sean</HeroH1>
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
              // exact={true}
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
