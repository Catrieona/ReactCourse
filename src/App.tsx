import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CreateCourse from './components/createCourse/CreateCourse';
import CourseInfo from './components/courses/components/CourseInfo/CourseInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Navigate to={localStorage.user ? '/courses' : '/login'} />}
        />
        <Route path='/courses' element={<Home />} />
        <Route path='/course/:id' element={<CourseInfo />} />
        <Route path='/courses/add' element={<CreateCourse />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
