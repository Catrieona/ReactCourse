import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';

function Courses({ coursesList, authorsList }) {
  return (
    <div className='courses-container'>
      {coursesList.map((course) => (
        <CourseCard
          key={course.id}
          description={course.description}
          title={course.title}
          authors={course.authors}
          duration={course.duration}
          creationDate={course.creationDate}
          authorsList={authorsList}
        />
      ))}
    </div>
  );
}

export default Courses;
