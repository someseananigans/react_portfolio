import styled from 'styled-components'
import { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: .1;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

export const LeftArrow = styled.div`
  position: absolute;
  top: 48%;
  left: 0;
  width: 40px;
  height: 40px;
  background: gray;
  opacity: .1;
  cursor: pointer;
  transition: .3s ease-in-out;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`

export const RightArrow = styled.div`
  position: absolute;
  top: 48%;
  right: 0;
  width: 40px;
  height: 40px;
  background: gray;
  opacity: .1;
  cursor: pointer;
  transition: .3s ease-in-out;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`



export const Display = styled.div`
  width: 100%;
  height: 400px;
  /* max-height: 400px; */
  position: relative;
  background-color: white;
  border-radius: 5px;
  `

export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  /* max-height: 400px; */
  animation: ${fadeIn} 1.2s ease-in-out;

`

export const Image = styled.img`
  width: 100%;
  height: 400px;
  /* max-height: 400px; */
  object-fit: cover;
`

export const Caption = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 32px;
  color: ${({ color }) => color};
  text-shadow: 0px 0px 4px rgb(255 255 255);
  /* transition: .3s ease-in-out; */
  animation: ${fadeIn} .5s ease-in-out;

`

export const Count = styled.h2`
  position: absolute;
  left: 15px;
  top: 15px;
  color: ${({ color }) => color};
  text-shadow: 0px 0px 4px rgb(255 255 255);
  /* transition: .3s ease-in-out; */
  animation: ${fadeIn} 1.2s ease-in-out;
`

export const BulletWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 12px;
  width: 100%;
  place-content: center;
`

export const Bullet = styled.div`
  background: ${({ focus }) => focus ? '#bbbbbb ' : '#929292'};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 2px;
  transition: .3s ease-in-out;
  cursor: pointer;
`