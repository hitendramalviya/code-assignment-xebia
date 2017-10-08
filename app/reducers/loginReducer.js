import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT } from '../actions/login/actionTypes';

const initialState = {
  response: null,
  inProgress: false
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, inProgress: true, response: null };
    case LOGIN_SUCCESS:
      return { ...state, inProgress: false, response: Object.assign({}, action.payload) };
    case LOGIN_FAILURE:
      return { ...state, inProgress: false, response: null };
    case LOGOUT:
      return { ...state, inProgress: false, response: null };
    default:
      return state;
  }
}
