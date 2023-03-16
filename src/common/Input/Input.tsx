import React from 'react';
import './Input.css';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  label,
  name,
  type,
}) => {
  return (
    <>
      <div className='course-input__block'>
        <label>{label}</label>
        <input
          className='course-input'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          type={type}
        />
      </div>
    </>
  );
};

export default Input;
