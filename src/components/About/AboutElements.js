import styled from 'styled-components'


export const InfoContainer = styled.div`
  color: #fff;
  background: #0b0c10;
  /* background: linear-gradient(to left, #0b0c10 50%, #515151); */
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  min-height: 100vh;

  @media screen and (max-width: 768) {
    min-height: 100%;
    height: 100%;
  }
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
  color: #66fcf1;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 20px;
  /* font-size: 48px; */
  /* line-height: 1.1; */
  /* font-weight: 600; */
  color: #f7f8fa;

  font-family: 'Archivo Black', sans-serif;
    font-size: 63px;
    line-height: 45px;
    letter-spacing: -3px;
    font-weight: 800;

  @media screen and (max-width: 480px) {
    font-size: 59px;
    line-height: 43px;
  }
`

export const Subtitle = styled.div`
  max-width: 480px;
  margin-bottom: 35px;
  font-size: 1rem;
  line-height: 24px;
  color: #f7f8fa;
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

