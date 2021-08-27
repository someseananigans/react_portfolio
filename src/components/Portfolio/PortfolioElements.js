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
  z-index: 999;
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
  transition: 
    transform 0.3s ease,
    opacity 0.5s ease-in-out,
    background 0.2s ease-in-out,
    margin-top 0.2s ease-in-out;
  opacity: 0;
  transform: scale(0.2);
  margin-top: 700px;
  box-shadow: 0px 0px 5px 0px white;
  transition-delay: 100ms;
  transition-property: margin-top, opacity, transform;

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





