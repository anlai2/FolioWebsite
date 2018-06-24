import firebase from 'firebase';
import { Keyboard, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_START,
  LOGOUT_USER_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const createUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOGIN_USER_START });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => createUserSuccess(dispatch, user))
    .catch(() => createUserFail(dispatch));
};

const createUserFail = dispatch => {
  dispatch({ type: CREATE_USER_FAIL });
};

const createUserSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_USER_SUCCESS,
    payload: user
  });

  Actions.loginUser();
  Keyboard.dismiss();
};

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOGIN_USER_START });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => loginUserFail(dispatch));
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
  Keyboard.dismiss();
};

export const logoutUserSuccess = dispatch => {
  dispatch({ type: LOGOUT_USER_SUCCESS });

  firebase.auth().signOut();
  Actions.intro();
};

export const forgotPassword = email => dispatch => {
  dispatch({ type: FORGOT_PASSWORD });

  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      Actions.pop();
      Alert.alert(
        'Reset Link Sent!',
        `Reset password link has been sent to ${email}`
      );
      dispatch({ type: FORGOT_PASSWORD_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      Alert.alert(
        'Email does not exist!',
        `${email} was not found in our database, is not a proper email, or has been reset recently`
      );
      dispatch({ type: FORGOT_PASSWORD_FAIL });
    });
};
