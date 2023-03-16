export interface IAuthorsInitialState {
  authorsList: { id: string; name: string }[];
}

const authorsInitialState: IAuthorsInitialState = {
  authorsList: [],
};

export default function authorsReducer(state = authorsInitialState, action) {
  switch (action.type) {
    case 'SET_AUTHORS': {
      console.log(action.payload);
      return { ...state, authorsList: action.payload };
    }
    default:
      return state;
  }
}
