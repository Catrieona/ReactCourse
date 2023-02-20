import React from 'react';
import './Header.css';
import Button from '../../common/Button';
import Logo from './logo/Logo';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-container__info-container'>
        <Logo />
        <div className='header-container__log-info'>
          <span className='header-container__info-author'> Dzianis </span>
          <Button className='header-container__logout-button' text='logout' />
        </div>
      </div>
    </div>
  );
}

export default Header;
