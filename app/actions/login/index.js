import { login as apiLogin } from '../../middleware/login-api';
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT } from './actionTypes';

// Async Aaction Creators
// Relies on Redux Thunk middleware.
export function login(username, password) {
  return (dispatch) => {
    dispatch(loginRequest());

    return apiLogin(username, password)
      .then(user => dispatch(loginSuccess(user)))
      .catch(() => loginFailuer());
  };
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
}

export function loginFailuer() {
  return {
    type: LOGIN_FAILURE
  };
}

export function logOut() {
  return {
    type: LOGOUT
  };
}
