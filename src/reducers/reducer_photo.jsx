import { PHOTO_CHANGE } from "../actions/photo_actions";

function photoReducer(state = null, action) {
    switch(action.type){
        case PHOTO_CHANGE:
            return action.payload;

        default:
            return state;
    }
}

export default photoReducer;