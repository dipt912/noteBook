import { SELECTED_NOTE,
    EDIT_SELECTED_NOTE,
    DELETE_SELECTED_NOTE } from './types';
import firebase from 'firebase';


export const setSelectedNote = (note) => {
    return {
        type:SELECTED_NOTE,
        payload: note
    }
}

export const onEditNote = ({keywords, name, noteText, uid, history})=> {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
            .set({ name, keywords, noteText})
            .then(()=> {
                dispatch({type : EDIT_SELECTED_NOTE });
                history.push('/notes');
            })
           
    };
    
}

export const onDeleteNote = ({ uid, history })=> {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
            .remove()
            .then(()=> {
                history.push('/notes');
            })
           
    };
    
}
