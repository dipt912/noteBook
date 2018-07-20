import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import CreateNoteReducer from './CreateNotesReducer';
import NotesListReducer from './NotesListReducer';

export default combineReducers({
    auth: AuthReducer,
    createNote : CreateNoteReducer,
    notes:NotesListReducer
})