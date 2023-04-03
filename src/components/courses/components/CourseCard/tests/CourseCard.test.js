import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import CourseCard from '../CourseCard';
import { getCourseDuration } from '../../../../../helpers/getCourseDuration';

const mockedState = {
  user: {
    isAuth: true,
    name: 'Test Name',
    role: 'admin',
  },
  courses: [],
  authors: [],
};

const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

const testProps = {
  id: 1,
  title: 'Test title',
  creationDate: 'test Date',
  description: 'test desription',
  duration: 100,
  authors: ['111'],
  authorsList: [
    { name: 'author1', id: '111' },
    { name: 'author2', id: '222' },
  ],
};

describe('CourseCard', () => {
  test('renders title, description, duration, creatineDate and author name', () => {
    render(
      <MemoryRouter>
        <Provider store={mockedStore}>
          <CourseCard {...testProps} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.queryByText(testProps.title)).toBeInTheDocument();
    expect(screen.queryByText(testProps.description)).toBeInTheDocument();
    expect(
      screen.queryByText(getCourseDuration(testProps.duration))
    ).toBeInTheDocument();
    expect(screen.queryByText(testProps.creationDate)).toBeInTheDocument();
    expect(
      screen.queryByText(testProps.authorsList[0].name)
    ).toBeInTheDocument();
  });
});
