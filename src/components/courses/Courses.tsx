import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from './components/CourseCard/CourseCard';
import { getCoursesAction } from '../../store/courses/actions';
import { getAuthorsAction } from '../../store/authors/actions';
import { userRoleAction } from '../../store/user/actions';
import './Courses.css';

function Courses() {
  const coursesList = useSelector((state) => state.courses.coursesList);
  const authorsList = useSelector((state) => state.authors.authorsList);
  const userToken = useSelector((state) => state.user.token);

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
          fetch('http://localhost:4000/users/me', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: userToken,
            },
          }),
        ])
      ).map((r) => r.json());
      const [courses, authors, currentUser] = await Promise.all(result);
      dispatch(getCoursesAction(courses.result));
      dispatch(getAuthorsAction(authors.result));
      dispatch(userRoleAction(currentUser.result.role));
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

export default Courses;
