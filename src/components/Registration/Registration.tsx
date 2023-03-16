import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { RegistrationProps } from './Registration.types';
import './Registration.css';

const Registration: React.FC<RegistrationProps> = () => {
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleFillRegForm = (event) => {
    setRegistrationForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(registrationForm),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    if (!result.successful) {
      alert('Incorrect user name or password');
      return;
    }
    if (result.successful) {
      alert('User was created');
      navigate('/login');
    }
  };

  return (
    <>
      <Header />
      <form className='course-registration-form'>
        <h4 className='course-registration-form__title'>Registration</h4>
        <Input
          type='text'
          name='name'
          label='Name'
          onChange={handleFillRegForm}
          value={registrationForm.name}
          placeholder='Enter Name'
        />
        <Input
          type='email'
          name='email'
          label='Email'
          onChange={handleFillRegForm}
          value={registrationForm.email}
          placeholder='Enter Email'
        />
        <Input
          type='password'
          name='password'
          label='Password'
          onChange={handleFillRegForm}
          value={registrationForm.password}
          placeholder='Enter Password'
        />
        <div className='course-registration-form__nav-block'>
          <Button
            className='course-registration-form__submit'
            type='submit'
            text='Registration'
            onClick={handleRegistration}
          />
          <p>
            If you have an account you can <Link to={`/login`}>Login</Link>
          </p>
        </div>
      </form>
    </>
  );
};
export default Registration;
