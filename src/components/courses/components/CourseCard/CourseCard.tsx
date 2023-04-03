import React from 'react';
import './CourseCard.css';
import { CourseCardProps } from './CourseCard.types';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourseAsyncAction } from '../../../../store/courses/actions';

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  creationDate,
  description,
  duration,
  authors,
  authorsList,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.user.role) === 'admin';

  const handleCourseDelete = () => {
    dispatch(deleteCourseAsyncAction(id));
  };

  const handleCourseUpdte = () => {
    navigate('/courses/update/' + id);
  };

  return (
    <div className='course-card__container' data-testid={'course'}>
      <div className='course-card__description-block'>
        <h2>{title}</h2>
        <p className='course-card__description'>{description}</p>
      </div>
      <div className='course-card__creation-info-container'>
        <p className='course-card__creation-info'>
          <strong>Authors:</strong>
          {authors.map((author, index) => (
            <span key={index}>
              {index > 0 ? ', ' : ''}
              {authorsList.find((aut) => aut.id === author)?.name}
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
        {isAdmin && (
          <>
            <button
              className='course-card__delete-course-button'
              onClick={handleCourseDelete}
            >
              DEL
            </button>
            <button
              className='course-card__edit-course-button'
              onClick={handleCourseUpdte}
            >
              UPD
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
