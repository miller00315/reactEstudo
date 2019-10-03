const INITIAL_STATE = {
  name: '',
  password: '',
  email: '',
  error: '',
  loading: false,
  showSlider: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'changeEmail':
      return {...state, email: action.payload};
    case 'changePassword':
      return {...state, password: action.payload};
    case 'changeName':
      return {...state, name: action.payload};
    case 'registerSuccess':
      return {...state, error: '', showSlider: true, password: ''};
    case 'registerError':
      return {...state, error: action.payload};
    case 'onDoneAllSlides':
      return {...state, showSlider: false};
    case 'onSkipSlides':
      return {...state, error: '', showSlider: false};
    case 'loginSuccess':
      return {...state, error: ''};
    case 'loginFailed':
      return {...state, error: action.payload};
    default:
      return state;
  }
};
