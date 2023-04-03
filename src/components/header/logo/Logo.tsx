import React from 'react';
import './Logo.css';
import logo from './images/logo.svg';

function Logo() {
  return <img className='main-logo' src={logo} alt='' data-testid={'logo'} />;
}

export default Logo;
