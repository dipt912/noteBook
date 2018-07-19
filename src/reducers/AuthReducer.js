
import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../Actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    loading: false,
    user: null
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMAIL_CHANGE:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGE:
            return { ...state, password: action.payload }
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload}
        case LOGIN_USER_FAIL:
            return { ...state, ...INITIAL_STATE , error: action.payload }
        case LOGIN_USER:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
}