import styled, { keyframes } from 'styled-components'

export const Appear = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : '')};
`

export const Shrink = keyframes`
  from {
    /* height: 100vh; */
  }
  to {
    height: 0;
    visibility: none;
    /* margin-bottom: 0px; */
}
`
export const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
}
`

export const FlowAway = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const Spinster = styled.div`
  place-self: center;
  animation: ${FlowAway} 1s ease-in-out;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`


export const SpinLoad = styled.div`
    position: absolute;
    bottom: 0;
    z-index: ${({ back }) => (back ? 1 : 999)};
    width: 100%;
    height: 100%;

  height: 100vh;
  /* margin-bottom: 80px; */
  display: flex;
  justify-content: center;
  align-content: center;
  /* animation: ${Shrink} 1.25s ease-in-out; */
  animation: ${fade} 1.25s ease-in-out;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  background: #0b0c10;
  /* background: rgb(160 255 249 / 47%); */
`
