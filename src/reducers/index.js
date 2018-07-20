import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import CreateNoteReducer from './CreateNotesReducer';

export default combineReducers({
    auth: AuthReducer,
    createNote : CreateNoteReducer
})