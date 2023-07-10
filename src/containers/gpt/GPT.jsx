import React from 'react'
import './GPT.scss'
import Feature from '../../components/feature/Feature.jsx'

const GPT = () => {
  return (
    <div className="gpt3 section__margin gradient--bg" id="wgpt3">
      <div className="gpt-feature">
        <Feature />
      </div>
      <div className="gpt3-heading">
        <h1 className="gradient__text">
          The possibilitties are beyond imagination
        </h1>
        <p>explore the library</p>
      </div>
      <div className="gpt3-container">
        <Feature/>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default GPT