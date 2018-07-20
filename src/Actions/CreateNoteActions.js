import {
    NAME_CHANGE,
    KEYWORD_TEXT_CHANGE,
    NOTE_TEXT_CHANGE,
    KEYWORDS_UPDATE,
    KEYWORDS_REMOVE
} from './types';
import firebase from 'firebase';


export const onChangeName = (text) => {
    return {
        type: NAME_CHANGE,
        payload: text
    }
}
export const onChangeKeywordText = (text) => {
    return {
        type: KEYWORD_TEXT_CHANGE,
        payload: text
    }
}

export const onChangeNoteText = (text) => {
    return {
        type: NOTE_TEXT_CHANGE,
        payload: text
    }
}

export const onChangeKeywordUpdate= (text) => {
    return {
        type: KEYWORDS_UPDATE,
        payload: text
    }
}

export const onRemoveKey= (index) => {
    return {
        type: KEYWORDS_REMOVE,
        payload: index
    }
}