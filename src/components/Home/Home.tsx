import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Header from '../header/Header';
import SearchBar from '../searchBar/SearchBar';
import Button from '../../common/Button/Button';
import Courses from '../courses/Courses';
import './Home.css';
import { useDispatch, connect } from 'react-redux';

function Home({ coursesList, authorsList }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateCourse = () => {
    navigate('/courses/add');
  };

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
      <Courses />
    </div>
  );
}

export default Home;
