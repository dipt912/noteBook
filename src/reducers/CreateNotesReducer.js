import {
    NAME_CHANGE,
    KEYWORD_TEXT_CHANGE,
    NOTE_TEXT_CHANGE,
    KEYWORDS_UPDATE,
    KEYWORDS_REMOVE,
    CREATE_NOTES,
    CREATE_NOTES_SUCCESS,
    CREATE_NOTES_FAILED
} from '../Actions/types';

const INITIAL_STATE = {
    name: '',
    keywords: [],
    noteText: '',
    keywordInput: '',
    createNoteProgress: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case NAME_CHANGE:
            return { ...state, name: action.payload }
        case KEYWORD_TEXT_CHANGE:
            return { ...state, keywordInput: action.payload }
        case KEYWORDS_UPDATE:
            return { ...state, keywords: [...state.keywords, action.payload], keywordInput: '' }
        case NOTE_TEXT_CHANGE:
            return { ...state, noteText: action.payload }
        case KEYWORDS_REMOVE: {
            let array = [...state.keywords];
            array.splice(action.payload, 1);
            console.log(array);
            return { ...state, keywords: array };
        }
        case CREATE_NOTES:
            return { ...state, createNoteProgress: true }
        case CREATE_NOTES_SUCCESS:
            return { ...state, ...INITIAL_STATE }


        default:
            return state;
    }
}