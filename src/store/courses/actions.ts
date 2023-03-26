import { ADD_COURSE, DELETE_COURSE, GET_COURSES, SAVE_COURSES } from './types';
import { userLogoutAction } from '../user/actions';

export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
const deleteCourseAction = (payload) => ({ type: DELETE_COURSE, payload });
const saveCoursesAction = (payload) => ({ type: SAVE_COURSES, payload });
export const getCoursesAction = (payload) => ({ type: GET_COURSES, payload });

export const deleteCourseAsyncAction = (courseId: number) => {
  return async (dispatch, getState) => {
    const { user } = getState();

    try {
      const response = await fetch(
        'http://localhost:4000/courses/' + courseId,
        {
          method: 'DELETE',
          headers: {
            Authorization: user.token,
          },
        }
      );
      const data = await response.json();
      if (data.successful) {
        dispatch(deleteCourseAction(courseId));
      }
    } catch (e) {
      console.log(e);
    }
  };
};
