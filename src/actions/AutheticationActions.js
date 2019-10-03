import Firebase from '../Firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';

export const changeEmail = text => {
  return {type: 'changeEmail', payload: text};
};

export const changePassword = text => {
  return {type: 'changePassword', payload: text};
};

export const changeName = text => {
  return {type: 'changeName', payload: text};
};

export const onDoneAllSlides = () => {
  return {type: 'onDoneAllSlides'};
};

export const onSkipSlides = () => {
  return {type: 'onSkipSlides'};
};

export const registerUser = ({name, password, email}) => {
  return dispatch => {
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
  dispatch({type: 'registerSuccess', payload: ''});
  Actions.welcomes();
};

const registerFailed = (error, dispatch) => {
  dispatch({type: 'registerError', payload: error.code});
};

const loginSuccess = (user, dispatch) => {
  dispatch({type: 'loginSuccess'});
  Actions.mainScreen();
};

const loginFailed = (error, dispatch) => {
  dispatch({type: 'loginFailed', payload: error.code});
};
