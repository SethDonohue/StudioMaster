import {FETCH_I_AND_G} from "../actions/index";

export default function instrumentAndGenreReducer(state = null, action){
    switch(action.type){
        case FETCH_I_AND_G:
            console.log(action.payload.data)
            return action.payload.data;
        default:
            return state
    }
}