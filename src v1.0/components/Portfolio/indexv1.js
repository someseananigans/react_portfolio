import React from 'react'
import { PortContainer, PortH1, PortWrapper, PortCard, PortIcon, PortH2, Portp } from './PortfolioElements'
import image1 from '../../images/svg-1.svg'

const Portfolio = () => {
  return (
    <PortContainer id='portfolio'>
      <PortH1>Portfolio</PortH1>
      <PortWrapper>
        <PortCard>
          <PortIcon />
          <PortH2>FreeMarket</PortH2>
          <Portp>details</Portp>
        </PortCard>
        <PortCard>
          <PortIcon src={image1} />
          <PortH2>FreeMarket</PortH2>
          <Portp>details</Portp>
        </PortCard>
        <PortCard>
          <PortIcon />
          <PortH2>FreeMarket</PortH2>
          <Portp>details</Portp>
        </PortCard>
      </PortWrapper>
    </PortContainer>
  )
}

export default Portfolio
