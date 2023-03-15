import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import './CreateCourse.css';
import { CreateCourseProps } from './CreateCourse.types';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const CreateCourse: React.FC<CreateCourseProps> = ({ authorsList }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [courseAuthors, setCourseAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState('');
  const [duration, setDuration] = useState('');

  const [errors, setErrors] = useState({
    title: false,
    description: false,
    duration: false,
    courseAuthors: false,
    newAuthor: false,
  });

  const handleTitle = (event) => {
    setErrors((prev) => ({
      ...prev,
      title: false,
    }));
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setErrors((prev) => ({
      ...prev,
      description: false,
    }));
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasErrors = false;
    if (!title || title.length < 2) {
      setErrors((prev) => ({
        ...prev,
        title: true,
      }));
      hasErrors = true;
    }
    if (!description || description.length < 2) {
      setErrors((prev) => ({
        ...prev,
        description: true,
      }));
      hasErrors = true;
    }

    if (!duration) {
      setErrors((prev) => ({
        ...prev,
        duration: true,
      }));
      hasErrors = true;
    }

    if (!courseAuthors.length) {
      setErrors((prev) => ({
        ...prev,
        courseAuthors: true,
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      alert('Please, fill in all fields');
      return;
    }

    const courseAuthorsId: string[] = [];
    courseAuthors.forEach((auth) => {
      return courseAuthorsId.push(auth.id);
    });
    const today = new Date('03/25/2015');

    const newCourseItem = {
      id: Date.now(),
      title,
      description,
      creationDate: today.toLocaleDateString(),
      duration,
      authors: courseAuthorsId,
    };

    fetch('http://localhost:4000/courses/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourseItem),
    }).then(() => {
      navigate('/courses');
    });
  };

  const handleAddAuthors = (author) => {
    setCourseAuthors((prev) => {
      if (!prev.find((aut) => aut.name === author.name)) {
        return prev.concat(author);
      } else {
        return prev;
      }
    });
  };

  const handleCreateAuthors = () => {
    if (!newAuthor || newAuthor.length < 2) {
      setErrors((prev) => ({
        ...prev,
        newAuthor: true,
      }));
      return;
    }
    //
    // setAuthorsList((prev) => {
    //   if (!prev.find((aut) => aut.name === newAuthor)) {
    //     return prev.concat({ name: newAuthor, id: newAuthor + Date.now() });
    //   } else {
    //     return prev;
    //   }
    // });
    // setNewAuthor('');
  };

  const handleNewAuthor = (event) => {
    setErrors((prev) => ({
      ...prev,
      courseAuthors: false,
    }));
    setNewAuthor(event.target.value);
  };

  const handleDeleteAuthors = (author) => {
    setCourseAuthors((prev) => {
      return prev.filter((aut) => aut.id !== author.id);
    });
  };

  const handleAddDuration = (event) => {
    setErrors((prev) => ({
      ...prev,
      duration: false,
    }));
    setDuration(+event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='create-course__form'>
      <div className='create-course__button-container'>
        <Button
          className='create-course__add-new-course-button'
          text='Add new Course'
          type='submit'
        />
      </div>
      <div className='create-course__description-block'>
        <div>
          <div className='create-course__description'>
            <label>
              Title:
              <input
                className={`create-course__input ${
                  errors.title ? 'error' : ''
                }`}
                value={title}
                onChange={handleTitle}
                placeholder='Enter title...'
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <textarea
                className={`create-course__input ${
                  errors.description ? 'error' : ''
                }`}
                onChange={handleDescription}
                placeholder='Enter description...'
              />
            </label>
          </div>
        </div>
      </div>

      <div className='create-course__info-block'>
        <div className='create-course__author-container'>
          <div className='create-course__create-author-block'>
            <h4 className='create-course__title'>Add Author</h4>
            <div className='create-course__add-author-block'>
              <label>
                Author Name
                <input
                  value={newAuthor}
                  onChange={handleNewAuthor}
                  placeholder='Enter authors name...'
                  className='create-course__input'
                />
              </label>
              <Button onClick={handleCreateAuthors} text='Create author' />
            </div>
          </div>
          <div className='create-course__current-author-block'>
            <h4 className='create-course__title'>Authors</h4>
            <div>
              {authorsList.map((author, index) => (
                <div key={index} className='create-course__add-author-block'>
                  <p>{author.name}</p>
                  <Button
                    onClick={() => handleAddAuthors(author)}
                    text='Add author'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='create-course__current-course-data'>
          <div className='create-course__current-course-duration-block'>
            <h4 className='create-course__title'>Duration</h4>
            <div>
              <label>Duration</label>
              <input
                value={duration}
                onChange={handleAddDuration}
                placeholder='Enter duration in minutes...'
                className={`create-course__input ${
                  errors.duration ? 'error' : ''
                }`}
              />
              <p className='create-course__current-course-duration'>
                <strong>DURATION: </strong>
                {duration ? (
                  <strong>{getCourseDuration(duration)}</strong>
                ) : (
                  <strong>00.00 hours</strong>
                )}
              </p>
            </div>
          </div>

          <div className='create-course__current-course-authors-block'>
            <h4 className='create-course__title'>Course Authors</h4>
            <div>
              {courseAuthors.length ? (
                courseAuthors.map((author, index) => (
                  <div key={index} className='create-course__add-author-block'>
                    <p>{author.name}</p>
                    <Button
                      onClick={() => handleDeleteAuthors(author)}
                      text='Delete author'
                    />
                  </div>
                ))
              ) : (
                <strong
                  className={`create-course__current-course-authors-empty ${
                    errors.courseAuthors ? 'error-authors' : ''
                  }`}
                >
                  {' '}
                  Authors list is empty{' '}
                </strong>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (store) => ({
  authorsList: store.authors.authorsList,
});
export default connect(mapStateToProps)(CreateCourse);
