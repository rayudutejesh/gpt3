import React from 'react'
import './Possibility.scss'
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility section__padding" id='possibility'>
      <div className="possibility-image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="possibility-content">
        <h4>how are you</h4>
        <h1 className="gradient__text">The Possibilities Are Beyond Imagination</h1>
        <p>
          We are a group of people who are trying to improve their imagination.
          We are trying to make sure that our imagination is not too bad.
        </p>
      </div>
    </div>
    )
}

export default Possibility