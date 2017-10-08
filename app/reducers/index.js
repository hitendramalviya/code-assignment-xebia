import { combineReducers } from 'redux';
import { loginReducer as auth } from './loginReducer';
import { plantSearchReducer as plants } from './plantSearchReducer';

export default combineReducers({
  auth,
  plants
});
