import React, { useEffect, useState } from 'react';
import './CourseInfo.css';
import { CourseInfoProps } from './CourseInfo.types';
import { Link, useParams } from 'react-router-dom';

const CourseInfo: React.FC<CourseInfoProps> = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    const getCourse = fetch('http://localhost:4000/courses/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    getCourse
      .then((response) => response.json())
      .then((data) => setCourse(data.result));
  });
  return (
    <div className='course-info__container'>
      <div>
        <Link className='course-card__show-course-button' to={`/courses`}>
          Back to courses
        </Link>
      </div>
      <p className='course-info__title'>{course.title}</p>

      <div className='course-info__block'>
        <div>{course.description}</div>
        <div className='course-info__creation-data'>
          <p>
            <strong>ID:</strong> <span>{course.id}</span>
          </p>
          <p>
            <strong>Duration</strong> : <span>{course.duration}</span>
          </p>
          <p>
            <strong>Created</strong> : <span>{course.creationDate}</span>
          </p>
          <p>
            <strong>Authors:</strong>{' '}
            {/*{course.authors.map((author, index) => (*/}
            {/*  <span key={index}>*/}
            {/*    {index > 0 ? ', ' : ''}*/}
            {/*    {authorsList.find((aut) => aut.id === author).name}*/}
            {/*/!*  </span>*!/*/}
            {/*))}*/}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
