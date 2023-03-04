import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../header/Header';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import './Login.css';
import { LoginProps } from './Login.types';
import ErrorModal from '../courses/components/ErrorModal/ErrorModal';

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);

  const handleFillRegForm = (event) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const navigate = useNavigate();
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
    localStorage.setItem('user', result.result);
    localStorage.setItem('userName', result.user.name);
    navigate('/');
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
      {/*<div className='error-modal'>*/}
      {/*  {errors.length > 0 && <ErrorModal errors={errors} />}*/}
      {/*</div>*/}
      {/*<ErrorModal errors={errors} />*/}
    </>
  );
};

export default Login;