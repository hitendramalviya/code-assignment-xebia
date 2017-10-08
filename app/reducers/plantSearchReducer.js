import { PLANT_SEARCH_FAILURE, PLANT_SEARCH_REQUEST, PLANT_SEARCH_SUCCESS } from '../actions/plants/actionTypes';

const initialState = {
  searching: false,
  searchResult: []
};

export function plantSearchReducer(state = initialState, action) {
  switch (action.type) {
    case PLANT_SEARCH_REQUEST:
      return { ...state, searching: true };
    case PLANT_SEARCH_SUCCESS:
      return { ...state, searching: false, searchResult: [].concat(action.payload) };
    case PLANT_SEARCH_FAILURE:
      return { ...state, searching: false, searchResult: [] };
    default:
      return state;
  }
}
