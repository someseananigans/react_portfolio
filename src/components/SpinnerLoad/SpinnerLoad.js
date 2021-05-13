import React from 'react'
import './spin.css'
import { SpinLoad, Spinster } from './SpinElements'

const SpinnerLoad = ({ back }) => {
  return (
    <SpinLoad back={back}>
      <Spinster>

        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </Spinster>
    </SpinLoad>
  )
}

export default SpinnerLoad

