import React from 'react';
import './Button.css';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  type = 'button',
}) => {
  return (
    <button className={`app-button ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
