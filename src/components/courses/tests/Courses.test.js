import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Courses from '../Courses';

const mockedState = {
  user: {
    isAuth: true,
    name: 'Test Name',
    role: 'admin',
  },
  courses: {
    coursesList: [
      {
        id: 1,
        title: 'Test title',
        creationDate: 'test Date',
        description: 'test desription',
        duration: 100,
        authors: ['111'],
      },
    ],
  },
  authors: {
    authorsList: [
      { name: 'author1', id: '111' },
      {
        name: 'author2',
        id: '222',
      },
    ],
  },
};

const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

describe('Courses', () => {
  test('renders exact number of courses', () => {
    render(
      <MemoryRouter>
        <Provider store={mockedStore}>
          <Courses />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByTestId('course').length).toEqual(
      mockedState.courses.coursesList.length
    );

    // expect(screen.queryByText(testProps.description)).toBeInTheDocument();
    // expect(
    //     screen.queryByText(getCourseDuration(testProps.duration))
    // ).toBeInTheDocument();
    // expect(screen.queryByText(testProps.creationDate)).toBeInTheDocument();
    // expect(
    //     screen.queryByText(testProps.authorsList[0].name)
    // ).toBeInTheDocument();
  });
});
