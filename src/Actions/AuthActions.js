import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';
import firebase from 'firebase';

export const onChangeEmail = (text) => {
    return {
        type: EMAIL_CHANGE,
        payload: text
    }
}
export const onChangePassword = (text) => {
    return {
        type: PASSWORD_CHANGE,
        payload: text
    }
}

export const onLogin = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER, payload: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => logInUserSucesss(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => logInUserSucesss(dispatch, user))
                    .catch(() => loginUserFailed(dispatch))
            })
    }
}

const logInUserSucesss = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
}

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: 'login user failed'
    });
}