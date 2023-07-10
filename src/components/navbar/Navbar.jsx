import React, {useState} from 'react'
// @ts-ignore
import { RiMenu3Line , RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg'

import './Navbar.scss';

const Navbar = () => {
  const Menu = () => (
    <>
    <p>
      <a href="#Home" >Home</a>
    </p>
    <p>
      <a href="#wgpt3" >What is gpt3</a>
    </p>
    <p>
      <a href="#possibility" >Open AI</a>
    </p>          
    <p>
      <a href="#features" >Features</a>
    </p>          
    <p>
      <a href="#blog" >Blog</a>
    </p>
    </>
  )
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar_sign">
        <p>signin</p>
        <button type="button">signUp</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links_sign">
                <p>signin</p>
                <button type="button">signUp</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;