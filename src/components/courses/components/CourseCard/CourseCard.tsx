import React from 'react';
import './CourseCard.css';
import { CourseCardProps } from './CourseCard.types';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { Link } from 'react-router-dom';

const CourseCard: React.FC<CourseCardProps> = ({
  id,
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
        <Link className='course-card__show-course-button' to={`/course/${id}`}>
          Show course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
