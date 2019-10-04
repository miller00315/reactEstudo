import Firebase from '../Firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';

import * as ACTIONS from './types';

export const changeEmail = text => {
  return {type: ACTIONS.CHANGE_EMAIL, payload: text};
};

export const changePassword = text => {
  return {type: ACTIONS.CHANGE_PASSWORD, payload: text};
};

export const changeName = text => {
  return {type: ACTIONS.CHANGE_NAME, payload: text};
};

export const onDoneAllSlides = () => {
  return {type: ACTIONS.ON_DONE_ALL_SLIDES};
};

export const onSkipSlides = () => {
  return {type: ACTIONS.ON_SKIP_SLIDES};
};

export const registerUser = ({name, password, email}) => {
  return dispatch => {
    dispatch({type: ACTIONS.DOING_REGISTER});

    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        let emailb64 = b64.encode(email);

        Firebase.database()
          .ref(`/usuarios/${emailb64}`)
          .push({name})
          .then(value => registerSuccess(user, dispatch))
          .catch(error => registerFailed(error, dispatch));
      })
      .catch(error => registerFailed(error, dispatch));
  };
};

export const loginUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: ACTIONS.DOING_LOGIN});

    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        loginSuccess(user, dispatch);
      })
      .catch(error => {
        loginFailed(error, dispatch);
      });
  };
};

const registerSuccess = (user, dispatch) => {
  dispatch({type: ACTIONS.REGISTER_SUCCESS, payload: ''});
  Actions.welcomes();
};

const registerFailed = (error, dispatch) => {
  dispatch({type: ACTIONS.REGISTER_ERROR, payload: error.code});
};

const loginSuccess = (user, dispatch) => {
  dispatch({type: ACTIONS.LOGIN_SUCCESS});
  Actions.mainScreen();
};

const loginFailed = (error, dispatch) => {
  dispatch({type: ACTIONS.LOGIN_FAILED, payload: error.code});
};
