import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../header/Header';
import SearchBar from '../searchBar/SearchBar';
import Button from '../../common/Button/Button';
import Courses from '../courses/Courses';
import { useAdmin } from '../../hooks/useAdmin';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const isAdmin = useAdmin();
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
      {isAdmin && (
        <div className='course-info__add-new-course-block'>
          <Button
            className='course-info__new-course-button'
            onClick={handleCreateCourse}
            text='Add new Course'
          />
        </div>
      )}
      <Courses />
    </div>
  );
}

export default Home;
