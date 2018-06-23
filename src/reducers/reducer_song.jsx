import { CHANGE_SONG, CLEAR_SONG } from "../actions/index";

function NewSong (state = null, action) {

    switch(action.type){

        case CHANGE_SONG:
            return action.payload;

        case CLEAR_SONG:
            return null;
    }
    return state;
};

export default NewSong;