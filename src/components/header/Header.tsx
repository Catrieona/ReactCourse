import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Button from '../../common/Button/Button';
import Logo from './logo/Logo';

function Header() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='header-container'>
      <div className='header-container__info-container'>
        <Logo />
        <div className='header-container__log-info'>
          <span className='header-container__info-author'>
            {' '}
            {localStorage.userName}{' '}
          </span>
          <Button
            onClick={localStorage.userName ? handleLogOut : handleLogin}
            className='header-container__logout-button'
            text={localStorage.userName ? 'logout' : 'login'}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
