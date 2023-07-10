import React from 'react'
import './Features.scss'
import { Feature } from '../../components/index.js';

const Features = () => {
  // const data = [{
  //   title:
  //   text:
  // }]
  return (
    <div className="features section__padding" id='features'>
      <div className="features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realise It.Step Into Future Today&Make It Happen Today</h1>
        <p>Request early access to get started</p>
      </div>
      <div className="features-container">
        <Feature/>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default Features;