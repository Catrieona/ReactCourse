import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';
import userReducer from './user/reducer';

const reducer = {
  authors: authorsReducer,
  courses: coursesReducer,
  user: userReducer,
};

export default reducer;
