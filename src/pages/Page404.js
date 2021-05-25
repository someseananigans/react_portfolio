import { useState } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components'
import lost from '../images/lost404.svg'
import lost1 from '../images/lost404v1.svg'
import lost2 from '../images/lost404v2.svg'
import lost3 from '../images/lost404v3.svg'
import lost4 from '../images/lost404v4.svg'
import { Link } from 'react-router-dom'

const Page404 = () => {
  const images = [lost, lost1, lost3, lost2, lost4]
  const [primary, setPrimary] = useState(images[0])

  const togglePrimary = () => {

    switch (primary) {
      case images[0]:
        setPrimary(images[1])
        break;
      case images[1]:
        setPrimary(images[2])
        break;
      case images[2]:
        setPrimary(images[3])
        break;
      case images[3]:
        setPrimary(images[4])
        break;
      case images[4]:
        setPrimary(images[0])
        break;
    }


  }

  return (
    <>
      <Navbar location={'404'} />
      <Container>
        <Wrapper>
          <Heading  >Oh No!</Heading>
          <Heading>Seems like</Heading>
          <Heading>We're lost</Heading>
          <Image
            onClick={togglePrimary}
            onMouseEnter={togglePrimary}
            src={primary} alt="lost_img" />
          <GoHome to='/' >Go Home →</GoHome>
        </Wrapper>
      </Container>
    </>
  )
}

export default Page404


const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: white;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;

  @media screen and (max-width: 580px) {
    width: 90%;
    height: auto;
  }
`

const Heading = styled.h1`
  font-family: 'Archivo Black', sans-serif;
  line-height: 45px;
  font-weight: 800;
  font-size: 5rem;
  letter-spacing: -.08em;
  line-height: 55px;
  color: #222222;

  @media screen and (max-width: 470px) {
    font-size: 4rem;
    line-height: 47px;
  }
`

const Image = styled.img`
  margin: 20px 0;
  height: auto;
  width: 100%;
  align-self: center;
`

const GoHome = styled(Link)`
  text-align: center;
  color: #4ddbff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #3f3f3f;
  }
  `