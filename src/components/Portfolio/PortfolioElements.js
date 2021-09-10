import styled from 'styled-components'

export const PortContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background:#23272a; */
  background: #0b0c10;
  min-height: 100vh;

  @media screen and (max-width: 830px) {
    padding: 100px 0;
    height: 860px;
    min-height: 100%;
  }
  @media screen and (max-width: 1000px) {
    padding: 100px 0;
    height: 100%;

  }
  /* 768 @media screen and (max-width: 480px) {
    height: 1300px;
  } */
`

export const PortWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    /* flex-direction: column-reverse; */
  }
  @media screen and (max-width: 830px) {
    place-content: center;
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`




export const TopLine = styled.p`
  color: #66fcf1;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const PortH1 = styled.h1`
  /* font-size: 48px; */
  color: #f7f8fa;
  margin-bottom: 40px;

  font-family: ${({ font }) => (font.family)};
  font-size: ${({ font }) => (font.fontSize)};
  line-height: ${({ font }) => (font.lineHeight)};
  letter-spacing: -3px;
  font-weight: 800;
    
  @media screen and (max-width: 900px) {
    font-size: 50px;
    line-height: 35px;
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 30px;
  }
`

export const Overlay = styled.aside`
  position: absolute;
  z-index: 9;
  width: 100%;
  height: 100%;
  background: #000000c0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: 0;
  top: -100%;
  padding: 10px;
`

export const PortH2 = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 10px;
  color: #f7f8fa;
  text-align: center;
  width: 100%;
`
export const PortLinkButton = styled.a`
  margin: 10px;
  flex: 1;
  border-radius: 5px;
  background: #010606;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  transition: .5s ease-in-out;
  transition: 
    background .2s ease-in-out,
    color .2s ease-in-out;
  opacity: 0;
  transform: scale(0.2);
  margin-top: 700px;
  box-shadow: 0px 0px 5px 0px white;
  min-width: ${({ size }) => (size === 'full' && '180px')};

  &:hover {
    background: ${({ primary }) => (primary ? '#fff' : '#66fcf1')};
    color: black;
  }
`


export const PortIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: ${({ fit }) => fit[0]};
  position: absolute;
  padding: ${({ fit }) => fit[0] === 'cover' ? '0px' : '10px'};
  background: ${({ bgColor }) => (bgColor ? bgColor : 'white')};

  @media screen and (max-width: 540px) {
    /* padding: 25px; */
    object-fit: ${({ fit }) => fit[1]};
  }
`




export const PortCard = styled.div`
  box-shadow: 0px 0px 5px 0px white;
  display: flex;
  overflow: hidden;
  align-items: center;
  /* margin: 10px 0; */
  /* border-radius: 10px; */
  height: 300px;
  width: 300px;
  transition: all 0.2s ease-in-out;
  position: relative;

    &:hover {
    /* transform: scale(1.02); */
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
    &:hover ${Overlay} {
    opacity: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }
    &:hover ${PortLinkButton} {
    opacity: 100%;
    transform: scale(1.0);
    margin-top: 10px;
  }

@media screen and (max-width: 1000px) {
  width: 260px;
  height: 260px;
}
@media screen and (max-width: 830px) {
  /* width: 200px;
  height: 200px; */
}
@media screen and (max-width: 540px) {
  width: 100%;
  height: 180px;
  margin: 5px;
}
`



export const CarouselWrapper = styled.div`
  height: 500px;
`

export const Description = styled.p`
  /* margin: 35px; */
  font-size: 17px;
  font-weight: 500;
`


export const Features = Description

export const DetailsWrapper = styled.div`
  display: flex;
  margin: 0px 35px 0px 35px;
`

export const HorWrapper = styled.div`
  display: flex;
`

export const IconWrapper = styled.div`
  display: flex;
`

export const VertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: ${({ min }) => min && '590px'};
  margin: ${({ margin }) => margin === 'true' ? '10px 10px 0px 0px' : '10px 0px 0px 0px'};
`

export const Heading = styled.h3`
  margin-bottom: 4px;
`


export const TipText = styled.span`
  opacity: 0;
  /* background: #010606; */
  /* background: #0f0f0f; */
  color: black;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  font-size: 10px;
  /* transition: all 0.2s ease-in-out; */
  box-shadow: ${({ color }) => color !== ' white' && color !== ' #121212' ? `0px 0px 5px 0px ${color}` : '0px 0px 5px 0px gray'};
  width: 75px;
  left: -22px;
  text-align-last: center;
  transition: all .2s ease-in-out;
  top: 30px;
`


export const Icon = styled.div`
  font-size: ${({ size }) => size ? size : '30px'};
  margin-top: ${({ top }) => top ? top : '0'};
  margin-right: 10px;
  transition: all .2s ease-in-out;

  &:hover ${TipText} {
    opacity: 1;
    top: ${({ topText }) => topText ? topText : '37px'};;
  }

  &:hover {
    color: ${({ color }) => color !== ' white' && color !== ' #121212' ? color : 'gray'};
    transform: scale(1.08);
  }
`

export const Prev = styled.div`
  cursor: pointer;  
  height: 45px;
  width: 45px;
      padding: 9px 12px 12px 16px;
      border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  &:hover {
    background-color: ${({ color }) => color !== ' white' && color !== ' #121212' ? color : 'gray'};
  }
`
export const Next = styled.div`
  cursor: pointer;  
  height: 45px;
  width: 45px;
      padding: 9px 12px 12px 16px;
      border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  
  &:hover {
    background-color: ${({ color }) => color !== ' white' && color !== ' #12121283' ? color + '83' : '#80808094'};
  }
`
export const Selection = styled.div`
  width: 100%;
  position: absolute;
  top: -57px;
  display: flex;
  place-content: space-between;
  padding: 0 50px 0 50px;
`
export const Fixed = styled.div`
  position: relative;
`