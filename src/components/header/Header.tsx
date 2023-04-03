import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './logo/Logo';
import Button from '../../common/Button/Button';
import { userLogoutAsyncAction } from '../../store/user/actions';
import './Header.css';

function Header() {
  const userName = useSelector((store) => store.user.name);
  const isAuth = useSelector((store) => store.user.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    !isAuth && pathname !== '/registration' && navigate('/login');
  }, [isAuth]);

  const handleLogOut = () => {
    dispatch(userLogoutAsyncAction());
    navigate('/login');
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
            {isAuth ? (userName ? userName : 'ADMIN') : ''}
          </span>
          <Button
            onClick={isAuth ? handleLogOut : handleLogin}
            className='header-container__logout-button'
            text={isAuth ? 'logout' : 'login'}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
