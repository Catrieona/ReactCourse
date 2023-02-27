import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Courses from './components/courses/Courses';
import Button from './common/Button';
import { mockedCoursesList, mockedAuthorsList } from './mocks';
import SearchBar from './components/searchBar/SearchBar';
import CreateCourse from './components/createCourse/CreateCourse';

function App() {
  const [createMode, setCreateMode] = useState(false);
  const handleCreateCourse = () => {
    setCreateMode(true);
  };
  const [coursesList, setCoursesList] = useState(mockedCoursesList);
  const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
  const [renderCoursesList, setRenderCoursesList] = useState(mockedCoursesList);
  const handleSearch = (searchItem) => {
    setCoursesList(() => {
      if (!searchItem.length) {
        setRenderCoursesList(mockedCoursesList);
      } else {
        setRenderCoursesList(
          mockedCoursesList.filter((course) => {
            return course.title
              .toLowerCase()
              .includes(searchItem.toLowerCase());
          })
        );
      }
    });
  };

  return (
    <div className='course-info-page'>
      <Header />
      {createMode ? (
        <CreateCourse
          setCoursesList={setCoursesList}
          setAuthorsList={setAuthorsList}
          authorsList={authorsList}
          setCreateMode={setCreateMode}
        />
      ) : (
        <>
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
          <Courses coursesList={renderCoursesList} authorsList={authorsList} />
        </>
      )}
    </div>
  );
}

export default App;
