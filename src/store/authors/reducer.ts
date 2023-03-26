import { GET_AUTHORS, UPDATE_AUTHORS } from './types';

export interface IAuthorsInitialState {
  authorsList: { id: string; name: string }[];
}

const authorsInitialState: IAuthorsInitialState = {
  authorsList: [],
};

export default function authorsReducer(state = authorsInitialState, action) {
  switch (action.type) {
    case GET_AUTHORS: {
      return { ...state, authorsList: action.payload };
    }
    case UPDATE_AUTHORS: {
      const newAuthorsList = state.authorsList.concat(action.payload);
      return { ...state, authorsList: newAuthorsList };
    }
    default:
      return state;
  }
}
