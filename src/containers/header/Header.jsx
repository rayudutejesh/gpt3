import React from 'react'
import './Header.scss'

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          Lets Build something Amazing with GPT3
        </h1>
        <p>gpt3 how are you</p>
        <div className="header-content__input">
          <input type="email" placeholder="Email Address" />
          <button type='button'>Get Started</button>
        </div>
        <div className="header-content__people">
            <img src={people} alt="people" />
            <p>allare nice</p>
        </div>

      </div>
      <div className="header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header