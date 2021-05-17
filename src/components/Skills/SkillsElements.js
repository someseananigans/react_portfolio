import styled from 'styled-components'


export const IconWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  width: 100%;
`

export const TechIcon = styled.div`
  color: black;
  font-size: 40px;
  display: flex;
  margin-top: 5px;
  align-items: center;
  width: 130px;
  height: 60px;
  padding-left: 5px;
  flex-grow: 1;

  /* margin-left: 10px; */

  &:hover {
    background-color: #45a29e;
    cursor: pointer;
    border-radius: 5px;
  }
`

export const IconLabel = styled.p`
  color: black;
  font-size: 16px;
  margin-left: 5px;
`

export const TechHead = styled.h3`
  color: black;
`

export const TechWrapper = styled.div`
`


export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
  height: 860px;

  /* @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin: 100px 0;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
  
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  /* padding-bottom: 60px; */
`

export const TopLine = styled.p`
  color: #00dbcd;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 16px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.div`
  max-width: 480px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  height: 100%;
  overflow: hidden;
  align-content: center;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    margin-top: -80px;
  }
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
