import Form from './Form'
import styled from 'styled-components'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Container } from '../../globalStyles'

const Contact = ({ colorScheme }) => {
  console.log(colorScheme)
  return (
    <>
      <ContactDisplay color={colorScheme} id='contact'>
        <ContactContainer>
          <ContactRow>
            <ContactColumn>
              <TextWrapper>
                <Heading color={colorScheme}>Shoot me a message!</Heading>
                <Spiel color={colorScheme}>From collaborative projects to sharing ideas</Spiel>
                <Tagline color={colorScheme}>Let's connect!</Tagline>
                <SocialIcons>
                  <IconLink href='/' target='_blank' aria-label='LinkedIn'>
                    <FaLinkedin />
                  </IconLink>
                  <IconLink href='/' target='_blank' aria-label='GitHub'>
                    <FaGithub />
                  </IconLink>
                  <IconLink href='/' target='_blank' aria-label='Email'>
                    <HiOutlineMail />
                  </IconLink>
                  <IconLink href='/' target='_blank' aria-label='Instagram'>
                    <FaInstagram />
                  </IconLink>
                </SocialIcons>
              </TextWrapper>
            </ContactColumn>
            <ContactColumn>
              <Form {...colorScheme} />
            </ContactColumn>
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
  background: #010606;
  /* background: ${({ color }) => (color[0])}; */
  
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`
const ContactContainer = styled(Container)`
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (max-width: 600px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`

const ContactRow = styled.div`
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  // Column on top will start on the left
  flex-direction: row;
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
  color: ${({ color }) => (color[5])};
`

const Spiel = styled.p`
  max-width: 440px;
  margin-bottom: 9px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ color }) => (color[2])};
  padding: 0 20px;
`
const Tagline = styled.p`
  max-width: 440px;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 700;
  line-height: 24px;
  color: ${({ color }) => (color[4])};
  padding: 0 20px;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 240px; */
`
const IconLink = styled.a`
  color: #fff;
  font-size: 28px;
  margin: 15px;

  &:hover {
    color: #66fcf1;
    transform: scale(1.08);
  }
`