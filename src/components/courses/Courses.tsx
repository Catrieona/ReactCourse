import React, { useEffect } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { connect, useDispatch } from 'react-redux';

function Courses({ coursesList, authorsList }) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = (
        await Promise.all([
          fetch('http://localhost:4000/courses/all', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }),
          fetch('http://localhost:4000/authors/all', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }),
        ])
      ).map((r) => r.json());
      const [courses, authors] = await Promise.all(result);
      dispatch({ type: 'SET_COURSES', payload: courses.result });
      dispatch({ type: 'SET_AUTHORS', payload: authors.result });
    }
    fetchData();
  }, []);

  return (
    <div className='courses-container'>
      {coursesList.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
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

const mapStateToProps = (store) => ({
  coursesList: store.courses.coursesList,
  authorsList: store.authors.authorsList,
});
export default connect(mapStateToProps)(Courses);
