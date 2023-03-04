import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Header from '../header/Header';
import SearchBar from '../searchBar/SearchBar';
import Button from '../../common/Button/Button';
import Courses from '../courses/Courses';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const handleCreateCourse = () => {
    navigate('/courses/add');
  };

  const [coursesList, setCoursesList] = useState([]);
  const [authorsList, setAuthorsList] = useState([]);

  const [renderCoursesList, setRenderCoursesList] = useState(coursesList);

  useEffect(() => {
    const allCourses = fetch('http://localhost:4000/courses/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const allAuthors = fetch('http://localhost:4000/authors/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    async function fetchData() {
      const result = (await Promise.all([allCourses, allAuthors])).map((r) =>
        r.json()
      );
      const [courses, authors] = await Promise.all(result);
      setCoursesList(courses.result);
      setAuthorsList(authors.result);
    }
    fetchData();
  });

  const handleSearch = (searchItem) => {
    // setCoursesList(() => {
    //   if (!searchItem.length) {
    //     setRenderCoursesList(mockedCoursesList);
    //   } else {
    //     setRenderCoursesList(
    //       mockedCoursesList.filter((course) => {
    //         return course.title
    //           .toLowerCase()
    //           .includes(searchItem.toLowerCase());
    //       })
    //     );
    //   }
    // });
  };

  return (
    <div className='course-info-page'>
      <Header />
      <div className='course-info__search-block'>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className='course-info__add-new-course-block'>
        <Button
          className='course-info__new-course-button'
          onClick={handleCreateCourse}
          text='Add new Course'
        />
      </div>
      <Courses coursesList={coursesList} authorsList={authorsList} />
    </div>
  );
}

export default Home;
