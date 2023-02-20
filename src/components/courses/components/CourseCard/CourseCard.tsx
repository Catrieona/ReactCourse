import React from 'react';
import './CourseCard.css';
import { CourseCardProps } from './CourseCard.types';
import Button from '../../../../common/Button';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  creationDate,
  description,
  duration,
  authors,
  authorsList,
}) => {
  return (
    <div className='course-card__container'>
      <div className='course-card__description-block'>
        <h2>{title}</h2>
        <p className='course-card__description'>{description}</p>
      </div>
      <div className='course-card__creation-info-container'>
        <p className='course-card__creation-info'>
          <strong>Authors:</strong>{' '}
          {authors.map((author, index) => (
            <span key={index}>
              {index > 0 ? ', ' : ''}
              {authorsList.find((aut) => aut.id === author).name}
            </span>
          ))}
        </p>
        <p className='course-card__creation-info'>
          <strong>Duration:</strong>
          {getCourseDuration(duration)}
        </p>
        <p className='course-card__creation-info'>
          <strong>Created:</strong>
          {creationDate}
        </p>
        <Button
          className='course-card__show-course-button'
          text='Show course'
        />
      </div>
    </div>
  );
};

export default CourseCard;
