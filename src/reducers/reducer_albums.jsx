import { FETCH_ALBUMS } from "../actions/audio_actions";

export default function albumReducer(state = null, action){

    switch(action.type){

        case FETCH_ALBUMS:
            return action.payload;

        default: return state
    }
}