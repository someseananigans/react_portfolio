import React from 'react'
import { Navbar, Footer, SpinnerLoad } from '../components'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Appear } from '../components/SpinnerLoad/SpinElements'
// import resume from '../images/Sean_Nguyen_Dev2021.pdf'



const Resume = () => {

  const [isLoading, setLoading] = useState(true)
  const [back, setBack] = useState(false)

  useEffect(() => {
    setLoading(true)
    setBack(false)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    setTimeout(() => {
      setBack(true)
    }, 3000);
  }, [])

  return (
    <>

      <SpinnerLoad back={back} />

      <Appear isLoading={isLoading}>

        <Navbar
          location='resume' />

        <Container>
          <Wrapper>

            {/* <iframe src={resume + '#toolbar=0'} width="100%" height="100%" frameborder="0"></iframe> */}
            {/* <embed src={resume + '#toolbar=0&zoom=100'} type="application/pdf" width='100%' height='100%'></embed> */}

            <iframe title="Developer Resume" src="https://drive.google.com/file/d/145erI4NIYh0HUE3PjCP-6yqPJc53oSR9/preview" width="100%" height="100%"></iframe>

          </Wrapper>
        </Container>


        <Footer location='resume' />
      </Appear>

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

`

// const Wrapper = styled.div`
//   height: 100%;
//   width: 100%;
// `

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


  @media screen and (max-width: 900px) {
    width: 100%;
    height: 819px;
  }

  @media screen and (max-width: 750px) {
    width: 100%;

  }
  
`