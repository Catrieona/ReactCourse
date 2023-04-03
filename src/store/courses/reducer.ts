import { CourseCardProps } from '../../components/courses/components/CourseCard/CourseCard.types';
import { ADD_COURSE, DELETE_COURSE, GET_COURSES } from './types';

export interface ICoursesInitialState {
  coursesList: CourseCardProps[];
}

const coursesInitialState: ICoursesInitialState = {
  coursesList: [],
};

export default function coursesReducer(state = coursesInitialState, action) {
  switch (action.type) {
    case GET_COURSES: {
      return { ...state, coursesList: action.payload };
    }
    case DELETE_COURSE: {
      const newCoursesList = state.coursesList.filter(
        (course) => course.id !== action.payload
      );
      return { ...state, coursesList: newCoursesList };
    }
    default:
      return state;
  }
}
