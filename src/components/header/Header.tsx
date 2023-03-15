import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Button from '../../common/Button/Button';
import Logo from './logo/Logo';
import { connect, useDispatch } from 'react-redux';

function Header({ userName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch({ type: 'LOGOUT' });
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
          <span className='header-container__info-author'>{userName}</span>
          <Button
            onClick={userName ? handleLogOut : handleLogin}
            className='header-container__logout-button'
            text={userName ? 'logout' : 'login'}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({
  userName: store.user.name,
});

export default connect(mapStateToProps)(Header);
