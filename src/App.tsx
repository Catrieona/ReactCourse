import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CreateCourse from './components/createCourse/CreateCourse';
import CourseInfo from './components/courses/components/CourseInfo/CourseInfo';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import './App.css';

function App() {
  const isAuth = useSelector((store) => store.user.isAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Navigate to={isAuth ? '/courses' : '/login'} />}
        />
        <Route path='/courses' element={<Home />} />
        <Route path='/course/:id' element={<CourseInfo />} />
        <Route
          path='/courses/add'
          element={
            <PrivateRoute>
              <CreateCourse />
            </PrivateRoute>
          }
        />
        <Route
          path='/courses/update/:courseId'
          element={
            <PrivateRoute>
              <CreateCourse />
            </PrivateRoute>
          }
        />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
