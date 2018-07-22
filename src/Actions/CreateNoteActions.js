import {
    NAME_CHANGE,
    KEYWORD_TEXT_CHANGE,
    NOTE_TEXT_CHANGE,
    KEYWORDS_UPDATE,
    KEYWORDS_REMOVE,
    CREATE_NOTES,
    CREATE_NOTES_SUCCESS,
    CREATE_NOTES_FAILED,
    NOTES_FETCH_SUCESS,
    RESET
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

export const onCreateNote =({ name, noteText, keywords,history })=> {
    const { currentUser } = firebase.auth();
        return (dispatch) => {
            dispatch({type : CREATE_NOTES, payload: true});
            firebase.database().ref(`/users/${currentUser.uid}/notes`)
                .push({ name, noteText, keywords })
                .then(() => {
                    console.log("sucess");
                    dispatch({type : CREATE_NOTES_SUCCESS})
                    history.push('/notes');
                })
        
            }
}

export const notesFetch = () => {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes`)
            .on('value', snapshot => {
                dispatch({ type: NOTES_FETCH_SUCESS, payload: snapshot.val()})
            })
    };
}


export const resetCreateState=() => {
return {
    type: RESET
}
}