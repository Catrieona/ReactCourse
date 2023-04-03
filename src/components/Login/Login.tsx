import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ErrorModal from '../courses/components/ErrorModal/ErrorModal';
import Header from '../header/Header';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { LoginProps } from './Login.types';
import { userLoginAction } from '../../store/user/actions';
import './Login.css';

const Login: React.FC<LoginProps> = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);

  if (isAuth) {
    navigate('/courses');
  }

  const handleFillRegForm = (event) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify(loginForm),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    if (!result.successful) {
      setErrors(result.errors);
      return;
    }
    dispatch(userLoginAction(result));
  };

  return (
    <>
      <Header />
      <form className='course-login-form'>
        <h4 className='course-login-form__title'>Login</h4>
        <Input
          type='email'
          name='email'
          label='Email'
          onChange={handleFillRegForm}
          value={loginForm.email}
          placeholder='Enter Email'
        />
        <Input
          type='password'
          name='password'
          label='Password'
          onChange={handleFillRegForm}
          value={loginForm.password}
          placeholder='Enter Password'
        />
        <div className='course-login-form__nav-block'>
          <Button
            className='course-login-form__submit'
            type='submit'
            text='LogIn'
            onClick={handleLogin}
          />
          <p>
            If you not have an account you can{' '}
            <Link to={`/registration`}>Registration</Link>
          </p>
        </div>
      </form>
      {errors?.length > 0 && (
        <ErrorModal errors={errors} setErrors={setErrors} />
      )}
    </>
  );
};

export default Login;
