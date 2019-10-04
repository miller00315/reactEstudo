import {combineReducers} from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import AppReducer from './Appreducer';

export default combineReducers({
  AuthenticationReducer,
  AppReducer,
});
