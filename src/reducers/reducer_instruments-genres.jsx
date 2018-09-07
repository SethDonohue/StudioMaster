import {FETCH_I_AND_G} from "../actions/index";

export default function instrumentAndGenreReducer(state = null, action){
    switch(action.type){
        case FETCH_I_AND_G:
            return action.payload.data;
        default:
            return state
    }
}