import { USER_LOGIN, USER_LOGOUT, USER_ROLE } from './types';

interface IUserInitialState {
  isAuth: boolean;
  name: string;
  email: string;
  token: string;
  role: string;
}

const userInitialState: IUserInitialState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
  role: '',
};

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case USER_LOGIN: {
      const { result, user } = action.payload;
      const { email, name } = user;
      return { ...state, isAuth: true, token: result, email, name };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        isAuth: false,
        token: '',
        email: '',
        name: '',
        role: '',
      };
    }
    case USER_ROLE: {
      return { ...state, role: action.payload };
    }
    default:
      return state;
  }
}
