import {FETCH_TRACKS_PROFILE, FETCH_TRACKS_ALL} from "../actions/audio_actions";

export default function tracksReducer(state = null, action){
    
    switch(action.type){

        case(FETCH_TRACKS_PROFILE):
            
            return action.payload.data;

        case(FETCH_TRACKS_ALL):

            return(action.payload.data);

        default:
            return state;
    }
}