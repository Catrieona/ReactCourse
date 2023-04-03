import React from 'react';
import coursesReducer from '../courses/reducer';
import { getCoursesAction } from '../courses/actions';

const coursesInitialState = {
  coursesList: [],
};

const wrongAction = { type: 'WRONG_ACTION' };

const stateAfterGetCourses = {
  ...coursesInitialState,
  coursesList: [{ name: 'new course', description: 'some description' }],
};

describe('Courses reducer', () => {
  test('returns initial state for wrong actions', () => {
    expect(coursesReducer(coursesInitialState, wrongAction)).toEqual(
      coursesInitialState
    );
  });

  test('returns new state for proper actions', () => {
    expect(
      coursesReducer(
        coursesInitialState,
        getCoursesAction(stateAfterGetCourses.coursesList)
      )
    ).toEqual(stateAfterGetCourses);
  });
});
