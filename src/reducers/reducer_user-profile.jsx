import { GET_ACCOUNT_INFO, FETCH_PROFILE_IG } from '../actions/index';

function getAccountInfo(state = null, action) {

    switch(action.type){
        case GET_ACCOUNT_INFO:
            return action.payload.data;

        case FETCH_PROFILE_IG:
            console.log(action.payload.data)
            
            return [...state, action.payload.data.genres, action.payload.data.instruments];
        default:
            return state;
    }

}

export default getAccountInfo;

