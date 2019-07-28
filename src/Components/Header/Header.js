import React from 'react';
import './Header.css';
import Sun from './assets/sun.svg'

const Header = (props) => {
  return (
    <header>
        <img src={Sun} alt="Header Icon"/>
    </header>
  )
}

export default Header;