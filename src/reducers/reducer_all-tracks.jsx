import {FETCH_TRACKS_PROFILE, FETCH_TRACKS_ALL, DELETE_TRACKS} from "../actions/audio_actions";

export default function tracksReducer(state = null, action){
    
    switch(action.type){

        case FETCH_TRACKS_PROFILE:
            
            return action.payload.data;

        case FETCH_TRACKS_ALL:

            return action.payload.data;

        case DELETE_TRACKS:
            return state;

        default:
            return state;
    }
}