import b64 from 'base-64';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

import * as ACTIONS from './types';
import Firebase from '../Firebase';

export const changeEmail = text => {
  return {type: ACTIONS.CHANDE_ADD_CONTACT_EMAIL, payload: text};
};

export const setAddContactScreen = noThere => {
  if (noThere) {
    Actions.addContact();
  }

  return {type: ACTIONS.SHOW_ADD_CONTACT_SCREEN};
};

export const addContact = email => {
  return dispatch => {
    dispatch({type: ACTIONS.DOING_ADD_CONTACT});
    let emailB64 = b64.encode(email);
    Firebase.database()
      .ref(`/usuarios/${emailB64}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          const user = _.first(_.values(snapshot.val()));

          const {currentUser} = Firebase.auth();
          let emailUser = b64.encode(currentUser.email);

          Firebase.database()
            .ref(`/usuarios_contatos/${emailUser}`)
            .push({email, name: user.name})
            .then(result => addContactSuccess(result, dispatch))
            .catch(error => addContactFailed(error, dispatch));
        } else {
          dispatch({
            type: ACTIONS.ADD_CONTACT_FAILED,
            payload: 'Usuário inválido',
          });
        }
      })
      .catch(error => addContactFailed(error, dispatch));
  };
};

const addContactSuccess = (snapshot, dispatch) => {
  dispatch({type: ACTIONS.ADD_CONTACT_SUCCESS, payload: snapshot});
};

const addContactFailed = (error, dispatch) => {
  dispatch({type: ACTIONS.ADD_CONTACT_FAILED, payload: error.code});
};
