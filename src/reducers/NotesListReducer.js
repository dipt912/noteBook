import {
    NOTES_FETCH_SUCESS
} from '../Actions/types';

const INITIAL_STATE = {
   
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case NOTES_FETCH_SUCESS :
        return action.payload

        default:
            return state;
    }
}