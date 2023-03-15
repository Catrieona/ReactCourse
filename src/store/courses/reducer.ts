import { CourseCardProps } from '../../components/courses/components/CourseCard/CourseCard.types';

export interface ICoursesInitialState {
  coursesList: CourseCardProps[];
}

const coursesInitialState: ICoursesInitialState = {
  coursesList: [],
};

export default function coursesReducer(state = coursesInitialState, action) {
  switch (action.type) {
    case 'SET_COURSES': {
      return { ...state, coursesList: action.payload };
    }
    default:
      return state;
  }
}
