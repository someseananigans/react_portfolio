import Form from './Form'
import styled from 'styled-components'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = ({ colorScheme }) => {
  return (
    <>
      <ContactDisplay color={colorScheme} id='contact'>
        <ContactContainer>
          <ContactRow>
            <Column1>
              <TextWrapper>
                <Heading color={colorScheme}>Shoot me a message!</Heading>
                <Spiel color={colorScheme}>From collaborative projects to sharing ideas</Spiel>
                <Tagline color={colorScheme}>Let's connect!</Tagline>
                <SocialIcons>
                  <IconLink
                    href='https://www.linkedin.com/in/seansn/'
                    target='_blank'
                    aria-label='LinkedIn'>
                    <FaLinkedin />
                    <TipText>@seansn</TipText>
                  </IconLink>
                  <IconLink
                    href='https://github.com/someseananigans'
                    target='_blank'
                    aria-label='GitHub'>
                    <FaGithub />
                    <TipText>@someseananigans</TipText>
                  </IconLink>
                  <IconLink
                    href='mailto:nsean321@gmail.com'
                    target='_blank'
                    aria-label='Email'>
                    <HiOutlineMail />
                    <TipText>nsean321@gmail.com</TipText>
                  </IconLink>
                  <IconLink
                    href='https://www.instagram.com/some_seananigans/'
                    target='_blank'
                    aria-label='Instagram'>
                    <FaInstagram />
                    <TipText>@some_seananigans</TipText>
                  </IconLink>
                </SocialIcons>
              </TextWrapper>
            </Column1>
            <Column2>
              <Form {...colorScheme} />
            </Column2>
          </ContactRow>
        </ContactContainer>
      </ContactDisplay>




    </>
  )
}

export default Contact

const ContactDisplay = styled.div`
  height: 860px;
  color: #fff;
  display: flex;
  align-items: center;
  linear-gradient(to bottom, white 50%, rgb(152, 255, 247));
  /* background: white; */
  /* background: #010606; */
  /* background: ${({ color }) => (color[0])}; */
  
  @media screen and (max-width: 960px) {
    height: 100%;
  }
  /* @media screen and (max-width: 480px) {
    height: 1300px;
  } */
`
const ContactContainer = styled.div`
display: flex;
    justify-content: center;
height: 100%;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  padding-right: 15px;
  padding-left: 15px;

  @media screen and (max-width: 991px) {
  padding-right: 30px;
  padding-left: 30px;
}

  @media screen and (max-width: 600px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`

const ContactRow = styled.div`
  /* display: flex;

  flex-wrap: wrap;
  align-items: center;
  // Column on top will start on the left
  flex-direction: row; */

  text-align: center;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin: 100px 0;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 960px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`
const ContactColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  // column is 50% of the row (similar to [sm-6])
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
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
const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  /* padding-bottom: 60px; */
  text-align: center;
  text-align: -webkit-center;

  @media screen and (max-width: 960px) {
    /* padding-bottom: 160px; */
}
  @media screen and (max-width: 768px) {
    padding-bottom: 60px;
}
`

const Heading = styled.h1`
  margin-bottom: 10px;
  font-size: 48px;
  line-height: 1.1.%;
  color: ${({ color }) => (color[2])};
`

const Spiel = styled.p`
  max-width: 440px;
  margin-bottom: 9px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ color }) => (color[1])};
  padding: 0 20px;
`
const Tagline = styled.p`
  max-width: 440px;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 700;
  line-height: 24px;
  color: ${({ color }) => (color[6])};
  padding: 0 20px;
`

const TipText = styled.span`
  visibility: hidden;
  background: #010606;
  /* background: #0f0f0f; */
  color: #f7f8fa;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  font-size: 10px;
  /* transition: all 0.2s ease-in-out; */
  box-shadow: 0px 0px 5px 0px #66fcf1;
  width: 130px;
  margin-left: -65px;
  left: 50%;
`


const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 240px; */
  `
const IconLink = styled.a`
  color: #1c242f;
  font-size: 28px;
  margin: 15px;

  &:hover ${TipText} {
    visibility: visible;
    top: 42px;
    /* left: -13px; */

  }
  
  &:hover {
    color: #66fcf1;
    transform: scale(1.08);
  }
`

