import { USER_LOGIN, USER_LOGOUT, USER_ROLE } from './types';

export const userLoginAction = (payload) => ({ type: USER_LOGIN, payload });
export const userLogoutAction = () => ({ type: USER_LOGOUT });
export const userRoleAction = (payload) => ({ type: USER_ROLE, payload });

export const userLogoutAsyncAction = () => {
  return (dispatch, getState) => {
    const { user } = getState();

    try {
      fetch('http://localhost:4000/logout', {
        method: 'DELETE',
        headers: {
          Authorization: user.token,
        },
      }).then(() => dispatch(userLogoutAction()));
    } catch (e) {
      console.log(e);
    }
  };
};
