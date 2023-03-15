interface IUserInitialState {
  isAuth: boolean;
  name: string;
  email: string;
  token: string;
}

const userInitialState: IUserInitialState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
};

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      const { result, user } = action.payload;
      const { email, name } = user;
      return { ...state, isAuth: true, token: result, email, name };
    }
    case 'LOGOUT': {
      return { ...state, isAuth: false, token: '', email: '', name: '' };
    }
    default:
      return state;
  }
}
