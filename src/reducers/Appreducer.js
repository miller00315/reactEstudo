import * as ACTIONS from '../actions/types';

const INITIAL_STATE = {
  email: '',
  loadingAddContact: false,
  showAddContactScreen: true,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.CHANDE_ADD_CONTACT_EMAIL:
      return {...state, email: action.payload};
    case ACTIONS.DOING_ADD_CONTACT:
      return {...state, loadingAddContact: true, error: ''};
    case ACTIONS.ADD_CONTACT_SUCCESS:
      return {
        ...state,
        loadingAddContact: false,
        error: '',
        showAddContactScreen: false,
        email: '',
      };
    case ACTIONS.ADD_CONTACT_FAILED:
      return {
        ...state,
        loadingAddContact: false,
        error: action.payload,
        email: '',
      };
    case ACTIONS.SHOW_ADD_CONTACT_SCREEN:
      return {...state, showAddContactScreen: true};
    default:
      return state;
  }
};
