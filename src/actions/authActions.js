import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_START,
  LOGOUT_USER_SUCCESS
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const createUser = ({ email, password, history }) => dispatch => {
  dispatch({ type: LOGIN_USER_START });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => createUserSuccess(dispatch, user))
    .catch(() => createUserFail(dispatch));
  history.push('/login');
};

const createUserFail = dispatch => {
  dispatch({ type: CREATE_USER_FAIL });
};

const createUserSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_USER_SUCCESS,
    payload: user
  });
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
};

export const logoutUserSuccess = dispatch => {
  dispatch({ type: LOGOUT_USER_SUCCESS });

  firebase.auth().signOut();
};
