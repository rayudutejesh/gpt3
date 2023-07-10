import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="footer gradient--bg section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to step into future before others
        </h1>
      </div>

      <div className="footer-btn">
        <p>Request early access</p>
      </div>

      <div className="footer-links">
        <div className="footer-links-logo">
          <img src={logo} alt="logo" />
          <div className="gpt3__footer-copyright">
            <p>@2023 GPT-3. All rights reserved.</p>
          </div>
        </div>

        <div className="footer-links01">
          <div />

          <h4>Links</h4>
          <p>social media</p>
          <p>social media</p>
          <p>social media</p>
          <p>social media</p>
          <p>social media</p>
        </div>
        <div className="footer-links02">
          <div />
          <h4>Company</h4>
          <p>contact</p>
          <p>contact</p>
          <p>contact</p>
          <p>contact</p>
          <p>contact</p>
        </div>
      </div>
    </div>
  );
}

export default Footer