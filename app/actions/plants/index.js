import { getPlants } from '../../middleware/swapi';
import { PLANT_SEARCH_FAILURE, PLANT_SEARCH_REQUEST, PLANT_SEARCH_SUCCESS } from './actionTypes';

// Async Aaction Creators
// Relies on Redux Thunk middleware.
export function search(term) {
  return (dispatch) => {
    dispatch(searchRequest());

    return getPlants(term).then(tree => {
      dispatch(searchSuccess(tree));
    });
  };
}

export function searchRequest() {
  return {
    type: PLANT_SEARCH_REQUEST
  };
}

export function searchSuccess(payload) {
  return {
    type: PLANT_SEARCH_SUCCESS,
    payload
  };
}

export function searchFailuer() {
  return {
    type: PLANT_SEARCH_FAILURE
  };
}
