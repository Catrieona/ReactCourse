import { GET_AUTHORS, UPDATE_AUTHORS } from './types';

export const getAuthorsAction = (payload) => ({ type: GET_AUTHORS, payload });
export const updateAuthorsAction = (payload) => ({
  type: UPDATE_AUTHORS,
  payload,
});

export const addNewAuthorAsync = (name: string) => {
  return async (dispatch, getState) => {
    const { user } = getState();

    try {
      const response = await fetch('http://localhost:4000/authors/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: user.token,
        },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      if (data.successful) {
        dispatch(updateAuthorsAction(data.result));
      }
    } catch (e) {
      console.log(e);
    }
  };
};
