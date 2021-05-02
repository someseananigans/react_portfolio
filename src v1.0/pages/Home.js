import useBodyColor from '../hooks/useBodyColor'
import Shades from '../components/Shades'
import styled from 'styled-components'
import { Container } from '../globalStyles'

const Home = ({ colorScheme }) => {
  useBodyColor('darkblue')
  return (
    <>
      {/* <p>I'm a full-stack web application developer located in Orange County, California. My passion for learning new things and problem solving keeps me driven and self motivated.  </p>
      <p>I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases and best code practices. My objective is to be the best web developer I can be and to contribute to the technology industry all that I know and can do. I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn al the I can about development. While a student at Cal State Fullerton, I studied Business Development and Finance, and I believe that my understanding of problem solving, financial algorithisms, structure and psychology are all also skills that have and will continue to contribute to my overall success as a developer</p> */}
      <HomeDisplay color={colorScheme}>
        <HomeContainer>
          <HomeRow>
            <HomeColumn>
              <ImageWrapper>
                <Shades />
              </ImageWrapper>
            </HomeColumn>
            <HomeColumn>
              <TextWrapper>
                <Heading color={colorScheme}>
                  Hi, I'm Sean
                </Heading>
                <SubHeading color={colorScheme}>
                  Full Stack Web Developer
                </SubHeading>
                <Intro color={colorScheme}>
                  I enjoy creating fun web applications with my knowledge in front and back end languages, responsive frameworks, and databases. I like tackling functionality problems and integrating useful interactive features to develop rich user friendly web experiences. Challenges continue to excite me and fuel the fire to my passion.
                </Intro>
              </TextWrapper>
            </HomeColumn>
          </HomeRow>
        </HomeContainer>
      </HomeDisplay>

    </>
  )
}

export default Home

const HomeDisplay = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ color }) => (color[0])};
`

const HomeContainer = styled(Container)`
  padding-right: 15px;
  padding-left: 15px;
`

const HomeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row
  align-items: center;
`

const HomeColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // at smaller screen, column takes up the whole like in the flex row
  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
}
`

const TextWrapper = styled.div`
  max-width: 700px;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: center;
  text-align: -webkit-center;

  @media screen and (max-width: 960px) {
    padding-bottom: 160px;
}
`

const Heading = styled.h1`
  margin-bottom: 10px;
  font-size: 48px;
  line-height: 1.1.%;
  color: ${({ color }) => (color[5])};
`

const Intro = styled.p`
  max-width: 90%;
  margin-bottom: 9px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ color }) => (color[2])};
  padding: 0 20px;
`
const SubHeading = styled.p`
  max-width: 440px;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 700;
  line-height: 24px;
  color: ${({ color }) => (color[4])};
  padding: 0 20px;
`

const ImageWrapper = styled.div`
display: flex;
height: 175px;
overflow: hidden;
align-content: center;
align-items: center;
`