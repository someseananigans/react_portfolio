import React from 'react'
import { Navbar, Footer, SpinnerLoad } from '../components'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Appear } from '../components/SpinnerLoad/SpinElements'
// import resume from '../images/Sean_Nguyen_Dev2021.pdf'

const Resume = () => {

  const [back, setBack] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.title = 'Resume - Sean Nguyen'
    setBack(false)
    setIsLoading(false)
    setTimeout(() => {
      setIsLoading(true)
    }, 2000);
    setTimeout(() => {
      setBack(true)
    }, 3500);
  }, [])

  return (
    <>
      <SpinnerLoad back={back} />
      <Main isLoading={isLoading}>

        <Navbar
          location='resume'
        />

        <Container>
          <Wrapper>

            {/* <iframe src={resume + '#toolbar=0'} width="100%" height="100%" frameborder="0"></iframe> */}
            {/* <embed src={resume + '#toolbar=0&zoom=100'} type="application/pdf" width='100%' height='100%'></embed> */}

            <embed title="Developer Resume" src="https://drive.google.com/file/d/1KuirX_3v-r_GeoW_myYWFIGFoPtwOsUq/preview" width="100%" height="100%"></embed>

          </Wrapper>
        </Container>

        <Footer location='resume' />
      </Main>

    </>
  )
}

export default Resume


const Container = styled.div`
  background: #0b0c10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1300px;
  position: relative;
  z-index: 1;
  justify-content: center;
  flex-grow: 1;

  @media screen and (max-width: 900px) {
  height: 1000px;
  }
  @media screen and (max-width: 600px) {
    height: 800px;
}
`

const Main = styled(Appear)`
  min-height: ${({ isLoading }) => (isLoading ? '100vh' : '10vh')};
  height: ${({ isLoading }) => (isLoading ? '' : '10vh')};
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  z-index: 3;
  max-width: 1200px;
  width: 875px;
  height: 1066px;
  position: absolute;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

@media screen and (max-width: 900px) {
  width: 100%;
  height: 819px;
}
@media screen and (max-width: 600px) {
  height: 600px;
}
`