import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../Header';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const mockedState = {
  user: {
    isAuth: true,
    name: 'Test Name',
  },
  courses: [],
  authors: [],
};

const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

describe('Header', () => {
  test('renders name and logo', () => {
    render(
      <MemoryRouter>
        <Provider store={mockedStore}>
          <Header />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.queryByText('Test Name')).toBeInTheDocument();
    expect(screen.queryByTestId('logo')).toBeInTheDocument();
  });
});
