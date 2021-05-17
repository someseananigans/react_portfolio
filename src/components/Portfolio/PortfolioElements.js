import styled from 'styled-components'

export const PortContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0b0c10;

  @media screen and (max-width: 830px) {
    padding: 100px 0;
    height: 860px;
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
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 830px) {
    place-content: center;
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`


export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ imgFirst }) => (imgFirst ? 'column' : 'column-reverse')};
  align-items: center;
  height: 100%;
  width: 300px;
  place-content: ${({ imgFirst }) => (imgFirst ? '' : 'flex-end')};

  @media screen and (max-width: 1000px) {
    justify-content: center;
    margin: 8px auto;
    flex-direction: row;
    height: 210px;
    width: 100%;
  }
  @media screen and (max-width: 830px) {
    max-width: 210px;
    height: 200px;
    margin: 20px 15px;
    margin-bottom: 30px;
    flex-direction: ${({ imgFirst }) => (imgFirst ? 'row' : 'row-reverse')};
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 5px;
    height: 220px;
  }
  @media screen and (max-width: 540px) {
    max-width: 100%;
    padding: 5px;
    height: 180px;
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
  font-size: 48px;
  color: #f7f8fa;
  margin-bottom: 40px;

  @media screen and (max-width: 1200px) {
    margin-bottom: 30px;
  }
`

export const Overlay = styled.aside`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0000009e;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: 0;
  top: -100%;
`

export const PortH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #f7f8fa;
  text-align: center;
  width: 100%;
`
export const PortLinkButton = styled.a`
  margin: 10px;
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
  object-fit: contain;
  position: absolute;
  padding: 10px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'white')};
  
  @media screen and (max-width: 540px) {
    padding: 25px;
  }
`

export const DetailWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 1000px) {
    width: 444px;
    margin-left: 20px;
  }
  @media screen and (max-width: 830px) {
    display: none;
  }
`

export const Portp = styled.p`
  font-size: 1rem;
  color: #f7f8fa;
  margin-bottom: 5px;
`

export const AList = styled.ul`
`

export const PortCard = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  margin: 10px 0;
  border-radius: 10px;
  height: 260px;
  width: 260px;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.02);
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
    width: 210px;
    height: 210px;
  }
  @media screen and (max-width: 830px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
    margin: 5px;
    height: 180px;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 240px;

  @media screen and (max-width: 1000px) {
    width: 100% !important;
  }
`

export const TipText = styled.span`
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
`

export const TechIcon = styled.div`
  color: white;
  font-size: 19px;
  display: flex;
  width: 39px;
  height: 39px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  background-color: #010606;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px white;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    background-color: #66fcf1;
    cursor: pointer;
    border-radius: 5px;
    color: #010606;
  }

  &:hover ${TipText} {
    visibility: visible;
    top: 42px;

  }
`

