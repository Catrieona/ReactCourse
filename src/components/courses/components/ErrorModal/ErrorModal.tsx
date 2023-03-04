import React from 'react';
import './ErrorModal.css';
import { ErrorModalProps } from './ErrorModal.types';
import Button from '../../../../common/Button/Button';

const ErrorModal: React.FC<ErrorModalProps> = ({ errors }) => {
  return (
    <div className='error-modal'>
      <div className='error-modal__container'>
        <p className='error-modal__title'>ERROR</p>
        {errors.map((item, index) => (
          <p className='error-modal__text' key={index}>
            {item}
          </p>
        ))}

        <Button text='OK' />
      </div>
    </div>
  );
};

export default ErrorModal;
