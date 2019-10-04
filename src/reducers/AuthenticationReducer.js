import * as ACTIONS from '../actions/types';

const INITIAL_STATE = {
  name: '',
  password: '',
  email: '',
  errorLogin: '',
  errorRegister: '',
  loadingLogin: false,
  showSlider: true,
  loadingRegister: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_EMAIL:
      return {...state, email: action.payload};
    case ACTIONS.CHANGE_PASSWORD:
      return {...state, password: action.payload};
    case ACTIONS.CHANGE_NAME:
      return {...state, name: action.payload};
    case ACTIONS.DOING_REGISTER:
      return {...state, errorRegister: '', loadingRegister: true};
    case ACTIONS.REGISTER_SUCCESS:
      return {
        ...state,
        errorRegister: '',
        showSlider: true,
        loadingRegister: false,
      };
    case ACTIONS.REGISTER_ERROR:
      return {...state, errorRegister: action.payload, loadingRegister: false};
    case ACTIONS.ON_DONE_ALL_SLIDES:
      return {...state, showSlider: false};
    case ACTIONS.ON_SKIP_SLIDES:
      return {...state, showSlider: false};
    case ACTIONS.DOING_LOGIN:
      return {...state, errorLogin: '', loadingLogin: true};
    case ACTIONS.LOGIN_SUCCESS:
      return {...state, errorLogin: '', loadingLogin: false};
    case ACTIONS.LOGIN_FAILED:
      return {...state, errorLogin: action.payload, loadingLogin: false};
    default:
      return state;
  }
};
